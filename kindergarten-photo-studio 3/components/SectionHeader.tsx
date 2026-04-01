type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'section-header centered' : 'section-header';

  return (
    <div className={alignmentClass}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
