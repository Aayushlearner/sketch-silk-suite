import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, ExternalLink } from "lucide-react";

const suppliers = [
  { name: "Silk & Co.", location: "Italy", rating: 4.9, specialty: "Luxury Fabrics" },
  { name: "Modern Textiles", location: "Portugal", rating: 4.8, specialty: "Sustainable Materials" },
  { name: "Atelier Manufacturing", location: "France", rating: 4.9, specialty: "Small Batch Production" },
  { name: "Global Sourcing Inc.", location: "India", rating: 4.7, specialty: "Bulk Orders" },
];

const Supplier = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold mb-2">Supplier Network</h1>
        <p className="text-muted-foreground">Connect with verified manufacturers and material suppliers</p>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search suppliers, materials, or locations..."
            className="pl-10 rounded-xl"
          />
        </div>
        <Button variant="outline" className="rounded-xl">Filters</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {suppliers.map((supplier, i) => (
          <Card key={i} className="p-6 space-y-4 border-border hover:border-primary/50 transition-all group">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif font-semibold text-lg mb-1">{supplier.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {supplier.location}
                </div>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span className="text-xs font-medium">{supplier.rating}</span>
              </div>
            </div>

            <p className="text-sm">
              <span className="font-medium">Specialty:</span>{" "}
              <span className="text-muted-foreground">{supplier.specialty}</span>
            </p>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 rounded-lg gap-1">
                View Profile
                <ExternalLink className="h-3 w-3" />
              </Button>
              <Button size="sm" className="flex-1 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Supplier;
