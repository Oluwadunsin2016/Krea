"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, User, Printer } from 'lucide-react';

export function Gallery() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Gallery</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>User</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Printer className="w-4 h-4" />
            <span>Pricing</span>
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden border-0 shadow-sm">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">G</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Discover Amazing Creations
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Explore a curated collection of AI-generated content from our community of creators.
              </p>
            </div>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
              Browse Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}