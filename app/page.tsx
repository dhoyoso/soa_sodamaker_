import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to SOA Soda Maker
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our amazing soda makers and create your own refreshing beverages at home.
          </p>
          <div className="pt-4">
            <p className="text-lg">
              Contact us on WhatsApp to place your order! 🥤
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
