interface Props {
    subtitle: string;
    title: string;
    description?: string;
  }
  
  export default function SectionHeading({
    subtitle,
    title,
    description,
  }: Props) {
    return (
      <div className="max-w-3xl">
        <p className="text-sky-500 font-semibold uppercase tracking-widest">
          {subtitle}
        </p>
  
        <h2 className="mt-3 text-4xl font-black text-slate-900">
          {title}
        </h2>
  
        {description && (
          <p className="mt-5 text-slate-600 leading-8">
            {description}
          </p>
        )}
      </div>
    );
  }