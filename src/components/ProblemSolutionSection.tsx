import { X, Check, ArrowRight } from "lucide-react";

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
    { before: "50 hrs/month on admin", after: "15 hrs/month on admin", improvement: "70% less" },
    { before: "30% parent engagement", after: "85% parent engagement", improvement: "185% increase" },
    { before: "Manual error rate 15%", after: "AI accuracy 99.5%", improvement: "Near perfect" },
  ];

  return (
    <section id="ai-capabilities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            For <span className="text-gradient">School Principals</span> Who Want More
          </h2>
          <p className="text-muted-foreground text-lg">
            Transform administrative headaches into strategic leadership opportunities
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Problems */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-3xl p-8">
            <h3 className="font-heading font-bold text-xl text-destructive mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                <X className="w-4 h-4" />
              </div>
              Problems You Face Daily
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-background rounded-xl p-4"
                >
                  <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-foreground">{item.problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
            <h3 className="font-heading font-bold text-xl text-primary mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              Our AI-Powered Solutions
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-background rounded-xl p-4"
                >
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before/After Metrics */}
        <div className="bg-muted rounded-3xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl text-center text-foreground mb-10">
            Real Results from Real Schools
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-background rounded-2xl p-6 mb-4 relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="text-destructive/60 line-through text-sm mb-2">
                    Before: {metric.before}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <ArrowRight className="w-4 h-4 text-gold animate-pulse" />
                  </div>
                  <div className="text-primary font-bold text-lg">
                    After: {metric.after}
                  </div>
                </div>
                <span className="inline-block bg-gold/20 text-gold-foreground px-4 py-2 rounded-full text-sm font-bold">
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
