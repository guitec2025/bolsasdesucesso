'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Eye, Star, ChevronDown } from 'lucide-react';
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
    imageUrl: 'https://i.ibb.co/SwdWTLjP/bolsa1.webp', 
    description: 'Bolsa de crochê exclusiva 1', 
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
    imageUrl: 'https://i.ibb.co/JFWkZxgG/bolsa2.webp', 
    description: 'Bolsa de crochê exclusiva 2', 
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
    imageUrl: 'https://i.ibb.co/Csb0Jqxk/bolsa3.webp', 
    description: 'Bolsa de crochê exclusiva 3', 
    imageHint: 'crochet bag', 
    category: 'bolsas',
    isFavorite: true 
  },
  { id: 'crochet-bag-1', imageUrl: `https://i.ibb.co/DgC9jWC5/bolsa4.webp`, description: `Bolsa de crochê 1`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: false },
  { id: 'crochet-bag-2', imageUrl: `https://i.ibb.co/0p1VcgxZ/bolsa5.webp`, description: `Bolsa de crochê 2`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: true },
  { id: 'crochet-bag-3', imageUrl: `https://i.ibb.co/Zp6QvTm5/bolsa6.webp`, description: `Bolsa de crochê 3`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-4', imageUrl: `https://i.ibb.co/CKdccnrJ/bolsa7.webp`, description: `Bolsa de crochê 4`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: true },
  { id: 'crochet-bag-5', imageUrl: `https://i.ibb.co/20Wg09pd/bolsa8.webp`, description: `Bolsa de crochê 5`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: true },
  { id: 'crochet-bag-6', imageUrl: `https://i.ibb.co/chDPqSTH/bolsa9.webp`, description: `Bolsa de crochê 6`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: true },
  { id: 'crochet-bag-7', imageUrl: `https://i.ibb.co/9k4J1Bts/bolsa10.webp`, description: `Bolsa de crochê 7`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: false },
  { id: 'crochet-bag-8', imageUrl: `https://i.ibb.co/JR1x6VKs/bolsa11.webp`, description: `Bolsa de crochê 8`, imageHint: 'crochet bag', category: 'bolsas', isFavorite: false },
  { id: 'crochet-bag-9', imageUrl: `https://i.ibb.co/4wJpYcDZ/bolsa12.webp`, description: `Bolsa de crochê 9`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-10', imageUrl: `https://i.ibb.co/nM8RGwFq/bolsa13.webp`, description: `Bolsa de crochê 10`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-11', imageUrl: `https://i.ibb.co/tp7wrnxc/bolsa14.webp`, description: `Bolsa de crochê 11`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-12', imageUrl: `https://i.ibb.co/fz3z3xXj/bolsa15.webp`, description: `Bolsa de crochê 12`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-13', imageUrl: `https://i.ibb.co/Y44HwfhT/bolsa16.webp`, description: `Bolsa de crochê 13`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-14', imageUrl: `https://i.ibb.co/1Jf6k8Ln/bolsa17.webp`, description: `Bolsa de crochê 14`, imageHint: 'crochet bag', category: 'bolsas' },
  
  /* Categoria Praia */
  { id: 'praia-1', imageUrl: 'https://i.imgur.com/HdDuWFS.png', description: 'Bolsa de praia luxo 1', imageHint: 'luxury beach bag', category: 'praia', isFavorite: true },
  { id: 'praia-21', imageUrl: 'https://i.imgur.com/mRHXLMf.png', description: 'Bônus: Bolsa caracol', imageHint: 'seashell bag', category: 'praia', isFavorite: true },
  { id: 'praia-2', imageUrl: 'https://i.imgur.com/B1frtB8.png', description: 'Bolsa de praia luxo 2', imageHint: 'luxury beach bag', category: 'praia', isFavorite: true },
  { id: 'praia-3', imageUrl: 'https://i.imgur.com/XpiyxqT.png', description: 'Bolsa de praia luxo 3', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-4', imageUrl: 'https://i.imgur.com/FGKJCjb.png', description: 'Bolsa de praia luxo 4', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-5', imageUrl: 'https://i.imgur.com/HiKYkKT.png', description: 'Bolsa de praia luxo 5', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-6', imageUrl: 'https://i.imgur.com/eHTLndj.png', description: 'Bolsa de praia luxo 6', imageHint: 'luxury beach bag', category: 'praia', isFavorite: true },
  { id: 'praia-7', imageUrl: 'https://i.imgur.com/QJyVjxg.png', description: 'Bolsa de praia luxo 7', imageHint: 'luxury beach bag', category: 'praia', isFavorite: true },
  { id: 'praia-8', imageUrl: 'https://i.imgur.com/FthVzjc.png', description: 'Bolsa de praia luxo 8', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-9', imageUrl: 'https://i.imgur.com/h4yIdcZ.png', description: 'Bolsa de praia luxo 9', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-10', imageUrl: 'https://i.imgur.com/Kt4paxr.png', description: 'Bônus: Chapéu praiano', imageHint: 'beach hat', category: 'praia', isFavorite: true },
  { id: 'praia-11', imageUrl: 'https://i.imgur.com/mbOSpgB.png', description: 'Bolsa de praia luxo 11', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-12', imageUrl: 'https://i.imgur.com/ToCsGq3.png', description: 'Bolsa de praia luxo 12', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-13', imageUrl: 'https://i.imgur.com/CBY8rMk.png', description: 'Bolsa de praia luxo 13', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-14', imageUrl: 'https://i.imgur.com/jgZBtZJ.png', description: 'Bolsa de praia luxo 14', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-15', imageUrl: 'https://i.imgur.com/JNoqoy3.png', description: 'Bolsa de praia luxo 15', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-16', imageUrl: 'https://i.imgur.com/TcC0oLR.png', description: 'Bolsa de praia luxo 16', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-17', imageUrl: 'https://i.imgur.com/cAT2Ix6.png', description: 'Bolsa de praia luxo 17', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-18', imageUrl: 'https://i.imgur.com/tj6V9OR.png', description: 'Bolsa de praia luxo 18', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-19', imageUrl: 'https://i.imgur.com/WcYVGEZ.png', description: 'Bolsa de praia luxo 19', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-20', imageUrl: 'https://i.imgur.com/8RxbMmO.png', description: 'Bolsa de praia luxo 20', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-22', imageUrl: 'https://i.imgur.com/eba8xZZ.png', description: 'Bolsa de praia luxo 22', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-23', imageUrl: 'https://i.imgur.com/wxwRmy2.png', description: 'Bolsa de praia luxo 23', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-24', imageUrl: 'https://i.imgur.com/sxijJeb.png', description: 'Bolsa de praia luxo 24', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-25', imageUrl: 'https://i.imgur.com/0nhsO8g.png', description: 'Bônus: Bolsa coração fio de malha', imageHint: 'heart shaped bag', category: 'praia' },
  { id: 'praia-26', imageUrl: 'https://i.imgur.com/k90JSiI.png', description: 'Bolsa de praia luxo 26', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-27', imageUrl: 'https://i.imgur.com/RIeNAKU.png', description: 'Bolsa de praia luxo 27', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-28', imageUrl: 'https://i.imgur.com/Yi4paN6.png', description: 'Bolsa de praia luxo 28', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-29', imageUrl: 'https://i.imgur.com/SPvFhZ9.png', description: 'Bolsa de praia luxo 29', imageHint: 'luxury beach bag', category: 'praia' },
];

const INITIAL_VISIBLE_COUNT = 8;

export function Gallery() {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [activeTab, setActiveTab] = useState<'bolsas' | 'praia'>('bolsas');
  
  const selectedImageData = useMemo(() => allImages.find(img => img.id === selectedImageId), [selectedImageId]);

  const imagesForCurrentTab = useMemo(() => 
    allImages.filter(img => img.category === activeTab),
    [activeTab]
  );

  const visibleImages = useMemo(() => 
    imagesForCurrentTab.slice(0, visibleCount),
    [imagesForCurrentTab, visibleCount]
  );

  const hasMore = visibleCount < imagesForCurrentTab.length;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const renderGalleryGrid = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {visibleImages.map((image) => (
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
                  loading="lazy"
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
          Galeria de Bolsas
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#563209]">
          +de 67 Coleções Incríveis
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-foreground text-lg">
          Todos os modelos foram desenhados para serem <b>lindos, vendáveis</b> e perfeitos para quem ama artesanato.
        </p>

        <Tabs defaultValue="bolsas" className="w-full max-w-sm mx-auto mt-8" onValueChange={(v) => {
          setActiveTab(v as any);
          setVisibleCount(INITIAL_VISIBLE_COUNT);
        }}>
          <TabsList className="grid w-full grid-cols-2 h-auto p-2">
            <TabsTrigger value="bolsas" className="text-base relative overflow-visible">
              <span className="absolute -top-2 -left-2 text-xl pointer-events-none">🧶</span>
              Bolsas
            </TabsTrigger>
            <TabsTrigger value="praia" className="text-base relative overflow-visible">
              Bolsas Praia Luxo
              <span className="absolute -top-2 -right-2 text-xl pointer-events-none">🏖️</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bolsas">
            {renderGalleryGrid()}
          </TabsContent>
          <TabsContent value="praia">
            {renderGalleryGrid()}
          </TabsContent>
        </Tabs>

        {hasMore && (
          <div className="mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleShowMore}
              className="group border-primary/20 text-[#563209] hover:bg-primary/10 transition-colors"
            >
              <ChevronDown className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Ver mais modelos exclusivos
            </Button>
          </div>
        )}
        
        {selectedImageData && (
          <Dialog open={!!selectedImageId} onOpenChange={(isOpen) => !isOpen && setSelectedImageId(null)}>
            <DialogContent className="max-w-3xl p-4 sm:p-6 border-0">
               <DialogTitle className="sr-only">Visualização da imagem da bolsa de crochê</DialogTitle>
               <DialogDescription className="text-center text-foreground/80 -mb-2 sm:mb-4">
                {selectedImageData.variations 
                  ? "Arraste para o lado para ver as variações de cores deste modelo exclusivo."
                  : "Um dos mais de 67 padrões exclusivos que você vai aprender no curso."
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
                            alt={`Variação ${index + 1} da bolsa`}
                            width={800}
                            height={800}
                            priority
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
                    alt="Visualização da bolsa de crochê"
                    width={800}
                    height={800}
                    priority
                    className="object-contain w-full h-auto max-h-[70vh] rounded-md"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        )}

        <p className="mt-12 text-foreground text-lg">Clique no botão abaixo para garantir sua vaga e ter acesso à coleção completa.</p>
        <Button
          size="lg"
          className="mt-4 h-14 text-lg border-0 hover:opacity-90 text-white font-medium"
          style={{ backgroundColor: '#f6aa28', color: '#312a23' }}
          asChild
        >
          <a href="#pricing">
            QUERO A COLEÇÃO COMPLETA
          </a>
        </Button>
      </div>
    </section>
  );
}
