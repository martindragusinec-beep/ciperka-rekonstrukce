import { LeadFormProvider } from "../../context/LeadFormContext";
import { SiteHeader } from "./SiteHeader";
import { HeroSection } from "./HeroSection";
import { SpecializationSection } from "./SpecializationSection";
import { RenovationTypesSection } from "./RenovationTypesSection";
import { ClientConcernsSection } from "./ClientConcernsSection";
import { RealizationSection } from "./RealizationSection";
import { MidCtaBanner } from "./MidCtaBanner";
import { ProcessSection } from "./ProcessSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqPreSection } from "./FaqPreSection";
import { FaqAccordionSection } from "./FaqAccordionSection";
import { BottomLeadFormSection } from "./BottomLeadFormSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { SiteFooter } from "./SiteFooter";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <LeadFormProvider>
        <main>
          <HeroSection />
          <SpecializationSection />
          <RenovationTypesSection />
          <BottomLeadFormSection />
          <ClientConcernsSection />
          <RealizationSection />
          <ProcessSection />
          <TestimonialsSection />
          <MidCtaBanner />
          <FaqPreSection />
          <FaqAccordionSection />
          <FinalCtaSection />
        </main>
      </LeadFormProvider>
      <SiteFooter />
    </div>
  );
}
