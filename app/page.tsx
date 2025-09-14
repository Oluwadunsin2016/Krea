"use client";

import { Header } from '@/components/header';
import { FeaturedSection } from '@/components/featured-section';
import { GenerateSection } from '@/components/generate-section';
import { Gallery } from '@/components/gallery';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <FeaturedSection />
        <GenerateSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}