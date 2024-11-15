"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function SocialFeed() {
  const posts = [
    {
      id: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.15-1LfrMFVIjcLHgE62wzpMs1zu5IL81s.png",
      likes: 120,
      comments: 15,
    },
    {
      id: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.41-MDaPE9RwtZGESFmOkuvAStj0vExXFL.png",
      likes: 95,
      comments: 8,
    },
    {
      id: 3,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.57-JxrCWrCsVFxRlszY6fod5wmuMZKdJU.png",
      likes: 150,
      comments: 22,
    },
    {
      id: 4,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202024-11-14%20a%CC%80%2021.40.15-1LfrMFVIjcLHgE62wzpMs1zu5IL81s.png",
      likes: 80,
      comments: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Suivez-nous sur Instagram
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="font-bold">{post.likes} likes</p>
                  <p>{post.comments} comments</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="https://www.instagram.com/americaine.motor73/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-white hover:bg-gray-100"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Voir plus sur Instagram
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
