"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Car,
  ChevronRight,
  FileText,
  Star,
  PenToolIcon as Tools,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import ParallaxSection from "@/components/parallax-section";
import SocialFeed from "@/components/social-feed";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const reviews = [
    {
      author: "Jean D.",
      rating: 5,
      text: "Service exceptionnel, ils ont importé ma Mustang sans aucun souci !",
    },
    {
      author: "Marie L.",
      rating: 4,
      text: "Réparation rapide et professionnelle de mon Dodge. Très satisfaite.",
    },
    {
      author: "Pierre M.",
      rating: 5,
      text: "L'équipe est passionnée et ça se voit. Je recommande vivement !",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section
          ref={targetRef}
          className="relative h-screen overflow-hidden bg-black"
        >
          <motion.div style={{ opacity, scale }} className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.15-1LfrMFVIjcLHgE62wzpMs1zu5IL81s.png"
              alt="Lineup of American cars"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </motion.div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-center"
            >
              Votre passion américaine,
              <br />
              notre expertise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl text-center"
            >
              Spécialiste des véhicules américains en Savoie : vente,
              importation, réparation et services sur mesure
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg">
                Découvrir nos services
                <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <ParallaxSection>
          <div
            className="container mx-auto px-custom-services-section"
            style={{ paddingTop: "2rem", paddingBottom: "8rem" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Nos Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Car,
                  title: "Vente / Importation",
                  desc: "USA / Canada / Europe",
                },
                {
                  icon: Tools,
                  title: "Réparation / Entretien",
                  desc: "Multimarques américaines et européennes",
                },
                {
                  icon: FileText,
                  title: "Service Carte Grise",
                  desc: "Gestion administrative complète",
                },
                {
                  icon: Calendar,
                  title: "Location (2025)",
                  desc: "Véhicules exceptionnels pour événements",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <service.icon className="w-16 h-16 mb-6 text-red-500" />
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300">{service.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Featured Cars Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Véhicules en vedette
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ford Mustang GT500",
                  year: 2022,
                  price: "89 900 €",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.15-1LfrMFVIjcLHgE62wzpMs1zu5IL81s.png",
                },
                {
                  name: "Chevrolet Camaro ZL1",
                  year: 2023,
                  price: "92 500 €",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.41-MDaPE9RwtZGESFmOkuvAStj0vExXFL.png",
                },
                {
                  name: "Dodge Challenger SRT",
                  year: 2021,
                  price: "78 900 €",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.57-JxrCWrCsVFxRlszY6fod5wmuMZKdJU.png",
                },
              ].map((car, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden cursor-pointer transition-all duration-300 group-hover:shadow-xl bg-white">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={car.image}
                        alt={car.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6 relative">
                      <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                      <p className="text-gray-600 mb-4">Année : {car.year}</p>
                      <p className="text-2xl font-bold text-red-600">
                        {car.price}
                      </p>
                      <Button className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-600 hover:bg-red-700">
                        Voir détails
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="text-lg">
                Voir tous nos véhicules
                <ChevronRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Social Feed Section */}
        <SocialFeed />

        {/* Google Reviews Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Ce que disent nos clients
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-gray-800 to-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic">
                        &quot;{review.text}&quot;
                      </p>
                      <p className="font-semibold text-red-400">
                        {review.author}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="#" className="text-red-400 hover:underline">
                Voir tous les avis Google
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.57-JxrCWrCsVFxRlszY6fod5wmuMZKdJU.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-8"
            >
              Prêt à réaliser votre rêve américain ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-12 max-w-2xl mx-auto"
            >
              Que vous cherchiez à acheter, importer ou entretenir votre
              véhicule américain, notre équipe d&apos;experts est là pour vous.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-red-600 border-white hover:bg-white hover:text-red-600 text-lg"
              >
                Contactez-nous
                <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
