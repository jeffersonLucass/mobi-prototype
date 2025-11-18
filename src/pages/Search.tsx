import { useState } from "react";
import { Search as SearchIcon, MapPin, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Search = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const suggestions = [
    { name: "Praça da Sé", type: "Ponto de ônibus" },
    { name: "Terminal Parque Dom Pedro", type: "Terminal" },
    { name: "Estação Paulista - Metrô", type: "Estação" },
    { name: "Shopping Vila Olímpia", type: "Local" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="max-w-md mx-auto px-4 space-y-6 py-4">
        {/* Search Inputs */}
        <Card className="p-4 bg-card border-border space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <Input
              placeholder="Ponto de partida"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="bg-muted border-0 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <Input
              placeholder="Para onde vai?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-muted border-0 text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            <SearchIcon className="w-4 h-4 mr-2" />
            Buscar Rotas
          </Button>
        </Card>

        {/* Recent Searches */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-bold text-foreground">Buscas Recentes</h2>
          </div>

          <div className="space-y-2">
            {suggestions.map((item, index) => (
              <Card
                key={index}
                className="p-4 bg-card border-border hover:bg-muted cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Search;
