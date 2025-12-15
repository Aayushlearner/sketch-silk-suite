import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Bell, CreditCard, Shield } from "lucide-react";

const Settings = () => {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-semibold">Profile</h2>
            <p className="text-sm text-muted-foreground">Update your personal information</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input placeholder="Sofia" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input placeholder="Chen" className="rounded-xl" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="sofia@example.com" className="rounded-xl" />
          </div>

          <Button className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground">
            Save Changes
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <Bell className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-semibold">Notifications</h2>
            <p className="text-sm text-muted-foreground">Manage your notification preferences</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: "Email notifications", description: "Receive updates via email" },
            { label: "Project updates", description: "Get notified about project changes" },
            { label: "Marketing emails", description: "Receive tips and product updates" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <button className="relative w-11 h-6 rounded-full bg-primary transition-colors">
                <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-background shadow-sm" />
              </button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <CreditCard className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-semibold">Billing</h2>
            <p className="text-sm text-muted-foreground">Manage your subscription and payment methods</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Current Plan: Freelancer</span>
              <span className="text-sm text-muted-foreground">$29/month</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Next billing date: March 1, 2025</p>
            <Button variant="outline" className="rounded-xl">Upgrade Plan</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
