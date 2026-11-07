type IconeInstagramProps = { className?: string };

/** Decorativo: quem usa dá o nome acessível ao link. */
export function IconeInstagram({ className }: IconeInstagramProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}
