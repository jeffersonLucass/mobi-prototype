import { MapPin, Navigation, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RoutePoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: "origin" | "destination" | "stop";
}

const MapView = () => {
  const routePoints: RoutePoint[] = [
    { id: "1", name: "Praça da Sé", lat: -23.5505, lng: -46.6333, type: "origin" },
    { id: "2", name: "Avenida Paulista", lat: -23.5613, lng: -46.6563, type: "stop" },
    { id: "3", name: "Terminal Parque Dom Pedro", lat: -23.5445, lng: -46.6289, type: "destination" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-dark">
      {/* Simulated Map Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      {/* Route Line */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none">
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
        <path
          d="M 100 150 Q 200 200 300 250 T 500 350"
          stroke="url(#routeGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8 4"
          className="animate-pulse"
        />
      </svg>

      {/* Route Points */}
      {routePoints.map((point, index) => (
        <div
          key={point.id}
          className="absolute"
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
        >
          <div className={`relative ${point.type === 'origin' ? 'animate-bounce' : ''}`}>
            <div className={`w-4 h-4 rounded-full ${
              point.type === 'origin' 
                ? 'bg-primary shadow-glow' 
                : point.type === 'destination'
                ? 'bg-secondary shadow-glow'
                : 'bg-accent'
            } border-2 border-background`} />
            {point.type !== 'stop' && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-medium text-foreground bg-card px-2 py-1 rounded-lg shadow-card">
                  {point.name}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Live Bus Marker */}
      <div className="absolute top-[45%] left-[35%] animate-pulse">
        <div className="relative">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-glow">
            <Navigation className="w-4 h-4 text-primary-foreground rotate-45" />
          </div>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-lg p-2 shadow-card whitespace-nowrap">
            <p className="text-xs font-bold text-primary">Linha 715E</p>
            <p className="text-[10px] text-muted-foreground">Chegando em 4 min</p>
          </div>
        </div>
      </div>

      {/* Bottom Info Card */}
      <Card className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-lg border-border p-4 shadow-card">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-foreground">Praça da Sé → Terminal P. Dom Pedro</h3>
            <p className="text-sm text-muted-foreground">Via Av. Paulista • Linha 715E</p>
          </div>
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-foreground font-medium">17min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Navigation className="w-4 h-4 text-accent" />
            <span className="text-foreground font-medium">9.2km</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-warning" />
            <span className="text-foreground font-medium">Médio</span>
          </div>
        </div>

        <Button className="w-full mt-4 bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          Iniciar Rota
        </Button>
      </Card>
    </div>
  );
};

export default MapView;
