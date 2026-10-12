type LegalPolicyPageProps = {
  title: string;
  paragraphs: string[];
};

function isSectionHeading(paragraph: string) {
  const isNumberedSection = /^\d+\.\s/.test(paragraph);
  const isShortStandaloneHeading =
    paragraph.length <= 80 && !/[.!?]$/.test(paragraph) && !/^\d+\.\d+/.test(paragraph);

  return isNumberedSection || isShortStandaloneHeading;
}

export function LegalPolicyPage({ title, paragraphs }: LegalPolicyPageProps) {
  return (
    <main className="bg-lagoon-950">
      <section className="relative overflow-hidden border-b hairline pt-32 pb-14 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-8rem] h-96 w-96 rounded-full bg-mint/5 blur-3xl"
        />
        <div className="shell relative">
          <p className="eyebrow">Policies &amp; information</p>
          <h1 className="display-1 mt-5 max-w-4xl">{title}</h1>
          <div className="mt-8 h-px w-28 bg-gradient-to-r from-mint to-transparent" />
        </div>
      </section>

      <section className="bg-lagoon-950 py-10 md:py-16">
        <article className="shell max-w-5xl">
          <div className="rounded-3xl border hairline bg-lagoon-900/70 px-6 py-8 shadow-2xl shadow-black/10 sm:px-10 sm:py-12 md:px-14 md:py-16">
            <div className="mb-9 flex items-center gap-3 border-b hairline pb-5">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-mint" />
              <p className="mono-label uppercase tracking-[0.16em]">{title}</p>
            </div>
            <div className="space-y-7">
              {paragraphs.map((paragraph, index) =>
                isSectionHeading(paragraph) ? (
                  <h2
                    key={`${index}-${paragraph.slice(0, 24)}`}
                    className="border-l-2 border-mint/70 pl-4 pt-2 text-xl font-semibold leading-snug text-bone sm:text-2xl"
                  >
                    {paragraph}
                  </h2>
                ) : (
                  <p
                    key={`${index}-${paragraph.slice(0, 24)}`}
                    className="body-md break-words text-fog"
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
