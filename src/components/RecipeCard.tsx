'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Recipe } from '@/lib/mockData';
import { 
  Clock, 
  Users, 
  Star, 
  Heart, 
  BookmarkPlus,
  ChefHat,
  CheckCircle
} from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSaved(!isSaved);
  };

  const getDifficultyBadgeStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <Link href={`/recipe/${recipe.id}`}>
      <Card className="group relative bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-0">
        {/* Recipe Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              console.error('Image loading error:', e);
            }}
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
              onClick={handleLike}
            >
              <Heart 
                className={`h-4 w-4 transition-colors ${
                  isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
                }`} 
              />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
              onClick={handleSave}
            >
              <BookmarkPlus 
                className={`h-4 w-4 transition-colors ${
                  isSaved ? 'fill-primary text-primary' : 'text-gray-600'
                }`} 
              />
            </Button>
          </div>

          {/* Difficulty Badge */}
          <div className="absolute top-3 left-3">
            <Badge 
              variant="outline" 
              className={`border-0 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyBadgeStyle(recipe.difficulty)}`}
            >
              {recipe.difficulty}
            </Badge>
          </div>
        </div>

        {/* Recipe Details */}
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {recipe.title}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {recipe.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {recipe.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground border-0"
              >
                {tag}
              </Badge>
            ))}
            {recipe.tags.length > 3 && (
              <Badge
                variant="secondary"
                className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground border-0"
              >
                +{recipe.tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Recipe Meta */}
          <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{recipe.cookTime}m</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{recipe.servings}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{recipe.rating}</span>
              <span className="text-xs">({recipe.reviewCount})</span>
            </div>
          </div>

          {/* Chef Info */}
          <div className="flex items-center gap-2 pt-3 border-t">
            <div className="relative">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={recipe.chef.avatar}
                  alt={recipe.chef.name}
                />
                <AvatarFallback>
                  {recipe.chef.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {recipe.chef.verified && (
                <CheckCircle className="absolute -top-1 -right-1 h-3 w-3 text-blue-500 fill-white dark:fill-background" />
              )}
            </div>
            <span className="text-sm font-medium">{recipe.chef.name}</span>
            {recipe.chef.verified && (
              <ChefHat className="h-3 w-3 text-primary" />
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 