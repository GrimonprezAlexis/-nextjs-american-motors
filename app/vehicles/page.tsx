"use client";

import { motion } from "framer-motion";
import { ChevronRight, Filter, Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
//import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const vehicles = [
  {
    id: 1,
    name: "Ford Mustang GT",
    year: 2023,
    price: "54 900 €",
    type: "Muscle Car",
    color: "Bleu Performance",
    mileage: "15 000 km",
    transmission: "Automatique",
    engine: "V8 5.0L",
    power: "450 ch",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-15%20a%CC%80%2001.22.37-UzpNoAItqmSL5qiOMKyO4wVQl8RzkT.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-15%20a%CC%80%2001.22.21-w8HcZhqlZ887v18i6G7I7V2lSndXPc.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-15%20a%CC%80%2001.20.35-cOxMqdwe7vKmxZChD8c5DIDLeK08wI.png",
    ],
    features: [
      "Sièges cuir",
      "Système audio premium",
      "Mode Sport",
      "Caméra de recul",
      'Jantes 19"',
    ],
  },
  {
    id: 2,
    name: "Mustang Shelby GT500",
    year: 2023,
    price: "129 900 €",
    type: "Muscle Car",
    color: "Orange Fury",
    mileage: "1 000 km",
    transmission: "Automatique",
    engine: "V8 5.2L Supercharged",
    power: "760 ch",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-15%20a%CC%80%2001.22.00-KEkJQHG8FjjMq5xqBAJ7K4jkuCTfjz.png",
    ],
    features: [
      "Package Performance",
      "Freins Brembo",
      "Échappement actif",
      "Sièges Recaro",
      'Jantes carbone 20"',
    ],
  },
  {
    id: 3,
    name: "RAM 1500 Limited",
    year: 2024,
    price: "89 900 €",
    type: "Pickup",
    color: "Bleu Métallisé",
    mileage: "0 km",
    transmission: "Automatique",
    engine: "V8 5.7L HEMI",
    power: "395 ch",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-15%20a%CC%80%2001.18.47-fgIiEDIpl47XPoxTOPKHKP2JOLwnI9.png",
    ],
    features: [
      "Suspension pneumatique",
      "Intérieur cuir premium",
      'Écran 12"',
      "Toit panoramique",
      "Sound System Harman Kardon",
    ],
  },
];

export default function VehiclesPage() {
  //const [selectedVehicle, setSelectedVehicle] = useState(null);
  //const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-15%20a%CC%80%2001.22.00-KEkJQHG8FjjMq5xqBAJ7K4jkuCTfjz.png"
          alt="Vehicles Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Nos Véhicules
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Découvrez notre sélection de véhicules américains d&apos;exception
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Rechercher un véhicule..."
                  className="pl-10"
                />
              </div>
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Plus récent</SelectItem>
                  <SelectItem value="price-asc">Prix croissant</SelectItem>
                  <SelectItem value="price-desc">Prix décroissant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none">
                <Filter className="mr-2 h-4 w-4" />
                Filtres
              </Button>
              <Button variant="outline" className="flex-1 md:flex-none">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Trier
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={vehicle.images[0]}
                      alt={vehicle.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-4">{vehicle.year}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-red-600">
                        {vehicle.price}
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">
                            Détails
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{vehicle.name}</DialogTitle>
                            <DialogDescription>
                              Année : {vehicle.year}
                            </DialogDescription>
                          </DialogHeader>
                          <Tabs defaultValue="details" className="mt-4">
                            <TabsList>
                              <TabsTrigger value="details">Détails</TabsTrigger>
                              <TabsTrigger value="gallery">Galerie</TabsTrigger>
                              <TabsTrigger value="features">
                                Équipements
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="details" className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold mb-2">
                                    Caractéristiques
                                  </h4>
                                  <ul className="space-y-2">
                                    <li>Moteur : {vehicle.engine}</li>
                                    <li>Puissance : {vehicle.power}</li>
                                    <li>
                                      Transmission : {vehicle.transmission}
                                    </li>
                                    <li>Kilométrage : {vehicle.mileage}</li>
                                    <li>Couleur : {vehicle.color}</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Prix</h4>
                                  <p className="text-3xl font-bold text-red-600">
                                    {vehicle.price}
                                  </p>
                                  <Button className="w-full mt-4">
                                    Nous contacter
                                  </Button>
                                </div>
                              </div>
                            </TabsContent>
                            <TabsContent value="gallery">
                              <div className="grid grid-cols-2 gap-4">
                                {vehicle.images.map((image, index) => (
                                  <div
                                    key={index}
                                    className="relative aspect-video"
                                  >
                                    <Image
                                      src={image}
                                      alt={`${vehicle.name} - Image ${
                                        index + 1
                                      }`}
                                      layout="fill"
                                      objectFit="cover"
                                      className="rounded-lg"
                                    />
                                  </div>
                                ))}
                              </div>
                            </TabsContent>
                            <TabsContent value="features">
                              <ul className="grid grid-cols-2 gap-4">
                                {vehicle.features.map((feature, index) => (
                                  <li key={index} className="flex items-center">
                                    <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
