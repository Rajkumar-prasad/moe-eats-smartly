
import { NutritionInfo } from "@/data/menu-items";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface NutritionDisplayProps {
  nutrition: NutritionInfo;
  className?: string;
}

const NutritionDisplay = ({ nutrition, className }: NutritionDisplayProps) => {
  // Rough recommended daily values for reference
  const dailyValues = {
    calories: 2000,
    protein: 50, // g
    fat: 65, // g
    carbs: 300, // g
    sodium: 2300, // mg
  };

  const getProgressColor = (nutrient: keyof NutritionInfo, value: number) => {
    const percentage = (value / dailyValues[nutrient]) * 100;
    
    if (percentage < 25) return "bg-green-500";
    if (percentage < 50) return "bg-blue-500";
    if (percentage < 75) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <Card className={cn("w-full bg-card/95 backdrop-blur-sm shadow-md", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-center">Nutrition Facts</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex justify-between items-center">
          <div className="font-bold">Calories</div>
          <div className="text-xl font-semibold">{nutrition.calories}</div>
        </div>
        <Separator />
        
        {/* Protein */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <div>Protein</div>
            <div className="font-medium">{nutrition.protein}g</div>
          </div>
          <Progress 
            value={(nutrition.protein / dailyValues.protein) * 100} 
            className={cn("h-2", getProgressColor('protein', nutrition.protein))}
          />
        </div>
        
        {/* Fat */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <div>Fat</div>
            <div className="font-medium">{nutrition.fat}g</div>
          </div>
          <Progress 
            value={(nutrition.fat / dailyValues.fat) * 100} 
            className={cn("h-2", getProgressColor('fat', nutrition.fat))}
          />
        </div>
        
        {/* Carbs */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <div>Carbs</div>
            <div className="font-medium">{nutrition.carbs}g</div>
          </div>
          <Progress 
            value={(nutrition.carbs / dailyValues.carbs) * 100} 
            className={cn("h-2", getProgressColor('carbs', nutrition.carbs))}
          />
        </div>
        
        {/* Sodium */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <div>Sodium</div>
            <div className="font-medium">{nutrition.sodium}mg</div>
          </div>
          <Progress 
            value={(nutrition.sodium / dailyValues.sodium) * 100} 
            className={cn("h-2", getProgressColor('sodium', nutrition.sodium))}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionDisplay;
