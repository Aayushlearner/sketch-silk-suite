import { Link, useLocation } from "react-router-dom";
import { Palette, Sparkles, FileText, Package, Settings, Sparkles as SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Moodboard", href: "/dashboard/moodboard", icon: Palette },
  { name: "Sketch", href: "/dashboard/sketch", icon: Sparkles },
  { name: "Tech Pack", href: "/dashboard/techpack", icon: FileText },
  { name: "Supplier", href: "/dashboard/supplier", icon: Package },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-card/50 backdrop-blur-sm">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2 group">
          <SparklesIcon className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-serif text-xl font-semibold">FashionPro</span>
        </Link>
      </div>

      <nav className="px-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-4 right-4 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <p className="text-sm font-medium mb-1">Upgrade to Studio</p>
        <p className="text-xs text-muted-foreground mb-3">Unlock unlimited AI generation</p>
        <button className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
};
