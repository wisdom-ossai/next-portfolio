"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import logoImg from "/public/wisdom-logo-light.png";
import darkLogoImg from "/public/logo-dark.png";
import Button from "./Button";
import ThemeToggler from "./ThemeToggler";
import Image from "next/image";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full h-20 lg:h-v[12vh] sticky top-0 z-50 bg-white/75 dark:bg-slate-900 border-b border-slate-300 dark:text-white/75 dark:border-slate-700 shadow-sm flex items-center">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            {theme === "light" ? (
              <Image
                height={60}
                className="rounded-lg h-full object-cover"
                src={logoImg}
                alt="logo"
              />
            ) : (
              <Image
                height={60}
                className="rounded-lg h-full object-cover"
                src={darkLogoImg}
                alt="logo"
              />
            )}
          </Link>
        </motion.div>
        <div className="mdl:hidden flex gap-4 text-[13px] items-center">
          <ThemeToggler />

          <div className="w-6 h-6 flex flex-col justify-between items-center text-4xl text-primary dark:text-textGreen cursor-pointer overflow-hidden group">
            <span className="w-full h-[2px] bg-primary dark:bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-primary dark:bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-primary dark:bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          </div>
        </div>
        <div className="hidden mdl:flex gap-4 text-[13px]">
          <Link
            href="#home"
            className="flex items-center gap-1 font-medium hover:text-primary dark:hover:text-textGreen cursor-pointer duration-300 nav-link"
          >
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              Home
            </motion.span>
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-1 font-medium hover:text-primary dark:hover:text-textGreen cursor-pointer duration-300 nav-link"
          >
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              About
            </motion.span>
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-1 font-medium hover:text-primary dark:hover:text-textGreen cursor-pointer duration-300 nav-link"
          >
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Contact
            </motion.span>
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-1 font-medium hover:text-primary dark:hover:text-textGreen cursor-pointer duration-300 nav-link"
          >
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Projects
            </motion.span>
          </Link>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Button variant="bordered" size="sm">
              Resume
            </Button>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.59 }}
          >
            <ThemeToggler />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
