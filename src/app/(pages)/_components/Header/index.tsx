'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/_layout/Container";
import { configBrand } from "@/config/brand";

import dataMenu from "./dataMenu";

import HamburgerButton from "./_components/HamburgerButton";
import MobileDropdown from "./_components/MobileDropdown";
import MenuItem from "./_components/MenuItem";

function WebHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 my-2 pt-2 mx-4">
      <div className={`
          mx-auto pointer-events-auto transition-all duration-150 rounded-md py-1
          ${scrolled ? "w-full backdrop-blur-md bg-white/40 max-w-[1000px] shadow header-shadow border-[#dcdcdc]/30" : "max-w-full "}
        `}>

        <div className={`flex items-center h-full`}>
          <div className={`w-full relative z-50 pl-3 px-1`}>
 
            <div className="flex justify-between items-center px-4 sm:px-0 lg:hidden">
              <Link href="/" className="font-bold font-playfair text-3xl text-black flex items-center">
                {configBrand.name}
              </Link>
              <HamburgerButton open={open} setOpen={setOpen} />
            </div>
 
            <div className="hidden lg:flex items-center justify-between">
              <Link href="/" className="font-bold font-playfair space-x-2 text-3xl text-black flex items-center transition-all duration-300">
                <img src={configBrand.logo.light} className={`w-7 transition-all duration-300`} />
                <span className="text-3xl font-space-grotesk uppercase">{configBrand.name}</span>
              </Link>

              <nav className="flex space-x-8">
                {dataMenu.map((item) => (
                  <MenuItem key={item.name} onClick={() => setOpen(false)} name={item.name} link={item.link} />
                ))}
              </nav>

              {/* <Image className="mr-4 rounded-full" height={28} width={28} src="/images/aurelian.jpg" alt="" /> */}
              <Link
                href={configBrand.bookCallUrl}
                className="bg-[#1d0707] font-space-grotesk text-[#f18888] fill-[#f18888] flex hover:h-[95%] items-center justify-center transition-transform duration-150 shadow-[#d4ff4c] space-x-2 rounded-md py-2 px-4 pl-4"
              >
                <span className="font-normal block">Contact Sales</span>
                <svg xmlns='http://www.w3.org/2000/svg' className="ml- w-4" viewBox='0 0 640 640'>
                  <path d='M566.6 342.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 288H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h370.7L361.3 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'></path>
                </svg>
              </Link>
              {/* <Link
  href={configBrand.bookCallUrl}
  className={`
    relative overflow-hidden isolate
    bg-[#1d0707] text-[#f18888] fill-[#f18888]
    flex items-center justify-center gap-2
    rounded-md py-3 px-6 font-space-grotesk font-normal
    transition-all duration-300 ease-out
    group
    animate-charge
  `}
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70 group-hover:translate-x-full transition-transform duration-500 ease-linear"></span>

  <span className="absolute inset-0 rounded-md opacity-0 scale-95 group-[.charged]:opacity-100 group-[.charged]:scale-100 transition-all duration-500 ease-out shadow-[0_0_20px_4px_rgba(255,0,80,0.4)]"></span>

  <span className="relative z-10 flex items-center gap-2">
    Contact Sales
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 640 640">
      <path d="M566.6 342.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 288H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h370.7L361.3 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
  </span>
</Link> */}
            </div>

          </div>
        </div>

      </div>
    </header>
  );
}

export default WebHeader;
