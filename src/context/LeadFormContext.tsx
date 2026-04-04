import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ApartmentOption, ScopeOption, TimelineOption } from "../data/leadFormOptions";

export const HERO_FORM_ID = "form";

type LeadFormContextValue = {
  step: number;
  setStep: (n: number) => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
  scope: ScopeOption | null;
  setScope: (v: ScopeOption | null) => void;
  apartmentSize: ApartmentOption | null;
  setApartmentSize: (v: ApartmentOption | null) => void;
  timeline: TimelineOption | null;
  setTimeline: (v: TimelineOption | null) => void;
  name: string;
  setName: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  postcode: string;
  setPostcode: (v: string) => void;
  resetAll: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [scope, setScope] = useState<ScopeOption | null>(null);
  const [apartmentSize, setApartmentSize] = useState<ApartmentOption | null>(null);
  const [timeline, setTimeline] = useState<TimelineOption | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");

  const resetAll = useCallback(() => {
    setStep(1);
    setSubmitted(false);
    setScope(null);
    setApartmentSize(null);
    setTimeline(null);
    setName("");
    setPhone("");
    setEmail("");
    setPostcode("");
  }, []);

  const value = useMemo(
    () => ({
      step,
      setStep,
      submitted,
      setSubmitted,
      scope,
      setScope,
      apartmentSize,
      setApartmentSize,
      timeline,
      setTimeline,
      name,
      setName,
      phone,
      setPhone,
      email,
      setEmail,
      postcode,
      setPostcode,
      resetAll,
    }),
    [step, submitted, scope, apartmentSize, timeline, name, phone, email, postcode, resetAll],
  );

  return <LeadFormContext.Provider value={value}>{children}</LeadFormContext.Provider>;
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadForm must be used within LeadFormProvider");
  }
  return ctx;
}
