import { Clock, MapPin, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RecentRoutes = () => {
  const routes = [
    {
      id: 1,
      from: "Casa",
      to: "Trabalho",
      time: "23 min",
      status: "No horário",
      frequency: "Diário",
    },
    {
      id: 2,
      from: "Centro",
      to: "Universidade",
      time: "31 min",
      status: "Atraso 5min",
      frequency: "Frequente",
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Rotas Frequentes</h2>
        <TrendingUp className="w-5 h-5 text-primary" />
      </div>

      {routes.map((route) => (
        <Card
          key={route.id}
          className="p-4 bg-card border-border hover:bg-muted cursor-pointer transition-colors"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">{route.from}</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <div className="w-0.5 h-4 bg-border"></div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-semibold text-foreground">{route.to}</span>
              </div>
            </div>
            
            <Badge 
              variant="outline" 
              className={route.status.includes("Atraso") ? "border-warning text-warning" : "border-success text-success"}
            >
              {route.status}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{route.time}</span>
            </div>
            <span>•</span>
            <span>{route.frequency}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RecentRoutes;
