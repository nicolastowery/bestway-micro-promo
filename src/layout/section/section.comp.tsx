type SectionProps = {
  children: React.ReactNode;
  id: string;
  className: string;
};

export default function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`h-[calc(100vh-75px)] scroll-mt-[75px] ${className}`}
    >
      {children}
    </section>
  );
}
