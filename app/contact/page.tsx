"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const contactInfo = [
    { icon: MapPin, info: "123 Rue de la Liberté, 73000 Chambéry, France" },
    { icon: Phone, info: "+33 4 12 34 56 78" },
    { icon: Mail, info: "contact@americainemotor.fr" },
    { icon: Clock, info: "Lun-Ven: 9h-18h | Sam: 10h-16h | Dim: Fermé" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-center mb-12"
            >
              Contactez-nous
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">
                      Informations de contact
                    </h2>
                    <div className="space-y-4">
                      {contactInfo.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4"
                        >
                          <item.icon className="w-6 h-6 text-red-600" />
                          <span>{item.info}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">
                      Envoyez-nous un message
                    </h2>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="Nom" />
                        <Input placeholder="Prénom" />
                      </div>
                      <Input placeholder="Email" type="email" />
                      <Input placeholder="Téléphone" type="tel" />
                      <Textarea placeholder="Votre message" rows={4} />
                      <Button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                      >
                        Envoyer
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center mb-8"
            >
              Notre emplacement
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-w-16 aspect-h-9"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44703.80104700714!2d5.8833257!3d45.5645659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba85708695f63%3A0xd5c21acfa63d899c!2s73000%20Chamb%C3%A9ry%2C%20France!5e0!3m2!1sfr!2sfr!4v1651234567890!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
