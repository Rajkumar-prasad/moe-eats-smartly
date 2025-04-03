
import { useState, useEffect } from "react";
import { 
  allMenuItems, 
  baseItems, 
  proteinItems, 
  toppingItems, 
  sauceItems, 
  sideItems,
  NutritionInfo,
  MenuItem
} from "@/data/menu-items";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import MenuItemSelector from "@/components/MenuItemSelector";
import NutritionDisplay from "@/components/NutritionDisplay";
import { RefreshCw } from "lucide-react";
import { toast } from "sonner";

const NutritionCalculator = () => {
  const [baseItem, setBaseItem] = useState<MenuItem[]>([]);
  const [proteins, setProteins] = useState<MenuItem[]>([]);
  const [toppings, setToppings] = useState<MenuItem[]>([]);
  const [sauces, setSauces] = useState<MenuItem[]>([]);
  const [sides, setSides] = useState<MenuItem[]>([]);
  const [totalNutrition, setTotalNutrition] = useState<NutritionInfo>({
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
    sodium: 0
  });

  // Calculate total nutrition whenever selections change
  useEffect(() => {
    const selectedItems = [...baseItem, ...proteins, ...toppings, ...sauces, ...sides];
    
    if (selectedItems.length === 0) {
      setTotalNutrition({
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        sodium: 0
      });
      return;
    }
    
    const newTotals = selectedItems.reduce((acc, item) => {
      acc.calories += item.baseNutrition.calories;
      acc.protein += item.baseNutrition.protein;
      acc.fat += item.baseNutrition.fat;
      acc.carbs += item.baseNutrition.carbs;
      acc.sodium += item.baseNutrition.sodium;
      return acc;
    }, {
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
      sodium: 0
    });
    
    // Round to nearest whole number
    Object.keys(newTotals).forEach(key => {
      newTotals[key as keyof NutritionInfo] = Math.round(newTotals[key as keyof NutritionInfo]);
    });
    
    setTotalNutrition(newTotals);
  }, [baseItem, proteins, toppings, sauces, sides]);

  const handleSelectBase = (item: MenuItem) => {
    setBaseItem([item]);
  };

  const handleRemoveBase = () => {
    setBaseItem([]);
  };

  const handleSelectProtein = (item: MenuItem) => {
    setProteins(prev => [...prev, item]);
  };

  const handleRemoveProtein = (item: MenuItem) => {
    setProteins(prev => prev.filter(p => p.id !== item.id));
  };

  const handleSelectTopping = (item: MenuItem) => {
    setToppings(prev => [...prev, item]);
  };

  const handleRemoveTopping = (item: MenuItem) => {
    setToppings(prev => prev.filter(t => t.id !== item.id));
  };

  const handleSelectSauce = (item: MenuItem) => {
    setSauces(prev => [...prev, item]);
  };

  const handleRemoveSauce = (item: MenuItem) => {
    setSauces(prev => prev.filter(s => s.id !== item.id));
  };

  const handleSelectSide = (item: MenuItem) => {
    setSides(prev => [...prev, item]);
  };

  const handleRemoveSide = (item: MenuItem) => {
    setSides(prev => prev.filter(s => s.id !== item.id));
  };

  const handleReset = () => {
    setBaseItem([]);
    setProteins([]);
    setToppings([]);
    setSauces([]);
    setSides([]);
    toast("Calculator has been reset", {
      description: "All selections have been cleared",
    });
  };

  return (
    <div className="grid md:grid-cols-5 gap-6 w-full max-w-6xl mx-auto">
      <Card className="md:col-span-3 bg-card/95 backdrop-blur-sm shadow-md overflow-hidden border border-border/50">
        <CardContent className="p-4 md:p-6">
          <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
            <div className="space-y-6">
              <MenuItemSelector
                title="Base Item"
                items={baseItems}
                selectedItems={baseItem}
                onItemSelect={handleSelectBase}
                onItemRemove={handleRemoveBase}
              />
              
              <MenuItemSelector
                title="Proteins"
                items={proteinItems}
                selectedItems={proteins}
                onItemSelect={handleSelectProtein}
                onItemRemove={handleRemoveProtein}
                multiSelect
              />
              
              <MenuItemSelector
                title="Toppings"
                items={toppingItems}
                selectedItems={toppings}
                onItemSelect={handleSelectTopping}
                onItemRemove={handleRemoveTopping}
                multiSelect
              />
              
              <MenuItemSelector
                title="Sauces"
                items={sauceItems}
                selectedItems={sauces}
                onItemSelect={handleSelectSauce}
                onItemRemove={handleRemoveSauce}
                multiSelect
              />
              
              <MenuItemSelector
                title="Sides"
                items={sideItems}
                selectedItems={sides}
                onItemSelect={handleSelectSide}
                onItemRemove={handleRemoveSide}
                multiSelect
              />
              
              <div className="flex justify-center pt-2">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="gap-2 border-muted hover:border-destructive hover:text-destructive transition-colors"
                >
                  <RefreshCw size={18} />
                  Reset Selections
                </Button>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      
      <div className="md:col-span-2 flex flex-col gap-4">
        <NutritionDisplay nutrition={totalNutrition} />
        
        <Card className="bg-card/95 backdrop-blur-sm shadow-md border border-border/50">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-2">Your Order</h3>
            {baseItem.length === 0 && proteins.length === 0 && toppings.length === 0 && 
             sauces.length === 0 && sides.length === 0 ? (
              <p className="text-muted-foreground">Start by selecting items to build your meal</p>
            ) : (
              <ScrollArea className="h-[calc(100vh-22rem)] pr-4">
                <ul className="space-y-2">
                  {baseItem.map((item) => (
                    <li key={item.id} className="font-medium">{item.name}</li>
                  ))}
                  
                  {proteins.length > 0 && (
                    <>
                      <li className="text-sm font-semibold mt-3 text-muted-foreground">Proteins:</li>
                      {proteins.map((item) => (
                        <li key={item.id} className="pl-2 text-sm">• {item.name}</li>
                      ))}
                    </>
                  )}
                  
                  {toppings.length > 0 && (
                    <>
                      <li className="text-sm font-semibold mt-3 text-muted-foreground">Toppings:</li>
                      {toppings.map((item) => (
                        <li key={item.id} className="pl-2 text-sm">• {item.name}</li>
                      ))}
                    </>
                  )}
                  
                  {sauces.length > 0 && (
                    <>
                      <li className="text-sm font-semibold mt-3 text-muted-foreground">Sauces:</li>
                      {sauces.map((item) => (
                        <li key={item.id} className="pl-2 text-sm">• {item.name}</li>
                      ))}
                    </>
                  )}
                  
                  {sides.length > 0 && (
                    <>
                      <li className="text-sm font-semibold mt-3 text-muted-foreground">Sides:</li>
                      {sides.map((item) => (
                        <li key={item.id} className="pl-2 text-sm">• {item.name}</li>
                      ))}
                    </>
                  )}
                </ul>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NutritionCalculator;
