import { User, Settings, CreditCard, Bell, HelpCircle, LogOut, Crown } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const menuItems = [
    { icon: Settings, label: "Configurações", action: "settings" },
    { icon: Bell, label: "Notificações", action: "notifications" },
    { icon: CreditCard, label: "Pagamentos", action: "payments" },
    { icon: HelpCircle, label: "Ajuda & Suporte", action: "help" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="max-w-md mx-auto px-4 space-y-6 py-4">
        {/* Profile Header */}
        <Card className="p-6 bg-gradient-primary text-primary-foreground">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-16 h-16 border-2 border-primary-foreground">
              <AvatarFallback className="bg-card text-foreground text-xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">João da Silva</h2>
              <p className="text-sm opacity-90">joao.silva@email.com</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-primary-foreground/20">
            <div>
              <p className="text-sm opacity-90">Plano Atual</p>
              <p className="font-bold">MOBI+ Free</p>
            </div>
            <Button size="sm" variant="secondary" className="gap-2">
              <Crown className="w-4 h-4" />
              Upgrade Premium
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 bg-card border-border text-center">
            <p className="text-2xl font-bold text-primary">47</p>
            <p className="text-xs text-muted-foreground">Viagens</p>
          </Card>
          <Card className="p-4 bg-card border-border text-center">
            <p className="text-2xl font-bold text-secondary">142km</p>
            <p className="text-xs text-muted-foreground">Percorridos</p>
          </Card>
          <Card className="p-4 bg-card border-border text-center">
            <p className="text-2xl font-bold text-accent">12h</p>
            <p className="text-xs text-muted-foreground">Economizadas</p>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Card
              key={item.action}
              className="p-4 bg-card border-border hover:bg-muted cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Logout */}
        <Button variant="outline" className="w-full gap-2 border-destructive text-destructive hover:bg-destructive/10">
          <LogOut className="w-4 h-4" />
          Sair da Conta
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
