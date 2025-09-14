"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';

const featuredModels = [
  {
    id: 1,
    title: 'WAN 2.2',
    subtitle: 'WAN 2.2 Image generation',
    description: 'Generate complex images with the latest raw and cinematic WAN 2.2 model. Exceptional prompt adherence and ultra-fine details.',
    image: 'https://cdn.openart.ai/assets/internal/uploads/image_FmAdm4PJ_344x512_1754747322239.png',
    category: 'NEW IMAGE MODEL',
    buttonText: 'Try WAN 2.2'
  },
  {
    id: 2,
    title: 'Open Source',
    subtitle: 'FLUX.1 Krea',
    description: 'We\'ve made it our mission to our FLUX.1 Krea model super fast. Download it from our model explorer and run the technical report of it.',
    image: 'https://cdn.openart.ai/assets/internal/uploads/image_Dbdj01FP_656x724_1753248032862.webp',
    category: 'OPEN SOURCE MODEL',
    buttonText: 'Download'
  },
  {
    id: 3,
    title: 'Pro Model',
    subtitle: 'Advanced AI Generation',
    description: 'Professional grade model for commercial projects with enhanced capabilities and priority processing.',
    image: 'https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'PREMIUM MODEL',
    buttonText: 'Subscribe'
  },
  {
    id: 4,
    title: 'Neural Art',
    subtitle: 'Style Transfer Pro',
    description: 'Transform your photos into artworks using the styles of famous artists with our advanced neural style transfer technology.',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'ARTISTIC MODEL',
    buttonText: 'Create Art'
  },
  {
    id: 5,
    title: 'Text-to-3D',
    subtitle: '3D Object Generation',
    description: 'Generate detailed 3D models from text descriptions. Perfect for game development, AR/VR, and 3D printing.',
    image: 'data:image/jpeg;base64,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',
    category: '3D MODEL',
    buttonText: 'Generate 3D'
  },
  {
    id: 6,
    title: 'Audio Synthesis',
    subtitle: 'Voice & Sound Generation',
    description: 'Create realistic voiceovers, sound effects, and music with our advanced audio synthesis models.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'AUDIO MODEL',
    buttonText: 'Generate Audio'
  },
  {
    id: 7,
    title: 'Video Generation',
    subtitle: 'Text-to-Video AI',
    description: 'Create short video clips from text descriptions with smooth motion and consistent characters.',
    image: 'https://cdn.hailuoai.video/moss/prod/2025-06-19-01/video_cover/1750266852870255144-cover_022d1eea04bd364e251d8ff10db01f22.jpeg?x-oss-process=image/resize,w_540/format,webp',
    category: 'VIDEO MODEL',
    buttonText: 'Create Video'
  },
  {
    id: 8,
    title: 'Code Assistant',
    subtitle: 'AI Programming Helper',
    description: 'Get help with coding tasks, bug fixes, and algorithm suggestions from our AI programming assistant.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'DEVELOPER TOOL',
    buttonText: 'Try Now'
  },
  {
    id: 9,
    title: 'Chat Assistant',
    subtitle: 'Conversational AI',
    description: 'Engage in natural conversations with our advanced chatbot capable of understanding context and nuance.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'CHAT MODEL',
    buttonText: 'Start Chatting'
  },
  {
    id: 10,
    title: 'Document Analysis',
    subtitle: 'AI Document Processing',
    description: 'Extract insights, summarize content, and analyze documents with our advanced document processing AI.',
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'PRODUCTIVITY TOOL',
    buttonText: 'Analyze Documents'
  },
  {
    id: 11,
    title: 'Face Generation',
    subtitle: 'AI Portrait Creation',
    description: 'Generate realistic human faces with diverse attributes for character design, avatars, and artistic projects.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'PORTRAIT MODEL',
    buttonText: 'Generate Faces'
  },
  {
    id: 12,
    title: 'Landscape Creator',
    subtitle: 'Scenic Image Generation',
    description: 'Create breathtaking landscapes, from serene beaches to majestic mountains, with our specialized landscape model.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'LANDSCAPE MODEL',
    buttonText: 'Create Landscape'
  },
  {
    id: 13,
    title: 'Product Designer',
    subtitle: 'AI-Assisted Design',
    description: 'Generate product concepts, packaging designs, and marketing materials with our design-focused AI model.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'DESIGN TOOL',
    buttonText: 'Design Products'
  },
  {
    id: 14,
    title: 'Data Visualizer',
    subtitle: 'AI Data Analysis',
    description: 'Transform complex data into clear, insightful visualizations with our data analysis and visualization AI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'DATA TOOL',
    buttonText: 'Visualize Data'
  },
  {
    id: 15,
    title: 'Language Translator',
    subtitle: 'Multilingual AI',
    description: 'Translate text between dozens of languages while preserving context, nuance, and cultural references.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'LANGUAGE TOOL',
    buttonText: 'Translate Text'
  }
];


export function FeaturedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  
  const scrollForward = () => {
    if (sliderRef.current) {
      if (currentIndex < featuredModels.length - 1) {
        sliderRef.current.scrollBy({
          left:
            window.innerWidth < 768
              ? sliderRef.current.offsetWidth
              : sliderRef.current.offsetWidth * 0.75, // show 1.5 cards on desktop
          behavior: 'smooth',
        });
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };
  
  const scrollBackward = () => {
    if (sliderRef.current) {
      if (currentIndex > 0) {
        sliderRef.current.scrollBy({
          left:
            window.innerWidth < 768
              ? -sliderRef.current.offsetWidth
              : -sliderRef.current.offsetWidth * 0.75,
          behavior: 'smooth',
        });
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };
  

  return (
    <section className="relative">
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll space-x-6 scrollbar-hide w-full snap-x snap-mandatory rounded-2xl scrollbar-hide"
      >
        {featuredModels.map((model) => (
          <div
            key={model.id}
            className="flex-shrink-0 w-full md:w-[75%] snap-center"
          >
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative h-80 md:h-96">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${model.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-8 text-white">
                    <div className="flex items-start justify-center md:justify-between">
                      <span className="text-xs text-gray-300 font-semibold">
                        {model.category}
                      </span>
                    </div>
                     {/* <div className="flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                          <Sparkles className="w-4 h-4 mr-2" />
                          <span className="text-xs font-medium">{model.category}</span>
                        </div> */}
                    <h2 className="text-2xl md:text-5xl font-bold mb-2 text-center">
                      {model.title}
                    </h2>
                    <div className="flex flex-col md:flex-row gap-2 items-end justify-between">
                      <div>
                        <h3 className="text-xl md:text-2xl font-medium opacity-90 mb-4">
                          {model.subtitle}
                        </h3>
                        <p className="text-sm md:text-base opacity-80 max-w-md leading-relaxed">
                          {model.description}
                        </p>
                      </div>
                      <Button className="bg-white text-black hover:bg-gray-100 font-medium px-6 rounded-full">
                        {model.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Chevron Navigation */}
      <div className="absolute right-6 bottom-5 md:-bottom-2 flex items-center justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollBackward}
          className="rounded-full w-6 h-6"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollForward}
          className="rounded-full w-6 h-6"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

           <div className="flex space-x-2 justify-center mt-6">
         {featuredModels.map((_, index) => (
           <button
             key={index}
             onClick={() => setCurrentIndex(index)}
             className={`w-2 h-2 rounded-full transition-colors ${
               index === currentIndex ? 'bg-primary' : 'bg-muted'
             }`}
           />
         ))}
       </div>
    </section>
  );
}