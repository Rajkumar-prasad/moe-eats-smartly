
import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Plus, Trash2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MenuItem } from "@/data/menu-items";
import { cn } from "@/lib/utils";

interface MenuItemSelectorProps {
  title: string;
  items: MenuItem[];
  selectedItems: MenuItem[];
  onItemSelect: (item: MenuItem) => void;
  onItemRemove: (item: MenuItem) => void;
  multiSelect?: boolean;
}

const MenuItemSelector = ({
  title,
  items = [], // Ensure items is never undefined
  selectedItems = [], // Ensure selectedItems is never undefined
  onItemSelect,
  onItemRemove,
  multiSelect = false,
}: MenuItemSelectorProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (item: MenuItem) => {
    onItemSelect(item);
    if (!multiSelect) {
      setOpen(false);
    }
  };

  // Safeguard to ensure we're working with arrays
  const safeItems = Array.isArray(items) ? items : [];
  const safeSelectedItems = Array.isArray(selectedItems) ? selectedItems : [];

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium">{title}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between border-input hover:bg-muted/50"
          >
            {safeSelectedItems.length > 0 ? (
              <span className="truncate">
                {multiSelect
                  ? `${safeSelectedItems.length} items selected`
                  : safeSelectedItems[0].name}
              </span>
            ) : (
              <span className="text-muted-foreground">Select {title.toLowerCase()}</span>
            )}
            {open ? (
              <ChevronUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-full min-w-[260px]">
          <Command>
            <CommandInput placeholder={`Search ${title.toLowerCase()}...`} />
            <CommandList>
              <CommandEmpty>No item found.</CommandEmpty>
              <CommandGroup>
                {safeItems.map((item) => {
                  const isSelected = safeSelectedItems.some((selected) => selected.id === item.id);
                  return (
                    <CommandItem
                      key={item.id}
                      value={item.id}
                      onSelect={() => {
                        isSelected ? onItemRemove(item) : handleSelect(item);
                      }}
                    >
                      <div className={cn("mr-2 h-4 w-4 flex items-center justify-center", 
                        isSelected ? "opacity-100" : "opacity-0")}>
                        {isSelected ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </div>
                      {item.name}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {multiSelect && safeSelectedItems.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2 animate-fade-in">
          {safeSelectedItems.map((item) => (
            <Badge
              key={item.id}
              variant="secondary"
              className="pl-2 text-xs gap-1 hover:bg-muted"
            >
              {item.name}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 text-muted-foreground hover:text-foreground p-0"
                onClick={() => onItemRemove(item)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {item.name}</span>
              </Button>
            </Badge>
          ))}
          {safeSelectedItems.length > 1 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-6 text-xs flex gap-1 text-muted-foreground hover:text-destructive"
              onClick={() => safeSelectedItems.forEach((item) => onItemRemove(item))}
            >
              <Trash2 className="h-3 w-3" /> Clear all
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuItemSelector;
