interface Props {
  title: string;
  content: string;
  icon: React.ReactNode; // <-- new prop for Iconify icon
}

export default function Card({ title, content, icon }: Props) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 shadow-[0_0_25px_-10px_rgba(255,255,255,0.15)]">
      {/* ICON */}
      <div className="text-amber-50 w-20 h-20 mb-6 flex items-center justify-center text-6xl">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-amber-50 tracking-tight mb-3">
        {title}
      </h3>

      {/* CONTENT */}
      <p className="text-amber-50/80 text-base leading-relaxed">{content}</p>
    </div>
  );
}
