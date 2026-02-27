"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { LucideMenu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { getTotalItems } = useCart();
  // const totalItems = getTotalItems();

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    // { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  // return (
  //   <header className="bg-white shadow-soft sticky top-0 z-50">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex justify-between items-center h-20">
  //         <Link href="/" className="flex items-center space-x-2">
  //           <Image
  //             src={"/assets/logo.svg"}
  //             alt="The SME CFO Logo"
  //             width={180}
  //             height={60}
  //             className="h-14 w-auto"
  //           />
  //         </Link>

  //         <nav className="hidden md:flex space-x-8">
  //           {navLinks.map((link) => (
  //             <Link
  //               key={link.href}
  //               href={link.href}
  //               className="text-dark-600 hover:text-primary-500 font-medium transition-colors"
  //             >
  //               {link.label}
  //             </Link>
  //           ))}
  //         </nav>

  //         <div className="hidden md:flex items-center space-x-6">
  //           <Link href="/checkout" className="relative p-2">
  //             <ShoppingCart />
  //             {totalItems > 0 && (
  //               <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
  //                 {totalItems}
  //               </span>
  //             )}
  //           </Link>
  //           <div className="flex items-center space-x-4">
  //             <Link href="/get-started" className="btn-primary">
  //               Get Started
  //             </Link>
  //           </div>
  //         </div>

  //         <button
  //           className="md:hidden p-2"
  //           onClick={() => setIsMenuOpen(!isMenuOpen)}
  //         >
  //           <ShoppingCart />
  //         </button>
  //       </div>

  //       {isMenuOpen && (
  //         <div className="md:hidden py-4 border-t">
  //           <div className="flex flex-col space-y-4">
  //             {navLinks.map((link) => (
  //               <Link
  //                 key={link.href}
  //                 href={link.href}
  //                 className="text-dark-600 hover:text-primary-500 font-medium"
  //               >
  //                 {link.label}
  //               </Link>
  //             ))}
  //             <div className="pt-4 border-t">
  //               <Link href="/get-started" className="btn-primary inline-block">
  //                 Get Started
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </header>
  // );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-800/95 backdrop-blur-xl border-b border-secondary-500/10 px-2 lg:px-2 flex items-center justify-center h-20">
      <div className="w-[1560px] px-2 h-full flex items-center justify-center">
        <div className="w-full flex items-center justify-between ">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={"/assets/logo-dark.svg"}
              alt="The SME CFO Logo"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </Link>
          <div className={`nav-links ${isMenuOpen ? "nav-open" : ""}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-600 hover:text-primary-500 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://tidycal.com/thesmecfo/discovery-call"
              className="nav-cta"
            >
              Book a Consultation
            </Link>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <LucideMenu className="h-6 w-6 text-white " />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
