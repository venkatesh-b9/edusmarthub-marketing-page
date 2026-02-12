import { X, Check, ArrowRight, TrendingUp } from "lucide-react";

const ProblemSolutionSection = () => {
  const comparisons = [
    {
      problem: "Manual timetable creation takes days",
      solution: "AI generates perfect timetable in minutes",
    },
    {
      problem: "Parent complaints about lack of communication",
      solution: "Real-time parent portal with instant notifications",
    },
    {
      problem: "No data-driven insights for improvement",
      solution: "Predictive analytics for student performance",
    },
    {
      problem: "Managing multiple campuses is chaotic",
      solution: "Central dashboard for all campuses",
    },
    {
      problem: "Paperwork consumes 40% of staff time",
      solution: "100% digital, paperless operations",
    },
  ];

  const metrics = [
    { before: "50 hrs/month on admin", after: "15 hrs/month on admin", improvement: "70% less", color: "from-primary to-secondary" },
    { before: "30% parent engagement", after: "85% parent engagement", improvement: "185% increase", color: "from-gold to-amber-400" },
    { before: "Manual error rate 15%", after: "AI accuracy 99.5%", improvement: "Near perfect", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <section id="ai-capabilities" className="py-24 bg-background relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-foreground rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold">Proven Results</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            For <span className="text-gradient">School Principals</span> Who Want More
          </h2>
          <p className="text-muted-foreground text-lg">
            Transform administrative headaches into strategic leadership opportunities
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {/* Problems */}
          <div className="bg-destructive/5 border border-destructive/15 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl" />
            <h3 className="font-heading font-bold text-xl text-destructive mb-6 flex items-center gap-3 relative">
              <div className="w-10 h-10 bg-destructive/15 rounded-xl flex items-center justify-center">
                <X className="w-5 h-5" />
              </div>
              Without EduSmartHub
            </h3>
            <div className="space-y-3 relative">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-background/80 rounded-xl p-4 border border-destructive/10 hover:border-destructive/20 transition-colors"
                >
                  <div className="w-6 h-6 bg-destructive/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-foreground">{item.problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-primary/5 border border-primary/15 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <h3 className="font-heading font-bold text-xl text-primary mb-6 flex items-center gap-3 relative">
              <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              With EduSmartHub
            </h3>
            <div className="space-y-3 relative">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-background/80 rounded-xl p-4 border border-primary/10 hover:border-primary/20 transition-colors"
                >
                  <div className="w-6 h-6 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before/After Metrics */}
        <div className="bg-muted/50 border border-border rounded-3xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl text-center text-foreground mb-3">
            Real Results from Real Schools
          </h3>
          <p className="text-muted-foreground text-center mb-10">Measured outcomes after 3 months of using EduSmartHub</p>
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="bg-card rounded-2xl p-6 mb-4 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-destructive/50 line-through text-sm mb-3">
                    {metric.before}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-8 h-[2px] bg-gold" />
                    <ArrowRight className="w-4 h-4 text-gold" />
                    <div className="w-8 h-[2px] bg-gold" />
                  </div>
                  <div className="text-primary font-bold text-lg">
                    {metric.after}
                  </div>
                </div>
                <span className={`inline-block bg-gradient-to-r ${metric.color} text-white px-5 py-2 rounded-full text-sm font-bold shadow-md`}>
                  {metric.improvement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
