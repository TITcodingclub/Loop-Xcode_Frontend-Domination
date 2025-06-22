'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Recipe } from '@/lib/mockData';
import { 
  X, 
  CheckCircle, 
  Timer, 
  ArrowRight, 
  ArrowLeft,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import PrepBoard from './prepare';

interface CookingExperienceProps {
  recipe: Recipe;
  onClose: () => void;
}

export function CookingExperience({ recipe, onClose }: CookingExperienceProps) {
  const [activeTab, setActiveTab] = useState('todo');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepTimer, setStepTimer] = useState(0);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startStepTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setStepTimer(prev => prev + 1);
    }, 1000);
    setIsPlaying(true);
  };

  const pauseStepTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
  };

  const resetStepTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setStepTimer(0);
    setIsPlaying(false);
  };

  const nextStep = () => {
    if (currentStep < recipe.instructions.length - 1) {
      setCurrentStep(currentStep + 1);
      resetStepTimer();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      resetStepTimer();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-2xl font-bold">{recipe.title}</CardTitle>
            <p className="text-muted-foreground">Cooking Experience</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="p-0 overflow-auto max-h-[calc(90vh-120px)]">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="px-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="todo" className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Prep Board
                </TabsTrigger>
                <TabsTrigger value="cook" className="flex items-center gap-2">
                  <Timer className="h-4 w-4" />
                  Cook Mode
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="todo" className="px-6 pb-6 mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Preparation Board</h3>
                  <p className="text-sm text-muted-foreground">Drag and drop to organize your cooking prep</p>
                </div>
                <PrepBoard />
              </div>
            </TabsContent>

            <TabsContent value="cook" className="px-6 pb-6 mt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Step {currentStep + 1} of {recipe.instructions.length}</h3>
                    <p className="text-muted-foreground">Follow each step carefully</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-lg font-mono">
                      {formatTime(stepTimer)}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={isPlaying ? pauseStepTimer : startStepTimer}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="sm" onClick={resetStepTimer}>
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="default" className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0 p-0 bg-gradient-to-r from-blue-500 to-indigo-500">
                      {currentStep + 1}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed">{recipe.instructions[currentStep]}</p>
                    </div>
                  </div>
                </Card>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress</span>
                    <span>{Math.round(((currentStep + 1) / recipe.instructions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / recipe.instructions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous Step
                  </Button>
                  
                  {currentStep === recipe.instructions.length - 1 ? (
                    <Button 
                      className="gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                      onClick={onClose}
                    >
                      <CheckCircle className="h-4 w-4" />
                      Complete Recipe
                    </Button>
                  ) : (
                    <Button 
                      onClick={nextStep}
                      className="gap-2"
                    >
                      Next Step
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
} 