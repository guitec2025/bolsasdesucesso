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
  imageHint: string;
  category: 'bolsas' | 'praia';
  variations?: string[];
  isFavorite?: boolean;
}

const allImages: GalleryImage[] = [
  { 
    id: 'new-bag-1', 
    imageUrl: 'https://i.imgur.com/mTixFpW.jpeg', 
    description: 'Bolso de crochet exclusivo 1', 
    imageHint: 'crochet bag', 
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
    imageHint: 'crochet bag', 
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
  { 
    id: 'new-bag-3', 
    imageUrl: 'https://i.imgur.com/fNF41Yi.jpeg', 
    description: 'Bolso de crochet exclusivo 3', 
    imageHint: 'crochet bag', 
    category: 'bolsas',
    isFavorite: true 
  },
  { id: 'crochet-bag-1', imageUrl: `https://i.imgur.com/r76j16N.jpeg`, description: `Bolso de crochet 1`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: false },
  { id: 'crochet-bag-2', imageUrl: `https://i.imgur.com/ON1Tyqp.jpeg`, description: `Bolso de crochet 2`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: true },
  { id: 'crochet-bag-3', imageUrl: `https://i.imgur.com/ftp5Wn6.jpeg`, description: `Bolso de crochet 3`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-4', imageUrl: `https://i.imgur.com/Kc3jGcW.jpeg`, description: `Bolso de crochet 4`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: true },
  { id: 'crochet-bag-5', imageUrl: `https://i.imgur.com/7HMTFU7.jpeg`, description: `Bolso de crochet 5`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: true },
  { id: 'crochet-bag-6', imageUrl: `https://i.imgur.com/7xmWbQN.jpeg`, description: `Bolso de crochet 6`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: true },
  { id: 'crochet-bag-7', imageUrl: `https://i.imgur.com/tgEESxy.png`, description: `Bolso de crochet 7`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: false },
  { id: 'crochet-bag-8', imageUrl: `https://i.imgur.com/LBRCsGE.jpeg`, description: `Bolso de crochet 8`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: false },
  { id: 'crochet-bag-9', imageUrl: `https://i.imgur.com/OviKXmZ.png`, description: `Bolso de crochet 9`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-10', imageUrl: `https://i.imgur.com/euJlX0g.png`, description: `Bolso de crochet 10`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-11', imageUrl: `https://i.imgur.com/I7tSjwc.jpeg`, description: `Bolso de crochet 11`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-12', imageUrl: `https://i.imgur.com/rZ02jgI.jpeg`, description: `Bolso de crochet 12`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-13', imageUrl: `https://i.imgur.com/ERj3yZh.png`, description: `Bolso de crochet 13`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-14', imageUrl: `https://i.imgur.com/C5JfdZW.png`, description: `Bolso de crochet 14`, imageHint: 'crochet bag', category: 'bolsas' },
  
  /* Categoria Praia */
  { id: 'praia-1', imageUrl: 'https://i.imgur.com/HdDuWFS.png', description: 'Bolso de playa lujo 1', imageHint: 'luxury beach bag', category: 'praia', isFavorite: true },
  { 
    id: 'praia-21', 
    imageUrl: 'https://i.ibb.co/NgGypTVm/carracol-white-convertido-de-png.webp', 
    description: 'Bono: Bolso caracol', 
    imageHint: 'seashell bag', 
    category: 'praia', 
    isFavorite: true,
    variations: [
      'https://i.ibb.co/NgGypTVm/carracol-white-convertido-de-png.webp',
      'https://i.ibb.co/wfyCWhK/carracol-Brow-convertido-de-png.webp',
      'https://i.ibb.co/dnTbTMZ/carracol-Green-convertido-de-png.webp',
      'https://i.ibb.co/nxCWBMp/carracol-pink-convertido-de-png.webp',
      'https://i.ibb.co/99H7RKHQ/carracol-red-convertido-de-png.webp'
    ]
  },
  { id: 'praia-2', imageUrl: 'https://i.imgur.com/B1frtB8.png', description: 'Bolso de playa lujo 2', imageHint: 'luxury beach bag', category: 'praia', isFavorite: true },
  { id: 'praia-3', imageUrl: 'https://i.imgur.com/XpiyxqT.png', description: 'Bolso de playa lujo 3', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-4', imageUrl: 'https://i.imgur.com/FGKJCjb.png', description: 'Bolso de playa lujo 4', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-5', imageUrl: 'https://i.imgur.com/HiKYkKT.png', description: 'Bolso de playa lujo 5', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-6', imageUrl: 'https://i.imgur.com/eHTLndj.png', description: 'Bolso de playa lujo 6', imageHint: 'luxury beach bag', category: 'praia', isFavorite: true },
  { id: 'praia-7', imageUrl: 'https://i.imgur.com/QJyVjxg.png', description: 'Bolso de playa lujo 7', imageHint: 'luxury beach bag', category: 'praia', isFavorite: true },
  { id: 'praia-8', imageUrl: 'https://i.imgur.com/FthVzjc.png', description: 'Bolso de playa lujo 8', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-9', imageUrl: 'https://i.imgur.com/h4yIdcZ.png', description: 'Bolso de playa lujo 9', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-10', imageUrl: 'https://i.imgur.com/Kt4paxr.png', description: 'Bono: Sombrero de playa', imageHint: 'beach hat', category: 'praia', isFavorite: true },
  { id: 'praia-11', imageUrl: 'https://i.imgur.com/mbOSpgB.png', description: 'Bolso de playa lujo 11', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-12', imageUrl: 'https://i.imgur.com/ToCsGq3.png', description: 'Bolso de playa lujo 12', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-13', imageUrl: 'https://i.imgur.com/CBY8rMk.png', description: 'Bolso de playa lujo 13', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-14', imageUrl: 'https://i.imgur.com/jgZBtZJ.png', description: 'Bolso de playa lujo 14', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-15', imageUrl: 'https://i.imgur.com/JNoqoy3.png', description: 'Bolso de playa lujo 15', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-16', imageUrl: 'https://i.imgur.com/TcC0oLR.png', description: 'Bolso de playa lujo 16', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-17', imageUrl: 'https://i.imgur.com/cAT2Ix6.png', description: 'Bolso de playa lujo 17', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-18', imageUrl: 'https://i.imgur.com/tj6V9OR.png', description: 'Bolso de playa lujo 18', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-19', imageUrl: 'https://i.imgur.com/WcYVGEZ.png', description: 'Bolso de playa lujo 19', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-20', imageUrl: 'https://i.imgur.com/8RxbMmO.png', description: 'Bolso de playa lujo 20', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-22', imageUrl: 'https://i.imgur.com/eba8xZZ.png', description: 'Bolso de playa lujo 22', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-23', imageUrl: 'https://i.imgur.com/wxwRmy2.png', description: 'Bolso de playa lujo 23', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-24', imageUrl: 'https://i.imgur.com/sxijJeb.png', description: 'Bolso de playa lujo 24', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-25', imageUrl: 'https://i.imgur.com/0nhsO8g.png', description: 'Bono: Bolso corazón de trapillo', imageHint: 'heart shaped bag', category: 'praia' },
  { id: 'praia-26', imageUrl: 'https://i.imgur.com/k90JSiI.png', description: 'Bolso de playa lujo 26', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-27', imageUrl: 'https://i.imgur.com/RIeNAKU.png', description: 'Bolso de playa lujo 27', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-28', imageUrl: 'https://i.imgur.com/Yi4paN6.png', description: 'Bolso de playa lujo 28', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-29', imageUrl: 'https://i.imgur.com/SPvFhZ9.png', description: 'Bolso de playa lujo 29', imageHint: 'luxury beach bag', category: 'praia' },
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
                  data-ai-hint={image.imageHint}
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
          +de 67 Coleções Increíbles
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-foreground text-lg">
          Todos os modelos foram desenhados para serem <b>lindos, vendáveis</b> e perfeitos para quem ama artesanato.
        </p>

        <Tabs defaultValue="bolsas" className="w-full max-w-lg mx-auto mt-10">
          <TabsList className="grid w-full grid-cols-2 h-auto p-2 bg-[#F3EBE3] border-2 border-[#D2B48C]/30 rounded-2xl shadow-sm gap-2">
            <TabsTrigger 
              value="bolsas" 
              className="text-base font-bold py-3 px-4 rounded-xl transition-all duration-300 data-[state=active]:bg-[#563209] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:hover:bg-black/5 relative overflow-visible"
            >
              <span className="absolute -top-3 -left-3 text-2xl animate-pulse pointer-events-none">🧶</span>
              Bolsas
            </TabsTrigger>
            <TabsTrigger 
              value="praia" 
              className="text-base font-bold py-3 px-4 rounded-xl transition-all duration-300 data-[state=active]:bg-[#563209] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:hover:bg-black/5 relative overflow-visible"
            >
              Bolsas Playa Lujo
              <span className="absolute -top-3 -right-3 text-2xl animate-pulse pointer-events-none">🏖️</span>
            </TabsTrigger>
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
