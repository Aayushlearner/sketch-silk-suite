import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Download, Copy } from "lucide-react";

const Sketch = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold mb-2">AI Sketch Generator</h1>
        <p className="text-muted-foreground">Transform your ideas into visual concepts</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Describe your design</label>
            <Textarea
              placeholder="E.g., 'Evening gown with flowing silk, empire waist, floor-length, in midnight blue with silver embroidery...'"
              className="min-h-[200px] rounded-xl resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium mb-2 block">Style</label>
              <select className="w-full px-3 py-2 rounded-lg border border-input bg-background">
                <option>Editorial</option>
                <option>Technical</option>
                <option>Artistic</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Detail Level</label>
              <select className="w-full px-3 py-2 rounded-lg border border-input bg-background">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-11 gap-2">
            <Sparkles className="h-4 w-4" />
            Generate Sketch
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            15 AI generations remaining this month
          </p>
        </Card>

        <Card className="p-6">
          <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-4">
            <div className="text-center space-y-2">
              <Sparkles className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground">Your generated sketch will appear here</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 rounded-xl gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" className="flex-1 rounded-xl gap-2">
              <Copy className="h-4 w-4" />
              Save to Board
            </Button>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-serif font-semibold mb-4">Recent Generations</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="group aspect-[3/4] overflow-hidden border-border hover:border-primary/50 transition-all cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sketch;
