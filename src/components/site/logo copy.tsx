export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Tooth outline with a leaf inside */}
      <path
        d="M12 3.2 C7.4 3.2 4.4 6.9 4.4 11 C4.4 15.6 8.8 17.9 12 21.2 C15.2 17.9 19.6 15.6 19.6 11 C19.6 6.9 16.6 3.2 12 3.2 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.4 C14.3 10 15.6 11.6 12.4 16.2 C9.2 11.6 10.4 9.8 12 8.4 Z"
        fill="currentColor"
      />
      <path
        d="M12 9.2 V14"
        stroke="var(--color-lagoon-950)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandLockup({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-7 text-mint" />
      <span className="leading-tight">
        <span className="block text-[0.98rem] font-bold tracking-tight text-bone">
          Invisible Aligners
        </span>
        <span className="mono-label block text-[0.6rem] uppercase tracking-[0.22em]">
          Eco aligners
        </span>
      </span>
    </span>
  );
}