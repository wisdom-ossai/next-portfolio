import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import { cn } from "./lib/utils";
import AppProviders from "./components/AppProviders";
import Socials from "./components/Socials";
import Email from "./components/Email";
import AsideWrapper from "./components/AsideWrapper";

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
      <body className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white/75 antialiased">
        <AppProviders>
          <Navbar />
          <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
            <AsideWrapper
              x={-10}
              delay={1.3}
              className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
            >
              <Socials />
            </AsideWrapper>
            <div className="h-[88vh] w-full mx-auto mdl:p-4">{children}</div>
            <AsideWrapper
              x={10}
              delay={1.5}
              className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
            >
              <Email />
            </AsideWrapper>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
