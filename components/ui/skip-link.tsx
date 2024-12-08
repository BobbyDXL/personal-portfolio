export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 
                 px-4 py-2 bg-primary text-white rounded-md z-50"
    >
      Skip to main content
    </a>
  );
} 