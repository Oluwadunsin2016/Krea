"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Home, Download, Upload, Menu, X, Sun, Moon, GalleryVertical as GalleryIcon, HelpCircle,  Image, 
  Video, 
  Wand2, Folder, DraftingCompass, Camera, Bell } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectTab, setSelectTab] = useState('Home');
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: 'Home', icon: Home,},
    { name: 'Image', icon: Image,},
    { name: 'Video', icon: Video,},
    { name: 'Enhance', icon: Wand2,},
    { name: 'Camera', icon: Camera,},
    { name: 'Compass', icon:  DraftingCompass,},
    { name: 'Folder', icon: Folder,},
  ];
  
  const navigation2 = [
    { name: 'Gallery', icon: Image,},
    { name: 'Support', icon: HelpCircle,},
  ]
  
  const combinedNavigation =[
    { name: 'Home', icon: Home,},
    { name: 'Image', icon: Image,},
    { name: 'Video', icon: Video,},
    { name: 'Enhance', icon: Wand2,},
    { name: 'Camera', icon: Camera,},
    { name: 'Gallery', icon: Image,},
    { name: 'Support', icon: HelpCircle,},
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              Krea AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-gray-100 dark:bg-gray-900 p-2 rounded-lg">
            {navigation.map((item) => (
              <Button
                key={item.name}
                onClick={()=>setSelectTab(item.name)}
                size="sm"
                className={` ${selectTab===item.name?"bg-white dark:bg-gray-700 shadow":'bg-transparent'} text-black dark:text-white flex items-center space-x-4 hover:bg-gray-200 dark:hover:bg-gray-800`}
              >
                <item.icon className="w-4 h-4" />
              </Button>
            ))}
          </nav>

          {/* Right Section */}
          <div>
            <div className="hidden md:flex items-center space-x-4">
          {navigation2.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="flex items-center gap-1"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </Button>
            ))}
            {/* Theme Toggle */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            <Bell className="h-5 w-5 cursor-pointer" />
            </div>
            <div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
  {theme === 'dark' ? (
    <Sun
      className="h-5 w-5 cursor-pointer"
      onClick={() => setTheme('light')}
    />
  ) : (
    <Moon
      className="h-5 w-5 cursor-pointer"
      onClick={() => setTheme('dark')}
    />
  )}
</div>

            {/* User Avatar */}
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-sm">
                U
              </AvatarFallback>
            </Avatar>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {combinedNavigation.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      size="sm"
                      className="justify-start space-x-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Button>
                  ))}
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm font-medium">Dark Mode</span>
                    <Switch
                      checked={theme === 'dark'}
                      onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}