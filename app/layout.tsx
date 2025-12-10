import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Agentic Content Generation System",
  description:
    "Modular multi-agent pipeline producing JSON pages for product data"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-br from-slate-50 via-white to-purple-50/30 text-slate-900 antialiased">
        <div className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}

