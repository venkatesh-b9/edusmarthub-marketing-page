import { 
  Bot, 
  BarChart3, 
  Users, 
  Smartphone, 
  Shield, 
  Building2,
  Zap,
  Clock
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Timetable Generator",
      description: "Auto-optimized scheduling that eliminates conflicts and maximizes resource utilization",
      highlight: true,
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Predictive insights to identify at-risk students and optimize school performance",
      highlight: false,
    },
    {
      icon: Users,
      title: "Parent Engagement Portal",
      description: "Real-time communication with instant notifications, homework updates & progress reports",
      highlight: false,
    },
    {
      icon: Smartphone,
      title: "Mobile First Design",
      description: "Beautiful iOS & Android apps for teachers, parents, and administrators",
      highlight: false,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption with role-based access control and audit trails",
      highlight: false,
    },
    {
      icon: Building2,
      title: "Multi-School Management",
      description: "Centralized dashboard to manage unlimited campuses from one place",
      highlight: true,
    },
  ];

  return (
    <section id="features" className="py-24 gradient-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Everything Your School Needs,{" "}
            <span className="text-gradient">Powered by AI</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive tools designed specifically for Indian schools, with intelligent automation at every step
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                feature.highlight
                  ? "border-gold/30 bg-gradient-to-br from-gold/5 to-transparent"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {feature.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gold text-gold-foreground text-xs font-bold px-3 py-1 rounded-full">
                    AI POWERED
                  </span>
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                feature.highlight 
                  ? "bg-gold/20 text-gold" 
                  : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
              }`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Time Savings Highlight */}
        <div className="mt-16 bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-gold-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-2">
                  Save 20+ Hours Every Month
                </h3>
                <p className="text-primary-foreground/80">
                  Our AI automates routine tasks so you can focus on what matters - education
                </p>
              </div>
            </div>
            <a
              href="#demo"
              className="flex-shrink-0 bg-gold text-gold-foreground font-bold px-8 py-4 rounded-xl hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
            >
              See It In Action →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
