import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MessageCircle, Clock, Users, Sparkles, Shield } from "lucide-react";

const DemoSection = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    name: "",
    email: "",
    phone: "",
    studentCount: "",
    features: [] as string[],
  });

  const features = [
    "Timetable Management",
    "Parent Communication",
    "Fee Collection",
    "AI Analytics",
    "Multi-school Management",
    "All Features",
  ];

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hi, I would like to schedule a demo for EduSmartHub.

*School Details:*
🏫 School Name: ${formData.schoolName}
👤 Contact Person: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
👥 Number of Students: ${formData.studentCount}

*Features Interested In:*
${formData.features.length > 0 ? formData.features.map(f => `✓ ${f}`).join('\n') : 'All Features'}

Please schedule a demo at your earliest convenience.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919676728330?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      schoolName: "",
      name: "",
      email: "",
      phone: "",
      studentCount: "",
      features: [],
    });
  };

  return (
    <section id="demo" className="py-24 gradient-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="bg-card rounded-3xl shadow-xl p-8 md:p-10 border border-border relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold to-primary" />
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-3 py-1.5 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-semibold text-gold-foreground">FREE DEMO</span>
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
                See EduSmartHub in Action
              </h2>
              <p className="text-muted-foreground">
                Book your personalized demo and discover how AI can transform your school
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="schoolName">School Name *</Label>
                  <Input
                    id="schoolName"
                    placeholder="Enter school name"
                    value={formData.schoolName}
                    onChange={(e) =>
                      setFormData({ ...formData, schoolName: e.target.value })
                    }
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="name">Your Name & Designation *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Dr. Sharma, Principal"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="studentCount">Number of Students *</Label>
                <Input
                  id="studentCount"
                  placeholder="e.g., 500, 1000, 2000+"
                  value={formData.studentCount}
                  onChange={(e) =>
                    setFormData({ ...formData, studentCount: e.target.value })
                  }
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label className="mb-3 block">Features You're Interested In</Label>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onCheckedChange={() => handleFeatureToggle(feature)}
                      />
                      <label
                        htmlFor={feature}
                        className="text-sm text-foreground cursor-pointer"
                      >
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" variant="gold" size="xl" className="w-full group">
                Schedule My Free Demo
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Button>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Secure</span>
                <span>•</span>
                <span>No spam, ever</span>
                <span>•</span>
                <span>100% Free</span>
              </div>
            </form>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <div className="bg-primary rounded-3xl p-8 text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
              
              <h3 className="font-heading font-bold text-2xl mb-6 relative">
                Get in Touch Directly
              </h3>
              
              <div className="space-y-3 relative">
                <a
                  href="mailto:venkatesh999b9@gmail.com"
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-primary-foreground/15 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-foreground/15 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm opacity-80">venkatesh999b9@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919676728330"
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-primary-foreground/15 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-foreground/15 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm opacity-80">+91 96767 28330</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919676728330?text=Hi,%20I'm%20interested%20in%20EduSmartHub%20for%20my%20school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366]/90 rounded-xl p-4 hover:bg-[#128C7E] transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm opacity-80">Chat Now — Quick Response</div>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm opacity-80 relative">
                <Clock className="w-4 h-4" />
                Response Time: Within 2 hours during business days
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center animate-bounce-gentle">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-heading font-black text-2xl text-foreground">
                    23 Schools
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Already booked demos this week
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "500+", label: "Schools" },
                { value: "2L+", label: "Students" },
                { value: "99.5%", label: "Uptime" },
              ].map((item, i) => (
                <div key={i} className="bg-muted/50 border border-border rounded-xl p-4 text-center">
                  <div className="font-heading font-bold text-lg text-foreground">{item.value}</div>
                  <div className="text-muted-foreground text-xs">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
