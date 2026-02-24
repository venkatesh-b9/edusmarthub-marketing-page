import { Check, Zap, Crown, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      icon: Zap,
      price: "₹700",
      period: "/YEAR",
      description: "Perfect for small schools getting started",
      students: "Up to 1000 students",
      features: [
        "Core features",
        "Timetable management",
        "Basic analytics",
        "Email support",
        "Mobile app access",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      icon: Crown,
      price: "₹1000",
      period: "/YEAR",
      description: "Most popular for growing schools",
      students: "Up to 2000 students",
      features: [
        "All Basic features",
        "AI timetable generator",
        "Advanced analytics",
        "Parent portal",
        "Fee management",
        "Priority support",
        "iOS & Android apps",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Building,
      price: "₹1600",
      period: "/YEAR",
      description: "For school chains and large institutions",
      students: "Unlimited students",
      features: [
        "All Pro features",
        "Multi-school management",
        "Dedicated account manager",
        "Custom development",
        "On-premise option",
        "24/7 support",
        "Data migration",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const guarantees = [
    "30-Day Money-Back Guarantee",
    "No Long-term Contracts",
    "Free Migration from Existing Software",
  ];

  return (
    <section id="pricing" className="py-24 gradient-light relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-semibold">Simple Pricing</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your school. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 border-2 transition-all duration-500 hover-lift ${
                plan.popular
                  ? "border-gold shadow-glow md:scale-105 z-10"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gold to-amber-400 text-gold-foreground text-sm font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-gold">
                    🏆 MOST POPULAR
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  plan.popular ? "bg-gold/20 text-gold" : "bg-primary/10 text-primary"
                }`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {plan.name}
                </h3>
              </div>

              <div className="mb-4">
                <span className="font-heading font-black text-5xl text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-lg">{plan.period}</span>
              </div>

              <p className="text-muted-foreground mb-2">{plan.description}</p>
              <p className="text-primary font-semibold text-sm mb-6 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {plan.students}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-gold/20' : 'bg-primary/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-gold' : 'text-primary'}`} />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "gold" : "outline"}
                size="lg"
                className="w-full group"
                asChild
              >
                <a href="#demo" className="flex items-center gap-2">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap justify-center gap-4">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-card px-5 py-2.5 rounded-full border border-border shadow-sm"
            >
              <Check className="w-4 h-4 text-primary" />
              <span className="text-foreground text-sm font-medium">{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
