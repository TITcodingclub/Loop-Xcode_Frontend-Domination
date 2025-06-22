'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CookingExperience } from '@/components/CookingExperience';
import { mockRecipes } from '@/lib/mockData';
import {
  Clock,
  Users,
  Star,
  Heart,
  BookmarkPlus,
  ChefHat,
  CheckCircle,
  ArrowLeft,
  Share2,
  Play,
  Utensils,
  Timer,
  Award
} from 'lucide-react';

interface RecipePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function RecipePage({ params }: RecipePageProps) {
  const { id } = use(params);
  const recipe = mockRecipes.find((r) => r.id === id);
  const [showCookMode, setShowCookMode] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!recipe) {
    notFound();
  }



  if (showCookMode) {
    return <CookingExperience recipe={recipe} onClose={() => setShowCookMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/recipe">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Recipes</span>
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`rounded-full ${isLiked ? 'text-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSaved(!isSaved)}
                className={`rounded-full ${isSaved ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}`}
              >
                <BookmarkPlus className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Header */}
      <section className="relative overflow-hidden mx-5 lg:mx-15 xl:mx-27 2xl:mx-35">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Recipe Image */}
            <div className="order-2 lg:order-1">
              <Card className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-muted border-0">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-recipe.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating Stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border-0">
                      <Clock className="h-3 w-3 mr-1" />
                      {recipe.cookTime}m
                    </Badge>
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border-0">
                      <Users className="h-3 w-3 mr-1" />
                      {recipe.servings}
                    </Badge>
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border-0">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {recipe.rating}
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recipe Info */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {recipe.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {recipe.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {recipe.tags.map((tag, index) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 
                                 text-orange-800 dark:text-orange-300 rounded-full border-orange-200 dark:border-orange-700
                                 hover:scale-105 transition-transform duration-200 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Chef Info */}
              <Card className="bg-card rounded-2xl border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="w-14 h-14 ring-2 ring-orange-200 dark:ring-orange-800">
                        <AvatarImage src={recipe.chef.avatar} alt={recipe.chef.name} />
                        <AvatarFallback>{recipe.chef.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {recipe.chef.verified && (
                        <CheckCircle className="absolute -top-1 -right-1 h-5 w-5 text-blue-500 fill-white dark:fill-slate-800" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{recipe.chef.name}</span>
                        {recipe.chef.verified && (
                          <ChefHat className="h-4 w-4 text-orange-500" />
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">Professional Chef</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-foreground">{recipe.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{recipe.reviewCount} reviews</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={() => setShowCookMode(true)}
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 
                             text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Cooking Experience
                </Button>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients & Instructions Grid */}
      <section className="py-12 mx-5 lg:mx-15 xl:mx-27 2xl:mx-35">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
            {/* Ingredients */}
            <Card className="bg-card rounded-3xl border shadow-sm">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white">
                    <Utensils className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">Ingredients</CardTitle>
                    <p className="text-muted-foreground text-sm">{recipe.ingredients.length} items needed</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="max-h-[500px] overflow-y-auto space-y-3 pr-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors group cursor-pointer">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full group-hover:scale-125 transition-transform flex-shrink-0" />
                      <span className="text-foreground font-medium">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="bg-card rounded-3xl border shadow-sm">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl text-white">
                    <Timer className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">Instructions</CardTitle>
                    <p className="text-muted-foreground text-sm">{recipe.instructions.length} steps to perfection</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="max-h-[500px] overflow-y-auto space-y-3 pr-2">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors group cursor-pointer">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-foreground font-medium">{instruction}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          <Separator className="my-8" />

          {/* Recipe Stats */}
          <Card className="bg-muted/50 border">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-background rounded-2xl p-4 mb-6 border shadow-sm">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                    <ChefHat className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-foreground">Recipe Complete</h2>
                    <p className="text-muted-foreground text-sm">Ready to start cooking</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Follow the steps above to create this delicious {recipe.title}. Enjoy your cooking experience!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 