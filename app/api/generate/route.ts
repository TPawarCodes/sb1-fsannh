import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    // Initialize Gemini Pro
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      Analyze this social media post URL: ${url}
      
      Generate a comprehensive Amazon product listing with the following information:
      1. Product Title (max 200 characters)
      2. Key Benefits (5 bullet points)
      3. Product Description (detailed paragraph)
      4. Target Audience
      5. Brand Name
      6. Category
      7. Search Keywords (comma-separated)
      
      Format the response as a JSON object with these exact keys:
      {
        "title": "",
        "benefits": [],
        "description": "",
        "targetAudience": "",
        "brand": "",
        "category": "",
        "keywords": ""
      }
      
      Ensure the content is professional, SEO-friendly, and follows Amazon's style guidelines.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse the JSON response
    const listing = JSON.parse(text);

    return NextResponse.json(listing);
  } catch (error) {
    console.error("Error generating listing:", error);
    return NextResponse.json(
      { error: "Failed to generate listing" },
      { status: 500 }
    );
  }
}