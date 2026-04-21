import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  company: string;
  text: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      company: "TotalEnergies",
      text: "The level of HSE standards and problem solving is effecient",
    },
    {
      company: "TotalEnergies",
      text: "The pipeline inspection provided were thorough, timely and exceeded our expectations. Their use of advanced technology, combined with a highly skilled team, helped us identify critical issues early and avoid costly downtime.",
    },
    {
      company: "Bentworth Limited",
      text: "Good time management improved productivity and focus. Project completed as planned.",
    },
    {
      company: "TotalEnergies",
      text: "The custom-fabricated working platform delivered by the team was exceptional in both quality and design. It met all our safety standards, was completed on schedule, and integrated seamlessly into our project site.",
    },
    {
      company: "SGS",
      text: "The additivation of red dye at the vessels was executed with precision and efficiency. The process met all regulatory requirements, ensured consistent coloration, and did not disrupt our operational timeline. The team's expertise and seamless coordination helped us maintain product integrity and traceability throughout",
    },
    {
      company: "TotalEnergies",
      text: "The tank cleaning service was carried out with a high level of professionalism, safety, and efficiency. The team was well-prepared, adhered strictly to safety protocols, and completed the job ahead of schedule. Their attention to detail ensured the tanks were thoroughly cleaned and ready for inspection",
    },
    {
      company: "TotalEnergies",
      text: "The installation of the submersible pump was handled with exceptional expertise and efficiency. The team demonstrated strong technical knowledge, completed the setup on time, and ensured everything was fully operational before leaving the site.",
    },
    {
      company: "SGS",
      text: "The red dye injection process was executed with precision and full compliance with regulatory standards. The team ensured accurate dosing and zero disruption to our operations. Their technical expertise and commitment to quality made the entire process efficient and reliable.",
    },
    {
      company: "TotalEnergies",
      text: "The level of HSE standards and problem solving is effecient",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Smooth gradient transition from previous section */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Client Stories
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
            Testimonials
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-border/40 bg-card shadow-card rounded-3xl overflow-hidden">
                    <CardContent className="p-10 md:p-14">
                      <Quote className="h-14 w-14 text-primary/30 mb-8" />
                      <p className="text-lg md:text-xl mb-10 leading-relaxed text-card-foreground">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">{testimonial.company.charAt(0)}</span>
                        </div>
                        <div className="font-semibold text-foreground text-lg">
                          {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 border-border/50 bg-card/90 backdrop-blur-sm hover:bg-muted transition-all duration-300" />
            <CarouselNext className="hidden md:flex -right-6 border-border/50 bg-card/90 backdrop-blur-sm hover:bg-muted transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
