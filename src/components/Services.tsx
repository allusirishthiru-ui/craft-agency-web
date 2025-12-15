import { Search, MousePointer, Share2, FileText, TrendingUp, Mail } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with our proven SEO strategies that drive organic traffic and visibility."
  },
  {
    icon: MousePointer,
    title: "PPC Advertising",
    description: "Maximize ROI with targeted paid campaigns across Google, Meta, and emerging platforms."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build engaged communities and amplify your brand voice across all social channels."
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Create compelling content that educates, engages, and converts your target audience."
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Data-driven decisions powered by advanced analytics and comprehensive reporting."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email automation campaigns."
  }
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient"> Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your unique business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl glass hover:bg-gradient-card transition-all duration-500 hover:shadow-glow hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
