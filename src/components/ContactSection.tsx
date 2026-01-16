import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Video, 
  School, 
  FileText,
  MapPin,
  Clock
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    phone: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Immediate Response",
      action: "+91 96767 28330",
      href: "tel:+919676728330",
      color: "bg-primary",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Quick Chat Support",
      action: "Click to Chat",
      href: "https://wa.me/919676728330?text=Hi,%20I'm%20interested%20in%20EduSmartHub%20for%20my%20school",
      color: "bg-[#25D366]",
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Detailed Queries",
      action: "venkatesh999b9@gmail.com",
      href: "mailto:venkatesh999b9@gmail.com",
      color: "bg-secondary",
    },
    {
      icon: Video,
      title: "Video Call",
      subtitle: "Live Demo",
      action: "Schedule Now",
      href: "#demo",
      color: "bg-gold",
    },
    {
      icon: School,
      title: "School Visit",
      subtitle: "On-site Demo",
      action: "Request Visit",
      href: "#demo",
      color: "bg-primary",
    },
    {
      icon: FileText,
      title: "Custom Quote",
      subtitle: "Tailored Pricing",
      action: "Get Quote",
      href: "#demo",
      color: "bg-gold",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message with all form details
    const whatsappMessage = `Hi, I'm interested in EduSmartHub for my school.

*Contact Details:*
👤 Name: ${formData.name}
🏫 School: ${formData.school}
📱 Phone: ${formData.phone}

*Message:*
${formData.message || 'No additional message provided.'}

Please contact me to schedule a demo.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL with your number (919676728330)
    const whatsappUrl = `https://wa.me/919676728330?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
    
    // Optional: Reset form after submission
    setFormData({
      name: "",
      school: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Multiple Ways to <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose your preferred way to reach us. Principals get priority response within 1 hour.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-card border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                {method.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {method.subtitle}
              </p>
              <span className="text-primary font-medium text-sm group-hover:underline">
                {method.action} →
              </span>
            </a>
          ))}
        </div>

        {/* Simple Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-muted rounded-3xl p-8 md:p-10">
            <h3 className="font-heading font-bold text-2xl text-center text-foreground mb-2">
              Send Us a Quick Message
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Principals get priority response within 1 hour
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactName">Your Name</Label>
                  <Input
                    id="contactName"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="contactSchool">School Name</Label>
                  <Input
                    id="contactSchool"
                    placeholder="Enter school name"
                    value={formData.school}
                    onChange={(e) =>
                      setFormData({ ...formData, school: e.target.value })
                    }
                    required
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contactPhone">Phone Number</Label>
                <Input
                  id="contactPhone"
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

              <div>
                <Label htmlFor="contactMessage">Your Message</Label>
                <Textarea
                  id="contactMessage"
                  placeholder="Tell us about your school and what you're looking for..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="mt-1.5"
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
