"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function SocialBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
    >
      <Link
        href="https://www.instagram.com/americaine.motor73/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        <Instagram className="w-6 h-6 text-gray-600 group-hover:text-red-800" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        <Facebook className="w-6 h-6 text-gray-600 group-hover:text-red-800" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="tel:+33XXXXXXXXX"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        <Phone className="w-6 h-6 text-gray-600 group-hover:text-red-800" />
        <span className="sr-only">Téléphone</span>
      </Link>
      <Link
        href="mailto:contact@americaine-motor.fr"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        <Mail className="w-6 h-6 text-gray-600 group-hover:text-red-800" />
        <span className="sr-only">Email</span>
      </Link>
    </motion.div>
  );
}
