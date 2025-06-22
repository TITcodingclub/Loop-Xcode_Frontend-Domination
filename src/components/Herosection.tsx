'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, TrendingUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { mockRecipes } from '@/lib/mockData';
import { RecipeCard } from '@/components/RecipeCard';
import Link from "next/link";
export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const mockCategories = [
    { name: 'Chinese', icon: '🥡', count: 950 },
    { name: 'Indian', icon: '🍛', count: 700 },
    { name: 'Desserts', icon: '🍰', count: 600 },
    { name: 'Vegetarian', icon: '🥗', count: 500 },
    { name: 'Quick Meals', icon: '⏱️', count: 200 },
    { name: 'Healthy', icon: '🥦', count: 250 }
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover z-0 blur-xl"
        src="https://v1.pinimg.com/videos/mc/720p/15/0b/1f/150b1fb024497b412ac2c7f88ab4d548.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}
      {/* Overlay for better readability */}
      {/* <div className="absolute inset-0 bg-bac kground/10 z-10 pointer-events-none" /> */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero heading */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent mb-4">
              Cook, Share, and
              <br />
              <span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of food lovers sharing their favorite recipes.
              Discover new flavors, master cooking techniques, and create culinary memories.
            </p>
          </div>

          {/* search bar for hero section */}
          <form onSubmit={handleSearch} className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search for recipes, ingredients, or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 text-lg rounded-2xl border-2 border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 shadow-lg"
              />
              <Button 
                type="submit"
                className="absolute right-2 top-3.5 px-6 py-5 rounded-xl "
              >
                Search
              </Button>
            </div>
          </form>

          {/* Quick Stats using Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-background/50 backdrop-blur-sm border rounded-2xl text-center">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">50K+</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Recipes Shared</CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border rounded-2xl text-center">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">25K+</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Active Chefs</CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border rounded-2xl text-center">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">1M+</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Dishes Cooked</CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Popular Categories</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockCategories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </span>
                <span className="font-medium text-sm">{category.name}</span>
                <span className="text-xs text-muted-foreground">{category.count} recipes</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className='my-5'><Separator /></div>

      {/* recipie started */}

     <section className="py-12 mx-5 lg:mx-25">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Recipes</h2>
              <p className="text-muted-foreground">{mockRecipes.length} recipes found</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={"/recipe"}
            >
              <Button variant="outline" size="lg" className="gap-2">
              View all Recipe
              
            </Button>
            </Link>
            
          </div>
        </div>
      </section>







      
    </section>
    
    
    
  );
}
