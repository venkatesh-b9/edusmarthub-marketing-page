import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "Reduce Administrative Work by 70%",
    "Boost Parent Engagement by 300%",
    "Improve Student Performance with AI Insights",
    "Scale Your School Chain Effortlessly",
  ];

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 opacity-20">
        <Sparkles className="w-8 h-8 text-gold animate-float" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-20">
        <Sparkles className="w-6 h-6 text-primary-foreground animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Trusted by 500+ Schools Across India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            India's First{" "}
            <span className="relative">
              <span className="text-gold">AI-Powered</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 3 100 1 150 3C200 5 250 8 298 6" stroke="hsl(43, 65%, 53%)" strokeWidth="3" strokeLinecap="round" className="opacity-50" />
              </svg>
            </span>
            <br />
            School Management Platform
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Transform Your School with Intelligent Automation, Real-time Analytics & Seamless Communication
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-primary-foreground/10"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/90 text-sm md:text-base text-left">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#demo">
                Schedule a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+919676728330">
                <Phone className="w-5 h-5" />
                +91 96767 28330
              </a>
            </Button>
          </div>

          {/* Limited Slots */}
          <p className="text-primary-foreground/60 text-sm animate-fade-up" style={{ animationDelay: '0.5s' }}>
            ⚡ Limited demo slots available this month
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {[
            { number: "500+", label: "Schools Trust Us" },
            { number: "2L+", label: "Students Managed" },
            { number: "70%", label: "Time Saved" },
            { number: "99.5%", label: "AI Accuracy" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-gold mb-1">
                {stat.number}
              </div>
              <div className="text-primary-foreground/70 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(0, 0%, 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
