import { useState } from "react";
import {
  BarChart3,
  Users,
  GraduationCap,
  Shield,
  Brain,
  BookOpen,
  Smartphone,
  Bell,
  Bus,
  CreditCard,
  FileText,
  Target,
  Activity,
  UserCheck,
  ClipboardList,
  TrendingUp,
  MessageSquare,
  Calendar,
  Heart,
  Trophy,
  MapPin,
  AlertTriangle,
  Video,
  Lightbulb,
  Layers,
} from "lucide-react";

type Role = "admin" | "teacher" | "parent";

const roles: { id: Role; label: string; icon: typeof BarChart3; color: string }[] = [
  { id: "admin", label: "School Admin", icon: Shield, color: "from-primary to-blue-600" },
  { id: "teacher", label: "Teacher Portal", icon: GraduationCap, color: "from-emerald-600 to-teal-500" },
  { id: "parent", label: "Parent Portal", icon: Users, color: "from-gold to-amber-500" },
];

const roleData: Record<
  Role,
  {
    title: string;
    subtitle: string;
    dashboard: { label: string; value: string; icon: typeof BarChart3 }[];
    features: { icon: typeof BarChart3; title: string; items: string[] }[];
  }
> = {
  admin: {
    title: "Super Admin Dashboard",
    subtitle: "Real-time school health monitoring with AI-powered insights",
    dashboard: [
      { label: "Attendance Rate", value: "94%", icon: UserCheck },
      { label: "Today's Absences", value: "12 (3%)", icon: Activity },
      { label: "Pending Fees", value: "₹1,24,500", icon: CreditCard },
      { label: "Teacher Availability", value: "92%", icon: Users },
    ],
    features: [
      {
        icon: Brain,
        title: "AI-Powered Analytics",
        items: [
          "Anomaly detection for sudden attendance drops",
          "Predictive performance trend analysis",
          "Financial forecasting for fee collection",
          "Staff workload optimization algorithms",
          "CBSE/State board compliance tracking",
        ],
      },
      {
        icon: Target,
        title: "360° Student Profile",
        items: [
          "Year-wise academic history tracking",
          "Behavioral tracking (awards & disciplinary)",
          "Health records & vaccination status",
          "Extracurricular portfolio & certificates",
        ],
      },
      {
        icon: ClipboardList,
        title: "Automated Workflows",
        items: [
          "Admission pipeline automation",
          "Class promotion batch processing",
          "TC/LC generation with digital signatures",
          "Bulk SMS/email communication templates",
        ],
      },
      {
        icon: Layers,
        title: "Resource Management",
        items: [
          "Smart classroom allocation",
          "Inventory tracking (labs, library)",
          "Transport route optimization",
          "Staff payroll integration",
        ],
      },
    ],
  },
  teacher: {
    title: "Intelligent Teaching Dashboard",
    subtitle: "Smart classroom tools aligned with CBSE/State board syllabus",
    dashboard: [
      { label: "AI Lesson Planner", value: "Active", icon: BookOpen },
      { label: "Worksheets Generated", value: "128", icon: FileText },
      { label: "Student Heatmaps", value: "Live", icon: TrendingUp },
      { label: "Parent Messages", value: "5 New", icon: MessageSquare },
    ],
    features: [
      {
        icon: Brain,
        title: "Advanced Teaching Tools",
        items: [
          "Auto-generated question papers by difficulty",
          "Plagiarism checker for assignments",
          "Learning gap identification per student",
          "Personalized remedial plan generation",
          "Virtual lab simulations integration",
        ],
      },
      {
        icon: Target,
        title: "Skill-Based Assessment",
        items: [
          "Map questions to specific learning outcomes",
          "Track competency development over time",
          "Generate skill gap analysis reports",
        ],
      },
      {
        icon: Activity,
        title: "Behavioral Analytics",
        items: [
          "In-class participation metrics",
          "Peer interaction analysis",
          "Attention span tracking for younger grades",
        ],
      },
      {
        icon: Calendar,
        title: "Parent Collaboration",
        items: [
          "Scheduled virtual PTM slots",
          "Behavior incident reporting with evidence",
          "Customized improvement suggestions",
        ],
      },
    ],
  },
  parent: {
    title: "360° Child Insights Dashboard",
    subtitle: "Complete visibility into your child's school life, safety & growth",
    dashboard: [
      { label: "Attendance Alert", value: "10:15 AM ✓", icon: Bell },
      { label: "Bus ETA", value: "5 min", icon: Bus },
      { label: "Fee Status", value: "Paid", icon: CreditCard },
      { label: "Next Test", value: "Mar 12", icon: FileText },
    ],
    features: [
      {
        icon: Smartphone,
        title: "Daily Monitoring",
        items: [
          "Digital diary with teacher notes & photos",
          "Health monitor & vaccination reminders",
          "Behavior timeline with incidents log",
          "Achievement wall – digital trophy cabinet",
          "Height/weight growth metrics tracking",
        ],
      },
      {
        icon: AlertTriangle,
        title: "Smart Alerts & Safety",
        items: [
          "Geo-fenced school entry/exit notifications",
          "Emergency SOS broadcast system",
          "Weather-based school closure alerts",
          "Examination stress level monitoring",
        ],
      },
      {
        icon: Lightbulb,
        title: "Academic Partnership",
        items: [
          "Homework submission tracking",
          "Video solutions for difficult problems",
          "Anonymized peer comparison insights",
          "Career guidance based on aptitude",
        ],
      },
      {
        icon: CreditCard,
        title: "Financial Transparency",
        items: [
          "Itemized fee breakdown",
          "One-click online payments",
          "Scholarship application tracking",
          "Transport fee calculator",
        ],
      },
    ],
  },
};

const AdvancedFeaturesSection = () => {
  const [activeRole, setActiveRole] = useState<Role>("admin");
  const data = roleData[activeRole];
  const activeRoleMeta = roles.find((r) => r.id === activeRole)!;

  return (
    <section id="advanced-features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium">Advanced Platform</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Built for Every <span className="text-gradient">Stakeholder</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dedicated dashboards and powerful features for administrators, teachers, and parents
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-heading font-bold text-base transition-all duration-300 border-2 ${
                activeRole === role.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                  : "bg-card text-foreground border-border hover:border-primary/40 hover:shadow-md"
              }`}
            >
              <role.icon className="w-5 h-5" />
              {role.label}
            </button>
          ))}
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {data.dashboard.map((stat, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
            {data.title}
          </h3>
          <p className="text-muted-foreground">{data.subtitle}</p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.features.map((feature, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-foreground">
                  {feature.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {feature.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-bold px-8 py-4 rounded-xl hover:shadow-gold transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Explore All Features – Book a Demo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;
