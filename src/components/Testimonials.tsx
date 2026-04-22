import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface Testimonial {
  company: string;
  text: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      company: "TotalEnergies",
      text: "The level of HSE standards and problem solving is efficient. Their team demonstrates exceptional professionalism.",
      rating: 5,
    },
    {
      company: "TotalEnergies",
      text: "The pipeline inspection provided were thorough, timely and exceeded our expectations. Their use of advanced technology, combined with a highly skilled team, helped us identify critical issues early and avoid costly downtime.",
      rating: 5,
    },
    {
      company: "Bentworth Limited",
      text: "Good time management improved productivity and focus. Project completed as planned with zero incidents.",
      rating: 5,
    },
    {
      company: "TotalEnergies",
      text: "The custom-fabricated working platform delivered by the team was exceptional in both quality and design. It met all our safety standards, was completed on schedule, and integrated seamlessly into our project site.",
      rating: 5,
    },
    {
      company: "SGS",
      text: "The additivation of red dye at the vessels was executed with precision and efficiency. The process met all regulatory requirements and ensured consistent coloration without disrupting operations.",
      rating: 5,
    },
    {
      company: "TotalEnergies",
      text: "The tank cleaning service was carried out with a high level of professionalism, safety, and efficiency. Their attention to detail ensured the tanks were thoroughly cleaned and ready for inspection.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 text-primary">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by industry leaders across Africa for critical infrastructure inspection
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={150}>
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full border-border/40 bg-card/80 backdrop-blur-sm rounded-[1.5rem] overflow-hidden hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                      <CardContent className="p-8 h-full flex flex-col">
                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>

                        {/* Quote */}
                        <div className="relative flex-1 mb-6">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/15" />
                          <p className="text-foreground leading-relaxed pl-4">
                            {testimonial.text}
                          </p>
                        </div>

                        {/* Company */}
                        <div className="flex items-center gap-4 pt-6 border-t border-border/40">
                          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">
                              {testimonial.company.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.company}</p>
                            <p className="text-sm text-muted-foreground">Verified Client</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static translate-y-0 rounded-xl border-border/50 bg-card hover:bg-muted transition-all duration-300" />
                <CarouselNext className="static translate-y-0 rounded-xl border-border/50 bg-card hover:bg-muted transition-all duration-300" />
              </div>
            </Carousel>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;
