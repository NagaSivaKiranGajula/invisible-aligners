import { createFileRoute } from "@tanstack/react-router";

import { LegalPolicyPage } from "@/components/site/legal-policy-page";
import legalContent from "@/lib/legal-content.json";

export const Route = createFileRoute("/cancellation-and-refund-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation and Refund Policy | EcoAligners" },
      {
        name: "description",
        content: "Read the EcoAligners Cancellation and Refund Policy.",
      },
    ],
  }),
  component: CancellationAndRefundPolicyPage,
});

function CancellationAndRefundPolicyPage() {
  return (
    <LegalPolicyPage
      title="Cancellation and Refund Policy"
      paragraphs={legalContent.cancellationAndRefundPolicy}
    />
  );
}
