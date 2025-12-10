import { ReactNode } from "react";

export function Section({
  title,
  subtitle,
  children,
  icon,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-start gap-3">
        {icon && <div className="mt-1 text-purple-600">{icon}</div>}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        {children}
      </div>
    </section>
  );
}
