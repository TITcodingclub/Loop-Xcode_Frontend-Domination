"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import {
  Search,
  Menu,
  X,
  ChefHat,
  Heart,
  BookOpen,
  User,
  Plus,
} from "lucide-react";
import router from "next/router";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">

        {/* desktop part */}

        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl"
          >
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              ChefMate
            </span>
          </Link>
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search recipes, chefs, or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Create Recipe
            </Button>
            <Link href="/recipe">
              <Button variant="ghost" size="sm" className="gap-2" >
                <BookOpen className="h-4 w-4" />
                All Recipes
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              Favorites
            </Button>
            <ThemeToggle />   {/* Theme Toggle Button */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-4 w-4" />
            </Button>
          </div>

            {/* Mobile Menu Button  */}
          
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />    {/* darkmode toggle button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>


        {/* desktop part end */}


        {/* Mobile menu show/hide */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* in phone navigation added by shubham */}
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Plus className="h-4 w-4" />
                  Create Recipe
                </Button>
                <Link href="/recipe">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <BookOpen className="h-4 w-4" />
                    All Recipes
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Heart className="h-4 w-4" />
                  Favorites
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <User className="h-4 w-4" />
                  My Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
