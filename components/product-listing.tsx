import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ProductListingProps {
  listing: {
    title: string;
    benefits: string[];
    description: string;
    targetAudience: string;
    brand: string;
    category: string;
    keywords: string;
  };
}

export default function ProductListing({ listing }: ProductListingProps) {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Generated Product Listing</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="raw">Raw Data</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">{listing.title}</h2>
              <p className="text-sm text-gray-500 mt-1">By {listing.brand}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Key Benefits</h3>
              <ul className="list-disc pl-5 space-y-1">
                {listing.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-700 dark:text-gray-300">{listing.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Target Audience</h3>
              <p className="text-gray-700 dark:text-gray-300">{listing.targetAudience}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Category</h3>
              <Badge>{listing.category}</Badge>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Search Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {listing.keywords.split(",").map((keyword, index) => (
                  <Badge key={index} variant="secondary">
                    {keyword.trim()}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="raw">
            <pre className="bg-muted p-4 rounded-lg overflow-auto">
              {JSON.stringify(listing, null, 2)}
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}