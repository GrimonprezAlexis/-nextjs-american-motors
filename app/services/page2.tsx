"use client";

import { motion } from "framer-motion";
import {
  Car,
  PenToolIcon as Tools,
  FileText,
  Calendar,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const services = [
    {
      icon: Car,
      title: "Vente et Importation",
      description:
        "Nous vous proposons une sélection de véhicules américains d'exception, neufs ou d'occasion. Notre service d'importation vous permet d'acquérir le véhicule de vos rêves directement depuis les USA, le Canada ou l'Europe.",
      features: [
        "Large choix de véhicules américains",
        "Importation sur mesure",
        "Gestion des formalités douanières",
        "Homologation et mise aux normes françaises",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.15-1LfrMFVIjcLHgE62wzpMs1zu5IL81s.png",
    },
    {
      icon: Tools,
      title: "Réparation et Entretien",
      description:
        "Notre équipe de mécaniciens experts assure l'entretien et la réparation de votre véhicule américain ou européen. Nous utilisons des pièces d'origine et les dernières technologies pour garantir des performances optimales.",
      features: [
        "Diagnostic précis",
        "Réparations toutes marques",
        "Entretien régulier",
        "Customisation et amélioration des performances",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.41-MDaPE9RwtZGESFmOkuvAStj0vExXFL.png",
    },
    {
      icon: FileText,
      title: "Service Carte Grise",
      description:
        "Nous simplifions vos démarches administratives en prenant en charge l'intégralité du processus d'obtention de la carte grise pour votre véhicule importé ou acheté en France.",
      features: [
        "Gestion complète du dossier",
        "Immatriculation rapide",
        "Suivi personnalisé",
        "Conseils sur la réglementation",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.57-JxrCWrCsVFxRlszY6fod5wmuMZKdJU.png",
    },
    {
      icon: Calendar,
      title: "Location (à partir de 2025)",
      description:
        "Bientôt, nous vous proposerons un service de location de véhicules américains d'exception pour vos événements spéciaux. Mariages, tournages, ou simplement pour le plaisir de conduire un bolide américain le temps d'un week-end.",
      features: [
        "Large choix de véhicules iconiques",
        "Formules adaptées à vos besoins",
        "Service de chauffeur disponible",
        "Assurance tout risque incluse",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.15-1LfrMFVIjcLHgE62wzpMs1zu5IL81s.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.57-JxrCWrCsVFxRlszY6fod5wmuMZKdJU.png"
            alt="Atelier Americaine Motor"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.h1
              {...fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white text-center"
            >
              Nos Services
            </motion.h1>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`mb-20 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } md:flex items-center gap-12`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <service.icon className="w-16 h-16 text-red-800 mb-6" />
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <ChevronRight className="w-5 h-5 text-red-800 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="object-cover"
                      fill
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-8">
              Besoin de nos services ?
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl mb-12 max-w-2xl mx-auto"
            >
              Que vous souhaitiez acheter, importer, entretenir ou bientôt louer
              un véhicule américain, notre équipe est là pour vous accompagner à
              chaque étape.
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-red-800 border-white hover:bg-white hover:text-red-800 text-lg"
                >
                  Contactez-nous
                  <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
