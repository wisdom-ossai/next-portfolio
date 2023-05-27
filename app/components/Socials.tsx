"use client";
import Icons from "./Icons";

const Socials = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-white/75">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/wisdom-ossai" target="_blank">
          <span className="w-10 h-10 text-xl bg-slate-500 dark:bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <Icons.Github />
          </span>
        </a>
        <a href="https://github.com/wisdom-ossai" target="_blank">
          <span className="w-10 h-10 text-xl bg-slate-500 dark:bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <Icons.Linkedin />
          </span>
        </a>
        <a href="https://github.com/wisdom-ossai" target="_blank">
          <span className="w-10 h-10 text-xl bg-slate-500 dark:bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <Icons.Facebook />
          </span>
        </a>
        <a href="https://github.com/wisdom-ossai" target="_blank">
          <span className="w-10 h-10 text-xl bg-slate-500 dark:bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <Icons.Twitter />
          </span>
        </a>
        <a href="https://github.com/wisdom-ossai" target="_blank">
          <span className="w-10 h-10 text-xl bg-slate-500 dark:bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <Icons.Instagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark inline-flex" />
    </div>
  );
};

export default Socials;
