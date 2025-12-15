import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl glass-strong shadow-glow">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to
            <span className="text-gradient"> Transform</span> Your Digital Presence?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals. Book a free strategy call with our experts today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              View Case Studies
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            No commitment required • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
