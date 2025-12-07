'use client';

import { useSyncExternalStore } from 'react';

type Snapshot = {
  isScrolled: boolean;
  hidden: boolean
};

const DEFAULT_SNAPSHOT: Snapshot = { isScrolled: false, hidden: false };
const STORES = new Map<number, ReturnType<typeof createScrollStore>>();

function createScrollStore(headerHeight: number) {
  let lastY = 0;
  let lastSnapshot: Snapshot = DEFAULT_SNAPSHOT;
  let hasScrolledOnce = false;
  let rafId: number | null = null;
  const listeners = new Set<() => void>();
  const TOLERANCE = 4;

  const compute = (y: number): Snapshot => {
    const isScrolled = y > headerHeight;
    const isScrollingDown = y - lastY > TOLERANCE;
    const isScrollingUp = lastY - y > TOLERANCE;

    const hidden = hasScrolledOnce ? (isScrolled && isScrollingDown) ? true : (isScrollingUp ? false : lastSnapshot.hidden) : false;

    return { isScrolled, hidden };
  };

  const tick = () => {
    rafId = null;
    const y = window.scrollY;
    const next = compute(y);

    hasScrolledOnce = true;
    lastY = y;

    if (next.isScrolled !== lastSnapshot.isScrolled || next.hidden !== lastSnapshot.hidden) {
      lastSnapshot = next;
      listeners.forEach((cb) => cb());
    }
  };

  const onScroll = () => {
    if (rafId != null) return;
    rafId = requestAnimationFrame(tick);
  };

  const subscribe = (cb: () => void) => {
    listeners.add(cb);
    if (listeners.size === 1) {

      lastY = window.scrollY;
      lastSnapshot = { isScrolled: lastY > headerHeight, hidden: false };
      hasScrolledOnce = false;
      window.addEventListener('scroll', onScroll, { passive: true });
      if (rafId == null) rafId = requestAnimationFrame(tick);
    }
    return () => {
      listeners.delete(cb);
      if (listeners.size === 0) {
        if (rafId != null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        window.removeEventListener('scroll', onScroll);
      }
    };
  };

  const getSnapshot = () => lastSnapshot;
  const getServerSnapshot = () => DEFAULT_SNAPSHOT;

  return { subscribe, getSnapshot, getServerSnapshot };
}

function getStore(headerHeight: number) {
  let store = STORES.get(headerHeight);
  if (!store) {
    store = createScrollStore(headerHeight);
    STORES.set(headerHeight, store);
  }
  return store;
}

export function useScrollHeader(headerHeight: number = 60): Snapshot {
  const store = getStore(headerHeight);
  return useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot
  );
}
