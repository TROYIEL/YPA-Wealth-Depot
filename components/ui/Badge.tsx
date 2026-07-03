interface Props {
    text: string;
  }
  
  export default function Badge({ text }: Props) {
    return (
      <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
        {text}
      </span>
    );
  }