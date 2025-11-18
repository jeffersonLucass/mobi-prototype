import { Star, MapPin, Clock, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Saved = () => {
  const savedRoutes = [
    {
      id: 1,
      name: "Casa → Trabalho",
      from: "Rua das Flores, 123",
      to: "Av. Paulista, 1000",
      time: "23 min",
      distance: "12.5 km",
      frequency: "Segunda a Sexta",
    },
    {
      id: 2,
      name: "Universidade → Academia",
      from: "Campus Central",
      to: "Smart Fit Vila Olímpia",
      time: "15 min",
      distance: "6.2 km",
      frequency: "Terça e Quinta",
    },
    {
      id: 3,
      name: "Casa → Mercado",
      from: "Rua das Flores, 123",
      to: "Supermercado Extra",
      time: "8 min",
      distance: "2.1 km",
      frequency: "Sábados",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="max-w-md mx-auto px-4 space-y-6 py-4">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-primary fill-primary" />
          <h1 className="text-2xl font-bold text-foreground">Rotas Salvas</h1>
        </div>

        <div className="space-y-4">
          {savedRoutes.map((route) => (
            <Card key={route.id} className="p-4 bg-card border-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <h3 className="font-bold text-foreground">{route.name}</h3>
                </div>
                <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">{route.from}</span>
                </div>
                <div className="flex items-start gap-2 ml-6">
                  <div className="w-0.5 h-4 bg-border"></div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                  <span className="text-sm text-muted-foreground">{route.to}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Badge variant="outline" className="border-accent text-accent">
                  <Clock className="w-3 h-3 mr-1" />
                  {route.time}
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  {route.distance}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{route.frequency}</span>
                <Button size="sm" className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Usar Rota
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Saved;
