import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const examples = [
  {
    title: "ArjunWellness Smart Fitness Tracker",
    url: "https://example.com/arjun-fitness-post",
    description: "A successful conversion of a fitness influencer's product post into an Amazon listing, highlighting key features and benefits.",
    stats: {
      views: "1.2M",
      engagement: "4.5%",
      conversionRate: "2.8%"
    }
  },
  {
    title: "Eco-Friendly Water Bottle",
    url: "https://example.com/eco-bottle-post",
    description: "Example of how a sustainable product's social media content was transformed into a compelling Amazon listing.",
    stats: {
      views: "850K",
      engagement: "3.8%",
      conversionRate: "2.2%"
    }
  },
  {
    title: "Vegan Protein Powder",
    url: "https://example.com/vegan-protein-post",
    description: "Demonstration of converting nutrition-focused content into a detailed Amazon product listing with health benefits.",
    stats: {
      views: "980K",
      engagement: "4.2%",
      conversionRate: "3.1%"
    }
  }
];

export default function ExamplesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Success Stories</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore how other creators have successfully converted their social media content into Amazon listings
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{example.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {example.description}
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{example.stats.views}</p>
                  <p className="text-sm text-gray-500">Views</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{example.stats.engagement}</p>
                  <p className="text-sm text-gray-500">Engagement</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{example.stats.conversionRate}</p>
                  <p className="text-sm text-gray-500">Conversion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}