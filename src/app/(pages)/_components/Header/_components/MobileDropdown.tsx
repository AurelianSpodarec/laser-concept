import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { configBrand } from "@/config/brand";
import dataMenu from "../dataMenu";
import MenuItem from "./MenuItem";

function MobileDropdown({ open, onClick }: { open: boolean, onClick: React.MouseEventHandler; }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: contentHeight, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden lg:hidden"
        >
          <div ref={contentRef} className="overflow-y-auto max-h-[calc(100vh-53px)] text-center">
            <div className="flex flex-col items-center space-y-4 py-4 px-1">
              <nav className="flex flex-col space-y-4 w-full">
                {dataMenu.map((item) => (
                  <MenuItem key={item.link} onClick={onClick} name={item.name} link={item.link} />
                ))}
              </nav>

              <Link
                href={configBrand.bookCallUrl}
                className="bg-black flex items-center justify-center transition-transform duration-150 hover:scale-105 hover:rotate-1 space-x-1 rounded-full py-2 px-4"
              >
                <Image
                  className="mr-2 rounded-full"
                  height={28}
                  width={28}
                  src="/images/aurelian.jpg"
                  alt="Aurelian Spodarec"
                />
                <span className="text-white font-semibold font-roboto">
                  Book a Call with Aurelian
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileDropdown
