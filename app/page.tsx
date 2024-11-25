import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Transform Social Media Content into
          <span className="text-primary block">Amazon Product Listings</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Seamlessly convert your social media posts into professional Amazon listings using advanced AI. 
          Perfect for influencers and brands looking to expand their e-commerce presence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/convert">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/examples">
            <Button size="lg" variant="outline" className="gap-2">
              View Examples <Sparkles className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">AI-Powered Conversion</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Leverage Google's Gemini AI to extract and transform content intelligently
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Optimized Listings</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Generate SEO-friendly titles, descriptions, and keywords automatically
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Get Amazon-ready product listings in seconds, not hours
          </p>
        </div>
      </div>
    </div>
  );
}