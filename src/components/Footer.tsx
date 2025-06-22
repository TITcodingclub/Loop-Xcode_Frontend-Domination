'use client';

import Link from 'next/link';
import { Heart, ChefHat, Mail, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white">
                <ChefHat className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-foreground">ChefMate</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Your culinary companion for discovering, cooking, and sharing amazing recipes with the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 md:flex-col md:space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Home
              </Link>
              <Link href="/recipe" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Recipes
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                About
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex justify-center md:justify-start gap-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Github className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8 mx-auto" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
            <span>&copy; 2024 ChefMate. All rights reserved.</span>
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="hidden sm:block">•</span>
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Team Credit */}
          <div className="flex items-center gap-1 text-sm lg:mx-[90px]">
            <span className="text-muted-foreground">Designed with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span className="text-muted-foreground">by</span>
            <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Team Loop Xcode
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}