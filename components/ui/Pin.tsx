/** סיכת-כוכב זהב — מוטיב הפינה של KAI (הכוכב מהלוגו). */
export function Pin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c.6 4.9 1.1 9.4 12 12-10.9 2.6-11.4 7.1-12 12-.6-4.9-1.1-9.4-12-12C10.9 9.4 11.4 4.9 12 0z" />
    </svg>
  );
}
