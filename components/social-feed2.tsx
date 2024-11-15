"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Share2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

export default function SocialFeed2() {
  //const [selectedImage, setSelectedImage] = useState(null);

  const instagramPosts = [
    {
      id: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.53.23-min-Sy0SQYfaadKW2ED6D2HVYTBUa3ZMO6.png",
      caption:
        "Livraison d'une magnifique Mustang GT 5.0 🏎️ #MustangGT #AmericaineMotor",
      likes: 45,
      comments: 3,
    },
    // Add more posts as needed
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Suivez notre actualité</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos dernières réalisations, livraisons et actualités sur
            nos réseaux sociaux
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://www.instagram.com/americaine.motor73/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-800 hover:text-red-700 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-semibold">@americaine.motor73</span>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-800 hover:text-red-700 transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span className="font-semibold">Americaine Motor</span>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-square">
                      <Image
                        src={post.image}
                        alt="Instagram post"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Share2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                </Dialog>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">
                      {post.likes} likes
                    </span>
                    <Link
                      href="https://www.instagram.com/americaine.motor73/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-800 hover:text-red-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() =>
              window.open(
                "https://www.instagram.com/americaine.motor73/",
                "_blank"
              )
            }
          >
            Voir plus sur Instagram
            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <Dialog>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Americaine Motor</DialogTitle>
              <DialogDescription>
                Garage automobile multimarques spécialisé véhicules américains
                basé en Savoie
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg"
                    alt="Profile"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">americaine.motor73</h3>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>97 publications</span>
                    <span>269 followers</span>
                    <span>39 suivi(e)s</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <Button className="flex-1 bg-red-800 hover:bg-red-700">
                  Suivre
                </Button>
                <Button variant="outline" className="flex-1">
                  Message
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
