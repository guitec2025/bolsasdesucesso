
'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const allImages = [
  { id: 'crochet-bag-1', imageUrl: `https://i.imgur.com/r76j16N.jpeg`, description: `Bolsa de crochê 1`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-2', imageUrl: `https://i.imgur.com/ON1Tyqp.jpeg`, description: `Bolsa de crochê 2`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-3', imageUrl: `https://i.imgur.com/ftp5Wn6.jpeg`, description: `Bolsa de crochê 3`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-4', imageUrl: `https://i.imgur.com/Kc3jGcW.jpeg`, description: `Bolsa de crochê 4`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-5', imageUrl: `https://i.imgur.com/7HMTFU7.jpeg`, description: `Bolsa de crochê 5`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-6', imageUrl: `https://i.imgur.com/7xmWbQN.jpeg`, description: `Bolsa de crochê 6`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-7', imageUrl: `https://i.imgur.com/tgEESxy.png`, description: `Bolsa de crochê 7`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-8', imageUrl: `https://i.imgur.com/LBRCsGE.jpeg`, description: `Bolsa de crochê 8`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-9', imageUrl: `https://i.imgur.com/OviKXmZ.png`, description: `Bolsa de crochê 9`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-10', imageUrl: `https://i.imgur.com/euJlX0g.png`, description: `Bolsa de crochê 10`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-11', imageUrl: `https://i.imgur.com/I7tSjwc.jpeg`, description: `Bolsa de crochê 11`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-12', imageUrl: `https://i.imgur.com/rZ02jgI.jpeg`, description: `Bolsa de crochê 12`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-13', imageUrl: `https://i.imgur.com/ERj3yZh.png`, description: `Bolsa de crochê 13`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'crochet-bag-14', imageUrl: `https://i.imgur.com/C5JfdZW.png`, description: `Bolsa de crochê 14`, imageHint: 'crochet bag', category: 'bolsas' },
  { id: 'praia-1', imageUrl: 'https://i.imgur.com/HdDuWFS.png', description: 'Bolsa de praia luxo 1', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-2', imageUrl: 'https://i.imgur.com/B1frtB8.png', description: 'Bolsa de praia luxo 2', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-3', imageUrl: 'https://i.imgur.com/XpiyxqT.png', description: 'Bolsa de praia luxo 3', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-4', imageUrl: 'https://i.imgur.com/FGKJCjb.png', description: 'Bolsa de praia luxo 4', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-5', imageUrl: 'https://i.imgur.com/HiKYkKT.png', description: 'Bolsa de praia luxo 5', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-6', imageUrl: 'https://i.imgur.com/eHTLndj.png', description: 'Bolsa de praia luxo 6', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-7', imageUrl: 'https://i.imgur.com/QJyVjxg.png', description: 'Bolsa de praia luxo 7', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-8', imageUrl: 'https://i.imgur.com/FthVzjc.png', description: 'Bolsa de praia luxo 8', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-9', imageUrl: 'https://i.imgur.com/h4yIdcZ.png', description: 'Bolsa de praia luxo 9', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-10', imageUrl: 'https://i.imgur.com/Kt4paxr.png', description: 'Bônus: Chapéu praiano', imageHint: 'beach hat', category: 'praia' },
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
  { id: 'praia-21', imageUrl: 'https://i.imgur.com/mRHXLMf.png', description: 'Bônus: Bolsa caracol', imageHint: 'seashell bag', category: 'praia' },
  { id: 'praia-22', imageUrl: 'https://i.imgur.com/eba8xZZ.png', description: 'Bolsa de praia luxo 22', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-23', imageUrl: 'https://i.imgur.com/wxwRmy2.png', description: 'Bolsa de praia luxo 23', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-24', imageUrl: 'https://i.imgur.com/sxijJeb.png', description: 'Bolsa de praia luxo 24', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-25', imageUrl: 'https://i.imgur.com/0nhsO8g.png', description: 'Bônus: Bolsa coração fio de malha', imageHint: 'heart shaped bag', category: 'praia' },
  { id: 'praia-26', imageUrl: 'https://i.imgur.com/k90JSiI.png', description: 'Bolsa de praia luxo 26', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-27', imageUrl: 'https://i.imgur.com/RIeNAKU.png', description: 'Bolsa de praia luxo 27', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-28', imageUrl: 'https://i.imgur.com/Yi4paN6.png', description: 'Bolsa de praia luxo 28', imageHint: 'luxury beach bag', category: 'praia' },
  { id: 'praia-29', imageUrl: 'https://i.imgur.com/SPvFhZ9.png', description: 'Bolsa de praia luxo 29', imageHint: 'luxury beach bag', category: 'praia' },
];


export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const renderGalleryGrid = (category: 'bolsas' | 'praia') => {
    const images = allImages.filter(img => img.category === category);
    if (images.length === 0 && category === 'praia') {
      return (
        <div className="text-center py-10 text-foreground/70">
          <p>As fotos para esta seção serão adicionadas em breve!</p>
        </div>
      )
    }
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {images.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card cursor-pointer"
              onClick={() => setSelectedImage(image.imageUrl)}
            >
              <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full aspect-square transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
              />
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

        <Tabs defaultValue="bolsas" className="w-full max-w-sm mx-auto mt-8">
          <TabsList className="grid w-full grid-cols-2 h-auto p-2">
            <TabsTrigger value="bolsas" className="text-base">Bolsas</TabsTrigger>
            <TabsTrigger value="praia" className="text-base">Bolsas Praia Luxo</TabsTrigger>
          </TabsList>
          <TabsContent value="bolsas">
            {renderGalleryGrid('bolsas')}
          </TabsContent>
          <TabsContent value="praia">
            {renderGalleryGrid('praia')}
          </TabsContent>
        </Tabs>
        
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
            <DialogContent className="max-w-3xl p-4 sm:p-6 border-0">
               <DialogTitle className="sr-only">Visualização da imagem da bolsa de crochê</DialogTitle>
               <DialogDescription className="text-center text-foreground/80 -mb-2 sm:mb-0">
                Um dos mais de 67 padrões exclusivos que você vai aprender no curso.
               </DialogDescription>
              <Image 
                src={selectedImage}
                alt="Visualização da bolsa de crochê"
                width={800}
                height={800}
                className="object-contain w-full h-full rounded-md"
              />
            </DialogContent>
          </Dialog>
        )}

        <p className="mt-12 text-foreground text-lg">Clique no botão abaixo para garantir sua vaga e ter acesso à coleção completa.</p>
        <Button size="lg" className="mt-4 h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium" asChild>
          <a href="#pricing">
            QUERO A COLEÇÃO COMPLETA
          </a>
        </Button>
      </div>
    </section>
  );
}
