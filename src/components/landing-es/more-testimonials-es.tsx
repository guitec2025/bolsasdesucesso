
'use client';

import Image from 'next/image';

export function MoreTestimonialsES() {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-xl">
              <Image
                src="https://i.imgur.com/xdQUoaZ.png"
                alt="Testimonio"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-contain w-full"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
