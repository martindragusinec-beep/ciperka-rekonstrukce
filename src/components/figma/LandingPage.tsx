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
    <div className="flex min-h-dvh flex-col bg-white">
      <SiteHeader />
      <LeadFormProvider>
        <main className="w-full min-w-0 flex-1">
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
