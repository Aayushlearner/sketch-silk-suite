import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Upload, Grid, List } from "lucide-react";

const Moodboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">Moodboard Studio</h1>
          <p className="text-muted-foreground">Curate your visual inspiration</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2">
            <Plus className="h-4 w-4" />
            New Board
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 pb-4 border-b border-border">
        <Button variant="ghost" size="sm" className="rounded-lg">
          <Grid className="h-4 w-4 mr-2" />
          Grid View
        </Button>
        <Button variant="ghost" size="sm" className="rounded-lg">
          <List className="h-4 w-4 mr-2" />
          List View
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card
            key={i}
            className="group relative aspect-[4/3] overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <p className="font-serif text-lg font-semibold">Collection Board {i}</p>
                <p className="text-sm text-muted-foreground">24 items</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Moodboard;
