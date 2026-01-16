import { Shield, Award, Cloud } from "lucide-react";

const TrustSection = () => {
  const certifications = [
    { icon: Shield, label: "ISO 27001 Certified" },
    { icon: Award, label: "GDPR Compliant" },
    { icon: Cloud, label: "AWS EdStart Partner" },
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-muted rounded-full px-6 py-3"
            >
              <cert.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium text-sm">
                {cert.label}
              </span>
            </div>
          ))}
        </div>

        {/* School Logos */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Trusted by Leading Schools Across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["Delhi Public School", "Kendriya Vidyalaya", "DAV Schools", "Navodaya", "CBSE Schools"].map(
              (school, index) => (
                <div
                  key={index}
                  className="font-heading font-bold text-lg text-foreground/70 hover:text-primary transition-colors"
                >
                  {school}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
