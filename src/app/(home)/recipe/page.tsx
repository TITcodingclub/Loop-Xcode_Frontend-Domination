'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { RecipeCard } from '@/components/RecipeCard';
import { mockRecipes } from '@/lib/mockData';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export default function RecipePage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'rating' | 'time'>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRecipes = useMemo(() => {
    let filtered = mockRecipes;

    if (selectedTags.length > 0) {
      filtered = filtered.filter((recipe) =>
        selectedTags.some((tag) => recipe.tags.includes(tag))
      );
    }

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'time':
          return a.cookTime - b.cookTime;
        default:
          return new Date().getTime() - new Date().getTime(); // For demo purposes
      }
    });
  }, [selectedTags, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentRecipes = filteredRecipes.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="container space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              {selectedTags.length > 0 ? 'Filtered Recipes' : 'Latest Recipes'}
            </h1>
            <p className="text-muted-foreground">
              {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <div className="text-6xl">🔍</div>
            <h2 className="text-xl font-semibold">No recipes found</h2>
            <p className="text-muted-foreground">Try adjusting your filters or search.</p>
            <Button onClick={() => setSelectedTags([])}>Clear Filters</Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-y-4 pt-8">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <Button
                            key={page}
                            variant={currentPage === page ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                            className="w-9 h-9 p-0"
                          >
                            {page}
                          </Button>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <span key={page} className="px-2 text-muted-foreground">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="gap-1"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Page Info */}
            <div className="text-center text-sm text-muted-foreground pt-4">
              <Separator className="mb-4" />
              Showing {startIndex + 1} to {Math.min(endIndex, filteredRecipes.length)} of {filteredRecipes.length} recipes
            </div>
          </>
        )}
      </div>
    </div>
  );
}
