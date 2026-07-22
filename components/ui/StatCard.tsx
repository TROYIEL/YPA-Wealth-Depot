interface Props {
    number: string;
    label: string;
  }
  
  export default function StatCard({
    number,
    label,
  }: Props) {
    return (
      <div className="rounded-3xl bg-white shadow-lg p-6 text-center">
        <h3 className="text-4xl font-black text-sky-500">
          {number}
        </h3>
  
        <p className="mt-2 text-slate-600">{label}</p>
      </div>
    );
  }