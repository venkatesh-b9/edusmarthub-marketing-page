import { Check, Zap, Crown, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      icon: Zap,
      price: "₹10,000",
      period: "/month",
      description: "Perfect for small schools getting started",
      students: "Up to 500 students",
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
      price: "₹25,000",
      period: "/month",
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
      price: "Custom",
      period: "",
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
    <section id="pricing" className="py-24 gradient-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your school. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-gold shadow-gold scale-105 z-10"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-gold-foreground text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
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
                <span className="font-heading font-bold text-4xl text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <p className="text-muted-foreground mb-2">{plan.description}</p>
              <p className="text-primary font-medium text-sm mb-6">{plan.students}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-gold' : 'text-primary'}`} />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "gold" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#demo">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap justify-center gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"
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
