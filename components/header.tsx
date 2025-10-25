export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">SOA Soda Maker</div>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Products
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
