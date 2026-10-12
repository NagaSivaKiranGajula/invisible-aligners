import { createFileRoute } from "@tanstack/react-router";

import { LegalPolicyPage } from "@/components/site/legal-policy-page";
import legalContent from "@/lib/legal-content.json";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | EcoAligners" },
      {
        name: "description",
        content: "Read the EcoAligners Terms and Conditions.",
      },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return <LegalPolicyPage title="Terms and Conditions" paragraphs={legalContent.termsAndConditions} />;
}
