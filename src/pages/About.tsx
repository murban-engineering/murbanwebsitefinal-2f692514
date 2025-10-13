import { Award, Target, Eye, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue excellence in every project, ensuring the highest standards of quality and precision.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients and partners to achieve shared goals and deliver exceptional results.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and methodologies to solve complex engineering challenges.",
    },
    {
      icon: Eye,
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical business practices in all we do.",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "ISO 45001:2018 Occupational Health & Safety",
    "LEED Accredited Professionals",
    "PMP Certified Project Managers",
    "Professional Engineer (PE) Licenses",
  ];

  const timeline = [
    { year: "1998", event: "Founded with a vision to transform engineering services" },
    { year: "2005", event: "Expanded operations across the Middle East region" },
    { year: "2012", event: "Achieved ISO certifications and international recognition" },
    { year: "2018", event: "Launched sustainable engineering division" },
    { year: "2023", event: "Completed 500+ major projects with 98% client satisfaction" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            About Murban Engineering
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in">
            Building the future through innovative engineering solutions and unwavering commitment to excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 1998, Murban Engineering has grown from a small team of passionate engineers to a leading engineering consultancy serving clients across the Middle East and beyond.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our journey has been defined by our commitment to delivering exceptional engineering solutions that not only meet but exceed client expectations. With over 500 completed projects and a team of 200+ expert engineers, we continue to push the boundaries of what's possible in engineering.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we stand proud as a trusted partner for organizations seeking innovative, sustainable, and reliable engineering services.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={teamImage}
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in border-border">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver world-class engineering solutions that create lasting value for our clients, while fostering innovation, sustainability, and professional excellence in everything we do.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in border-border">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and innovative engineering partner in the region, recognized for our technical expertise, commitment to quality, and positive impact on communities and the environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-border">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Milestones that shaped our success</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 animate-fade-in">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-muted-foreground">
              Recognized for our commitment to quality and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="animate-scale-in border-border">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
