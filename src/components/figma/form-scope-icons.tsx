/** Jednoduché ikony pro výběr rozsahu (krok 1, hook layout) */
export function IconScopeComplete({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M6 14L16 6l10 8v14H6V14z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M13 28v-8h6v8" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

export function IconScopePartial({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M8 26V12l8-6 8 6v14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 26h14M14 18h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconScopeBath({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M6 18c0-4 3.5-7 8-7h4c4.5 0 8 3 8 7v2H6v-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M11 22v4M21 22v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="11" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconScopeKitchen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="6" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 14h4M18 14h4M10 18h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="22" cy="22" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconScopeRooms({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="8" width="9" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="8" width="9" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="20" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
