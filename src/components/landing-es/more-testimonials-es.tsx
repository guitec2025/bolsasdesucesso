
'use client';

import Image from 'next/image';

export function MoreTestimonialsES() {
  return (
    <section className="py-6 sm:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl">
              <Image
                src="https://i.imgur.com/xdQUoaZ.png"
                alt="Testimonio"
                width={800}
                height={1200}
                className="rounded-xl shadow-sm object-contain w-full h-auto"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
