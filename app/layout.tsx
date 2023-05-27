import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import { cn } from "./lib/utils";
import AppProviders from "./components/AppProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const metadata = {
  title: "Wisdom Ossai",
  description: "Portfolio of Wisdom Ossai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        montserrat.variable,
        "bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white/75 antialiased font-sans"
      )}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white/75 antialiased">
        <AppProviders>
          <Navbar />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
