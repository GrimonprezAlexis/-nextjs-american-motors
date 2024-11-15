"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Car } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { QuoteFormDialog } from "./quote-form-dialog";

const navItems = [
  { name: "À propos", href: "/about" },
  {
    name: "Services",
    href: "/services",
    subItems: [
      { name: "Vente / Importation", href: "/services#vente" },
      { name: "Répartion / Entretien", href: "/services#reparation" },
      { name: "Carte grise", href: "/services#cartegrise" },
      { name: "Location exceptionnel", href: "/services#location" },
    ],
  },
  { name: "Véhicules", href: "/vehicles" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    if (isMobile) {
      setActiveDropdown((prevState) =>
        prevState === itemName ? null : itemName
      );
    }
  };

  const handleMouseEnter = (itemName: string) => {
    if (!isMobile) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-red-800" />
            <span className="text-xl font-bold">Americaine Motor</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.subItems ? (
                  <button
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center"
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
                <AnimatePresence>
                  {item.subItems && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10"
                      ref={dropdownRef}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <QuoteFormDialog />
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <button
                      className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 inline" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  <AnimatePresence>
                    {item.subItems && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="mt-4">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Contactez-nous
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
