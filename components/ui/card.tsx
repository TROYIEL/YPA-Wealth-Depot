import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="rounded-3xl bg-white shadow-lg p-8 transition hover:-translate-y-2 hover:shadow-xl">
      {children}
    </div>
  );
}