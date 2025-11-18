import { Bus, Train, Bike, Car } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuickActions = () => {
  const actions = [
    { icon: Bus, label: "Ônibus", color: "primary" },
    { icon: Train, label: "Metrô", color: "accent" },
    { icon: Bike, label: "Bike", color: "secondary" },
    { icon: Car, label: "Carona", color: "warning" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map((action) => (
        <Card
          key={action.label}
          className="p-4 bg-card border-border hover:bg-muted cursor-pointer transition-all hover:scale-105 flex flex-col items-center gap-2"
        >
          <div className={`w-12 h-12 rounded-full bg-${action.color}/10 flex items-center justify-center`}>
            <action.icon className={`w-6 h-6 text-${action.color}`} />
          </div>
          <span className="text-xs font-medium text-foreground">{action.label}</span>
        </Card>
      ))}
    </div>
  );
};

export default QuickActions;
