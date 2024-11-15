"use client";

import { motion } from "framer-motion";
import { Award, Truck, Users, Wrench } from "lucide-react";
import Image from "next/image";

import ParallaxSection from "@/components/parallax-section";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "1000+", label: "Clients satisfaits" },
    { icon: Truck, value: "500+", label: "Véhicules importés" },
    { icon: Wrench, value: "5000+", label: "Réparations effectuées" },
    { icon: Award, value: "10+", label: "Années d'expérience" },
  ];

  const team = [
    {
      name: "John Doe",
      role: "Fondateur & Directeur",
      image: "/placeholder.svg?height=400&width=400",
      description: "Passionné de véhicules américains depuis plus de 20 ans",
    },
    {
      name: "Jane Smith",
      role: "Chef Mécanicien",
      image: "/placeholder.svg?height=400&width=400",
      description: "15 ans d'expérience en mécanique américaine",
    },
    {
      name: "Mike Johnson",
      role: "Spécialiste Import",
      image: "/placeholder.svg?height=400&width=400",
      description: "Expert en importation et démarches administratives",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ParallaxSection>
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-center mb-12"
              >
                À propos d&apos;Americaine Motor
              </motion.h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src="/images/about.png"
                    alt="Americaine Motor Garage"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-semibold mb-6">
                    Notre Histoire
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fondée en 2010, Americaine Motor est née d'une passion pour
                    les véhicules américains et d'un désir de partager cette
                    passion avec les enthousiastes en France. Notre équipe de
                    professionnels qualifiés combine expertise technique et
                    amour des voitures américaines pour offrir un service
                    inégalé.
                  </p>
                  <p className="text-gray-600">
                    Au fil des années, nous avons développé un réseau solide de
                    partenaires aux États-Unis et au Canada, nous permettant
                    d'importer les meilleures voitures américaines pour nos
                    clients exigeants. Notre engagement envers la qualité et la
                    satisfaction client a fait d'Americaine Motor une référence
                    dans le domaine des véhicules américains en Savoie et
                    au-delà.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        <section className="py-20 bg-red-600 text-white">
          <div
            className="container mx-auto px-4"
            style={{ paddingTop: "5rem" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Nos Chiffres Clés
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/20 transition-colors duration-300">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <stat.icon className="w-12 h-12 mb-4" />
                      <p className="text-3xl font-bold mb-2">{stat.value}</p>
                      <p className="text-sm text-center">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Notre Équipe
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-80">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6 relative bg-white">
                      <h3 className="text-xl font-semibold mb-2">
                        {member.name}
                      </h3>
                      <p className="text-red-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
