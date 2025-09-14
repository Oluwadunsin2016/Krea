"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Image, 
  Video, 
  Volume2, 
  Wand2, 
  ArrowRight, 
  Palette,
  Music,
  FileText,
  Zap,
  Camera,
  Mic,
  DraftingCompass
} from 'lucide-react';

const tools = [
  {
    name: 'Image',
    description: 'Generate images with custom styles in Flex and ideogram',
    icon: Image,
    badge: 'New',
    badgeVariant: 'default' as const,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Video',
    description: 'Generate videos with Hailuo, Flux, Runway, Luma, and more.',
    icon: Video,
    badge: null,
    badgeVariant: null,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Realtime',
    description: 'Realtime AI rendering on a camera. Instant feedback loopa',
    icon: Camera,
    badge: null,
    badgeVariant: null,
    color: 'from-green-500 to-teal-500'
  },
  {
    name: 'Enhancer',
    description: 'Enhance and enhance images and videos up to 22k.',
    icon: Wand2,
    badge: 'New',
    badgeVariant: 'default' as const,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Edit',
    description: 'Add objects, change styles, or expand photos and generations',
    icon: DraftingCompass,
    badge: 'New',
    badgeVariant: 'default' as const,
    color: 'from-black to-purple-600'
  },
  {
    name: 'Video Lipsync',
    description: 'Lipsync any video to any audio',
    icon: Mic,
    badge: 'New',
    badgeVariant: 'default' as const,
    color: 'from-orange-500 to-indigo-500'
  },
  {
    name: 'Motion Transfer',
    description: 'Transfer motion to images and animal characters',
    icon: Zap,
    badge: 'New',
    badgeVariant: 'secondary' as const,
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Train',
    description: 'Teach how to replicate your style, products, or characters.',
    icon: FileText,
    badge: null,
    badgeVariant: null,
    color: 'from-yellow-500 to-orange-500'
  }
];

export function GenerateSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Generate</h2>
        <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950">
          View all
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
      <div key={index} className="flex items-start gap-4 mb-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center flex-none shadow-sm`}>
        <tool.icon className="w-6 h-6 text-white" />
      </div>
     <div className="flex gap-3 items-center justify-between w-full">
    <div className="space-y-2 flex-1">
      <div className="flex items-start gap-2">
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
        {tool.name}
      </h3>
      {tool.badge && (
        <Badge className="text-xs px-2 py-0.5 bg-blue-500 text-white hover:bg-blue-500">
          {tool.badge}
        </Badge>
      )}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {tool.description}
      </p>
    </div>

    <button className="text-xs px-3 py-1 bg-gray-200/50 rounded-full font-semibold">
          Open
        </button>
    </div>
     </div>
        ))}
      </div>
    </section>
  );
}