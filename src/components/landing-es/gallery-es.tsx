
'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Eye, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryImage {
  id: string;
  imageUrl: string;
  description: string;
  category: 'bolsas' | 'praia';
  variations?: string[];
  isFavorite?: boolean;
}

const allImages: GalleryImage[] = [
  { 
    id: 'new-bag-1', 
    imageUrl: 'https://i.imgur.com/mTixFpW.jpeg', 
    description: 'Bolso de crochet exclusivo 1', 
    category: 'bolsas',
    isFavorite: true,
    variations: [
      'https://i.imgur.com/mTixFpW.jpeg',
      'https://i.imgur.com/ditKxzZ.jpeg',
      'https://i.imgur.com/6kaz2tp.jpeg',
      'https://i.imgur.com/0qiHfCY.jpeg',
      'https://i.imgur.com/Nj9QKWX.jpeg'
    ]
  },
  { 
    id: 'new-bag-2', 
    imageUrl: 'https://i.imgur.com/2h8DPj5.png', 
    description: 'Bolso de crochet exclusivo 2', 
    category: 'bolsas',
    isFavorite: true,
    variations: [
      'https://i.imgur.com/2h8DPj5.png',
      'https://i.imgur.com/bZpLS7K.png',
      'https://i.imgur.com/vB5dLcH.jpeg',
      'https://i.imgur.com/q2JJ27F.png',
      'https://i.imgur.com/bqAc3iB.jpeg'
    ]
  },
  { id: 'crochet-bag-4', imageUrl: `https://i.imgur.com/Kc3jGcW.jpeg`, description: `Bolso de crochet 4`, category: 'bolsas', isFavorite: true },
  { id: 'praia-1', imageUrl: 'https://i.imgur.com/HdDuWFS.png', description: 'Bolso de playa lujo 1', category: 'praia', isFavorite: true },
  { id: 'praia-2', imageUrl: 'https://i.imgur.com/B1frtB8.png', description: 'Bolso de playa lujo 2', category: 'praia', isFavorite: true },
  { id: 'praia-21', imageUrl: 'https://i.imgur.com/mRHXLMf.png', description: 'Bono: Bolso caracol', category: 'praia', isFavorite: true },
];

export function GalleryES() {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const selectedImageData = allImages.find(img => img.id === selectedImageId);

  const renderGalleryGrid = (category: 'bolsas' | 'praia') => {
    const images = allImages.filter(img => img.category === category);
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {images.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card cursor-pointer"
              onClick={() => setSelectedImageId(image.id)}
            >
              <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full aspect-square transition-transform duration-300 group-hover:scale-105"
              />
              {image.isFavorite && (
                <div className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-md z-20">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-3">
                  <Eye className="w-6 h-6 text-[#AE5A32]" />
                </div>
              </div>
            </div>
        ))}
      </div>
    );
  };

  return (
    <section id="gallery" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        <div className="inline-block bg-card text-accent-foreground px-3 py-1 rounded-lg text-sm font-semibold border border-border shadow-sm">
          Galería de Bolsos
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#563209]">
          +de 67 Colecciones Increíbles
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-foreground text-lg">
          Todos los modelos fueron diseñados para ser <b>hermosos, vendibles</b> e ideales para quienes aman las artesanías.
        </p>

        <Tabs defaultValue="bolsas" className="w-full max-w-sm mx-auto mt-8">
          <TabsList className="grid w-full grid-cols-2 h-auto p-2">
            <TabsTrigger value="bolsas" className="text-base">Bolsos</TabsTrigger>
            <TabsTrigger value="praia" className="text-base">Bolsos Playa Lujo</TabsTrigger>
          </TabsList>
          <TabsContent value="bolsas">
            {renderGalleryGrid('bolsas')}
          </TabsContent>
          <TabsContent value="praia">
            {renderGalleryGrid('praia')}
          </TabsContent>
        </Tabs>
        
        {selectedImageData && (
          <Dialog open={!!selectedImageId} onOpenChange={(isOpen) => !isOpen && setSelectedImageId(null)}>
            <DialogContent className="max-w-3xl p-4 sm:p-6 border-0">
               <DialogTitle className="sr-only">Visualización de la imagen</DialogTitle>
               <DialogDescription className="text-center text-foreground/80 -mb-2 sm:mb-4">
                {selectedImageData.variations 
                  ? "Desliza para ver las variaciones de colores de este modelo exclusivo."
                  : "Uno de los más de 67 patrones exclusivos que aprenderás en el curso."
                }
               </DialogDescription>
              
              {selectedImageData.variations ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedImageData.variations.map((url, index) => (
                      <CarouselItem key={index}>
                        <div className="flex justify-center items-center">
                          <Image 
                            src={url}
                            alt={`Variación ${index + 1}`}
                            width={800}
                            height={800}
                            className="object-contain w-full h-auto max-h-[70vh] rounded-md"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                  <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
                </Carousel>
              ) : (
                <div className="flex justify-center items-center">
                  <Image 
                    src={selectedImageData.imageUrl}
                    alt="Visualización del bolso"
                    width={800}
                    height={800}
                    className="object-contain w-full h-auto max-h-[70vh] rounded-md"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        )}

        <p className="mt-12 text-foreground text-lg">Haz clic en el botón de abajo para asegurar tu lugar y acceder a la colección completa.</p>
        <Button
          size="lg"
          className="mt-4 h-14 text-lg border-0 hover:opacity-90 text-white font-medium"
          style={{ backgroundColor: '#f6aa28', color: '#312a23' }}
          asChild
        >
          <a href="#pricing">
            QUIERO LA COLECCIÓN COMPLETA
          </a>
        </Button>
      </div>
    </section>
  );
}
