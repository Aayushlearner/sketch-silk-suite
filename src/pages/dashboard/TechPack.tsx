import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Download, Copy } from "lucide-react";

const TechPack = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">Tech Pack Builder</h1>
          <p className="text-muted-foreground">Production-ready specifications</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2">
          <Plus className="h-4 w-4" />
          New Tech Pack
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="p-6 space-y-4 border-border hover:border-primary/50 transition-all group">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-muted">Draft</span>
            </div>

            <div>
              <h3 className="font-serif font-semibold mb-1">Tech Pack #{i}</h3>
              <p className="text-sm text-muted-foreground">Created 2 days ago</p>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 rounded-lg gap-1">
                <Copy className="h-3 w-3" />
                Duplicate
              </Button>
              <Button variant="outline" size="sm" className="flex-1 rounded-lg gap-1">
                <Download className="h-3 w-3" />
                Export
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TechPack;
