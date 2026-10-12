import { createFileRoute } from "@tanstack/react-router";

import { LegalPolicyPage } from "@/components/site/legal-policy-page";
import legalContent from "@/lib/legal-content.json";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | EcoAligners" },
      {
        name: "description",
        content: "Read the EcoAligners Privacy Policy.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return <LegalPolicyPage title="Privacy Policy" paragraphs={legalContent.privacyPolicy} />;
}
