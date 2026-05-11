export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-lg border border-gray-200 dark:border-emerald-800 bg-white dark:bg-background overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 md:p-8 ${className}`}>{children}</div>;
}
