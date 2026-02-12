import { Shield, Award, Cloud, GraduationCap } from "lucide-react";

const TrustSection = () => {
  const certifications = [
    { icon: Shield, label: "ISO 27001 Certified" },
    { icon: Award, label: "GDPR Compliant" },
    { icon: Cloud, label: "AWS EdStart Partner" },
    { icon: GraduationCap, label: "CBSE Approved" },
  ];

  const schools = [
    "Delhi Public School", "Kendriya Vidyalaya", "DAV Schools", 
    "Navodaya Vidyalaya", "CBSE Schools", "State Board Schools",
    "Delhi Public School", "Kendriya Vidyalaya", "DAV Schools", 
    "Navodaya Vidyalaya", "CBSE Schools", "State Board Schools",
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-muted hover:bg-accent rounded-full px-5 py-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <cert.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-semibold text-sm">
                {cert.label}
              </span>
            </div>
          ))}
        </div>

        {/* Marquee School Logos */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-semibold mb-8">
            Trusted by Leading Schools Across India
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee">
            {schools.map((school, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 font-heading font-bold text-lg text-foreground/30 hover:text-primary transition-colors whitespace-nowrap"
              >
                {school}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
