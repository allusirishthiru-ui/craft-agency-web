import { CheckCircle, Award, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award-Winning Team",
    description: "Industry-recognized experts with a proven track record of excellence."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A personal account manager and 24/7 support for all your needs."
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "See measurable improvements within the first 90 days of partnership."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Your Success Is
              <span className="text-gradient"> Our Mission</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just run campaigns – we build partnerships. Our data-driven approach ensures every dollar spent drives meaningful results for your business.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Transparent reporting & real-time dashboards",
                "Custom strategies tailored to your industry",
                "No long-term contracts required",
                "Proven ROI with measurable KPIs"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl glass hover:bg-gradient-card transition-all duration-500 hover:shadow-glow flex items-start gap-5"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
