import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Sparkles, Play } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "Reduce Administrative Work by 70%",
    "Boost Parent Engagement by 300%",
    "Improve Student Performance with AI Insights",
    "Scale Your School Chain Effortlessly",
  ];

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Floating Sparkles */}
      <div className="absolute top-1/4 right-1/4 opacity-30">
        <Sparkles className="w-8 h-8 text-gold animate-float" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-20">
        <Sparkles className="w-6 h-6 text-primary-foreground animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute top-1/3 left-[15%] opacity-15">
        <Sparkles className="w-5 h-5 text-gold animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 animate-fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
            </span>
            <span className="text-primary-foreground/90 text-sm font-semibold tracking-wide">
              Trusted by 500+ Schools Across India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            India's First{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold">AI-Powered</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 3 100 1 150 3C200 5 250 8 298 6" stroke="hsl(43, 65%, 53%)" strokeWidth="3" strokeLinecap="round" className="opacity-60" />
              </svg>
            </span>
            <br />
            School Management Platform
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Transform Your School with Intelligent Automation, Real-time Analytics & Seamless Communication
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 glass rounded-xl px-4 py-3.5 hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/90 text-sm md:text-base text-left font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group relative overflow-hidden" asChild>
              <a href="#demo">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+919676728330">
                <Phone className="w-5 h-5" />
                +91 96767 28330
              </a>
            </Button>
          </div>

          {/* Limited Slots with urgency */}
          <div className="flex items-center justify-center gap-2 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-primary-foreground/70 text-sm">
              ⚡ Only <span className="text-gold font-bold">7 demo slots</span> left this month
            </span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {[
            { number: "500+", label: "Schools Trust Us" },
            { number: "2L+", label: "Students Managed" },
            { number: "70%", label: "Time Saved" },
            { number: "99.5%", label: "AI Accuracy" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass rounded-2xl py-5 px-3">
              <div className="font-heading font-black text-3xl md:text-4xl text-gold mb-1">
                {stat.number}
              </div>
              <div className="text-primary-foreground/70 text-sm font-medium">
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
