import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import MapView from "@/components/MapView";
import QuickActions from "@/components/QuickActions";
import RecentRoutes from "@/components/RecentRoutes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="max-w-md mx-auto px-4 space-y-6 py-4">
        {/* Map Section */}
        <div className="h-[400px]">
          <MapView />
        </div>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Transporte</h2>
          <QuickActions />
        </section>

        {/* Recent Routes */}
        <section>
          <RecentRoutes />
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
