import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="font-bold text-xl">Social2Amazon</span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link href="/convert">
            <Button variant="ghost">Convert</Button>
          </Link>
          <Link href="/examples">
            <Button variant="ghost">Examples</Button>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}