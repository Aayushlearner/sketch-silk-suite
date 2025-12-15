import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";

export const DashboardHeader = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 border-b border-border bg-background/80 backdrop-blur-md z-40">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-xl font-serif font-semibold">Dashboard</h1>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button variant="ghost" size="icon" className="rounded-xl relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          </Button>

          <Button variant="ghost" className="gap-2 rounded-xl">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary/10 text-primary">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Designer</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
