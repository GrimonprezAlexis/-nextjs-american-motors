import "@/app/styles/globals.css";
import { Inter } from "next/font/google";
import { Car, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import SocialBar from "@/components/social-bar";
import { QuoteFormDialog } from "@/components/quote-form-dialog";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Americaine Motor",
  description: "Spécialiste des véhicules américains en Savoie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />

        {/* <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-red-800" />
              <span className="text-xl font-bold">Americaine Motor</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                href="/about"
                className="text-gray-600 hover:text-red-800 transition-colors"
              >
                À propos
              </Link>
              <Link
                href="/services"
                className="text-gray-600 hover:text-red-800 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-red-800 transition-colors"
              >
                Contact
              </Link>
            </div>
            <QuoteFormDialog />
          </nav>
        </header> */}

        <SocialBar />

        <main>{children}</main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Americaine Motor</h3>
                <p className="text-gray-400">
                  Votre spécialiste des véhicules américains en Savoie
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-red-800 transition-colors"
                    >
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-red-800 transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-red-800 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" /> +33 (0)4 XX XX XX XX
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />{" "}
                    contact@americaine-motor.fr
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" /> Savoie, France
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="hover:text-red-800 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/americaine.motor73/"
                    className="hover:text-red-800 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} Americaine Motor. Tous droits
                réservés.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
