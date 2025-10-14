import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Importance of Regular Tank Inspection in Oil & Gas",
      excerpt: "Discover how routine tank inspections can prevent catastrophic failures and ensure compliance with industry standards.",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Asset Integrity",
    },
    {
      title: "Understanding API 570 Piping Inspection Standards",
      excerpt: "A comprehensive guide to API 570 standards and their critical role in maintaining safe piping systems.",
      date: "2024-03-10",
      readTime: "7 min read",
      category: "Standards & Compliance",
    },
    {
      title: "Advanced NDT Techniques: Phased Array vs Traditional UT",
      excerpt: "Compare the benefits of phased array ultrasonic testing with conventional ultrasonic methods for industrial applications.",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Technology",
    },
    {
      title: "Drone Inspection: The Future of Asset Integrity",
      excerpt: "How UAV technology is revolutionizing inspection processes and improving safety in hazardous environments.",
      date: "2024-02-28",
      readTime: "4 min read",
      category: "Innovation",
    },
    {
      title: "Risk-Based Inspection (RBI) Strategies for Cost Optimization",
      excerpt: "Learn how implementing API 580 RBI can optimize your maintenance budget while maintaining safety standards.",
      date: "2024-02-20",
      readTime: "8 min read",
      category: "Best Practices",
    },
    {
      title: "Corrosion Management in African Climates",
      excerpt: "Specialized approaches to corrosion detection and prevention in tropical and coastal environments.",
      date: "2024-02-15",
      readTime: "5 min read",
      category: "Regional Insights",
    },
  ];

  const categories = ["All", "Asset Integrity", "Standards & Compliance", "Technology", "Innovation", "Best Practices", "Regional Insights"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Insights & Updates
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in">
            Expert perspectives on asset integrity, NDT technology, and industry best practices
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-secondary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights on asset integrity, NDT technology, and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-secondary-foreground/20 bg-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button size="lg" variant="secondary" className="text-lg whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
