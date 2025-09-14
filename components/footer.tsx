"use client";

import { Card, CardContent } from '@/components/ui/card';

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-semibold text-foreground">Krea AI</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>curated by</span>
                <div className="flex items-center space-x-2 font-medium">
                  <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
                    <span className="text-background font-bold text-xs">M</span>
                  </div>
                  <span className="text-foreground">Mobbin</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}