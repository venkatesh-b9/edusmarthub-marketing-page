import { Quote, Star, TrendingUp, Clock, Users } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I saved 20 hours per week on administration with EduSmartHub. The AI timetable generator alone is worth the investment.",
      author: "Dr. Priya Sharma",
      role: "Principal, Delhi Public School",
      image: null,
      stats: { metric: "65%", label: "Time Saved" },
    },
    {
      quote: "Parent engagement increased dramatically. We went from 30% to 90% of parents actively using the portal within the first month.",
      author: "Rajesh Kumar",
      role: "Director, ABC International School",
      image: null,
      stats: { metric: "300%", label: "Engagement Increase" },
    },
    {
      quote: "Managing 3 campuses used to be a nightmare. Now I have complete visibility from a single dashboard. Absolutely transformative.",
      author: "Dr. Meera Patel",
      role: "CEO, XYZ Education Group",
      image: null,
      stats: { metric: "3", label: "Campuses Unified" },
    },
  ];

  const caseStudies = [
    {
      school: "ABC International School",
      problem: "Managing 2000+ students across 3 campuses",
      solution: "Centralized AI-powered platform",
      results: [
        { icon: Clock, value: "65%", label: "Reduction in admin time" },
        { icon: Users, value: "90%", label: "Parent satisfaction" },
      ],
    },
    {
      school: "XYZ Public School",
      problem: "Low parent engagement, manual fee collection",
      solution: "Parent portal with payment integration",
      results: [
        { icon: TrendingUp, value: "300%", label: "Increase in parent logins" },
        { icon: Star, value: "100%", label: "Digital payments" },
      ],
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Trusted by <span className="text-gradient">School Leaders</span> Across India
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from principals and administrators who transformed their schools
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border rounded-3xl p-8 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-gold-foreground" />
                </div>
              </div>

              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-heading font-bold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-heading font-bold text-2xl text-gold">
                      {testimonial.stats.metric}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.stats.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-muted rounded-3xl p-8 md:p-10"
            >
              <div className="inline-block bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full mb-4">
                Case Study
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                {study.school}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-destructive font-medium">Challenge: </span>
                  <span className="text-muted-foreground">{study.problem}</span>
                </div>
                <div>
                  <span className="text-primary font-medium">Solution: </span>
                  <span className="text-muted-foreground">{study.solution}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {study.results.map((result, i) => (
                  <div key={i} className="bg-background rounded-xl p-4 text-center">
                    <result.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                    <div className="font-heading font-bold text-2xl text-foreground">
                      {result.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
