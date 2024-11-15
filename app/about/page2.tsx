"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.41-MDaPE9RwtZGESFmOkuvAStj0vExXFL.png"
            alt="Americaine Motor Garage"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.h1
              {...fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white text-center"
            >
              Notre Histoire
            </motion.h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-bold mb-6">
                  Passion et Expertise Américaine
                </h2>
                <p className="text-gray-600 mb-4">
                  Fondée en 2015, Americaine Motor est née de la passion de deux
                  amis pour les véhicules américains. Notre mission est de
                  partager cette passion avec nos clients en leur offrant des
                  services d&apos;exception.
                </p>
                <p className="text-gray-600 mb-4">
                  Spécialisés dans l&apos;simportation, la vente et
                  l&apos;sentretien de véhicules américains, nous avons
                  développé une expertise unique en Savoie. Notre équipe de
                  professionnels passionnés s&apos;sengage à fournir un service
                  personnalisé et de qualité à chaque client.
                </p>
                <p className="text-gray-600 mb-6">
                  Chez Americaine Motor, nous ne vendons pas seulement des
                  voitures, nous réalisons des rêves américains sur les routes
                  françaises.
                </p>
                <Button className="bg-red-800 hover:bg-red-700">
                  Découvrez nos services
                  <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.57-JxrCWrCsVFxRlszY6fod5wmuMZKdJU.png"
                  alt="Équipe Americaine Motor"
                  className="object-cover"
                  fill
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-4xl font-bold text-center mb-12"
            >
              Notre Équipe
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jean Dupont",
                  role: "Fondateur & Mécanicien en Chef",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.15-1LfrMFVIjcLHgE62wzpMs1zu5IL81s.png",
                },
                {
                  name: "Marie Martin",
                  role: "Responsable des Importations",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.41-MDaPE9RwtZGESFmOkuvAStj0vExXFL.png",
                },
                {
                  name: "Pierre Leroy",
                  role: "Expert en Customisation",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.57-JxrCWrCsVFxRlszY6fod5wmuMZKdJU.png",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-4xl font-bold text-center mb-12"
            >
              Nos Valeurs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Passion",
                  description:
                    "Notre amour pour les véhicules américains guide chacune de nos actions.",
                },
                {
                  title: "Expertise",
                  description:
                    "Une connaissance approfondie et une expérience inégalée dans notre domaine.",
                },
                {
                  title: "Service Client",
                  description:
                    "Un engagement total envers la satisfaction et le bonheur de nos clients.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-8">
              Prêt à rejoindre l&apos;aventure Americaine Motor ?
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl mb-12 max-w-2xl mx-auto"
            >
              Découvrez notre sélection de véhicules américains
              d&apos;sexception ou confiez-nous l&apos;sentretien de votre
              bolide.
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
