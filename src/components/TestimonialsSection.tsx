import { Quote, Star, TrendingUp, Clock, Users, Award } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I saved 20 hours per week on administration with EduSmartHub. The AI timetable generator alone is worth the investment.",
      author: "Dr. Priya Sharma",
      role: "Principal, Quantium Public School",
      image: null,
      stats: { metric: "65%", label: "Time Saved" },
    },
    {
      quote: "Parent engagement increased dramatically. We went from 30% to 90% of parents actively using the portal within the first month.",
      author: "Rajesh Kumar",
      role: "Director, Cambridge International School",
      image: null,
      stats: { metric: "300%", label: "Engagement ↑" },
    },
    {
      quote: "Managing 3 campuses used to be a nightmare. Now I have complete visibility from a single dashboard. Absolutely transformative.",
      author: "Dr. Meera Patel",
      role: "CEO, Pallavi International School",
      image: null,
      stats: { metric: "3", label: "Campuses Unified" },
    },
  ];

  const caseStudies = [
    {
      school: "Quantium Public School",
      problem: "Managing 2000+ students across 3 campuses",
      solution: "Centralized AI-powered platform",
      results: [
        { icon: Clock, value: "65%", label: "Reduction in admin time" },
        { icon: Users, value: "90%", label: "Parent satisfaction" },
      ],
    },
    {
      school: "Cambridge International School",
      problem: "Low parent engagement, manual fee collection",
      solution: "Parent portal with payment integration",
      results: [
        { icon: TrendingUp, value: "300%", label: "Increase in parent logins" },
        { icon: Star, value: "100%", label: "Digital payments" },
      ],
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold-foreground">Success Stories</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Trusted by <span className="text-gradient">School Leaders</span> Across India
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from principals and administrators who transformed their schools
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-3xl p-8 relative hover-lift group"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute -top-4 left-8">
                <div className="w-9 h-9 bg-gold rounded-xl flex items-center justify-center shadow-gold">
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

              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-heading font-bold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="text-right bg-gold/10 rounded-xl px-3 py-2">
                    <div className="font-heading font-black text-xl text-gold">
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
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-muted/50 border border-border rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                📋 Case Study
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                {study.school}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-destructive font-semibold text-sm whitespace-nowrap">❌ Challenge:</span>
                  <span className="text-muted-foreground">{study.problem}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-semibold text-sm whitespace-nowrap">✅ Solution:</span>
                  <span className="text-muted-foreground">{study.solution}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {study.results.map((result, i) => (
                  <div key={i} className="bg-card rounded-2xl p-4 text-center border border-border">
                    <result.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                    <div className="font-heading font-black text-2xl text-foreground">
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
