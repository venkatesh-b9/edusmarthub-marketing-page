import { Mail, Phone, MapPin, Clock, Heart } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Demo", href: "#demo" },
    { label: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "GDPR Compliance", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="mb-6 inline-block">
              <Logo size="md" showText={true} className="text-primary-foreground" />
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              India's Intelligent Education Hub — Transforming schools with AI-powered management solutions.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <span className="text-xs font-semibold">{social.substring(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors inline-flex items-center gap-1 hover:gap-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <a
                  href="mailto:venkatesh999b9@gmail.com"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  venkatesh999b9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <a
                  href="tel:+919676728330"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  +91 96767 28330
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <span className="text-primary-foreground/70 text-sm">
                  Hyderabad, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <span className="text-primary-foreground/70 text-sm">
                  Mon - Sat: 9AM - 6PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 EduSmartHub. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              Made with <Heart className="w-3.5 h-3.5 text-gold fill-gold" /> for Indian Schools
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
