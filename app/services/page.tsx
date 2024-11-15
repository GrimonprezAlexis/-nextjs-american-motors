"use client";

import { motion } from "framer-motion";
import { Car, Truck, Wrench, FileText } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ParallaxSection from "@/components/parallax-section";

export default function ServicesPage() {
  const services = [
    {
      icon: Car,
      title: "Vente de Véhicules",
      description:
        "Large sélection de véhicules américains neufs et d'occasion, soigneusement inspectés pour garantir qualité et fiabilité.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.15-1LfrMFVIjcLHgE62wzpMs1zu5IL81s.png",
    },
    {
      icon: Truck,
      title: "Importation sur Mesure",
      description:
        "Service d'importation personnalisé pour trouver et livrer le véhicule de vos rêves directement des États-Unis ou du Canada.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.41-MDaPE9RwtZGESFmOkuvAStj0vExXFL.png",
    },
    {
      icon: Wrench,
      title: "Réparation et Entretien",
      description:
        "Atelier spécialisé équipé pour l'entretien, la réparation et la personnalisation de véhicules américains de toutes marques.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.57-JxrCWrCsVFxRlszY6fod5wmuMZKdJU.png",
    },
    {
      icon: FileText,
      title: "Service Carte Grise",
      description:
        "Assistance complète pour toutes les démarches administratives liées à l'immatriculation de votre véhicule importé.",
      image: "/placeholder.svg?height=400&width=600",
    },
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
              Nos Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
            >
              Chez Americaine Motor, nous offrons une gamme complète de services
              pour répondre à tous vos besoins en matière de véhicules
              américains.
            </motion.p>
            {services.map((service, index) => (
              <ParallaxSection key={index}>
                <Card className="mb-16 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`p-8 ${
                          index % 2 === 0 ? "order-1 md:order-2" : "order-1"
                        }`}
                      >
                        <service.icon className="w-16 h-16 text-red-600 mb-6" />
                        <h2 className="text-3xl font-semibold mb-4">
                          {service.title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>
                        <Button className="bg-red-600 hover:bg-red-700 text-white">
                          En savoir plus
                        </Button>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`${
                          index % 2 === 0 ? "order-2 md:order-1" : "order-2"
                        }`}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </ParallaxSection>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
