"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.57-JxrCWrCsVFxRlszY6fod5wmuMZKdJU.png"
            alt="Americaine Motor Contact"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.h1
              {...fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white text-center"
            >
              Contactez-nous
            </motion.h1>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl font-bold mb-8">Nos Coordonnées</h2>
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-red-800 mr-4" />
                      <div>
                        <h3 className="font-semibold">Adresse</h3>
                        <p className="text-gray-600">
                          123 Rue de la Mécanique, 73000 Chambéry, France
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <Phone className="w-6 h-6 text-red-800 mr-4" />
                      <div>
                        <h3 className="font-semibold">Téléphone</h3>
                        <p className="text-gray-600">+33 (0)4 XX XX XX XX</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-red-800 mr-4" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">
                          contact@americaine-motor.fr
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 text-red-800 mr-4" />
                      <div>
                        <h3 className="font-semibold">
                          Horaires d&apos;ouverture
                        </h3>
                        <p className="text-gray-600">
                          Lundi - Vendredi : 9h00 - 18h00
                        </p>
                        <p className="text-gray-600">Samedi : 10h00 - 16h00</p>
                        <p className="text-gray-600">Dimanche : Fermé</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.15-1LfrMFVIjcLHgE62wzpMs1zu5IL81s.png"
                    alt="Carte Americaine Motor"
                    className="object-cover"
                    fill
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <h2 className="text-3xl font-bold mb-8">
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Prénom
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nom
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Téléphone
                    </label>
                    <Input type="tel" id="phone" name="phone" />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>
                  <Button
                    type="submit"
                    className="bg-red-800 hover:bg-red-700 w-full"
                  >
                    Envoyer
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
