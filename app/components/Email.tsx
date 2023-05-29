"use client";
import Icons from "./Icons";
const Email = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-white/75">
      <a href="mailto:ossaiwisdom48@gmail.com" className="rotate-90">
        <p className="text-sm tracking-wide text-primary dark:text-textGreen flex items-center gap-4 w-96 font-semibold">
          <Icons.Mail size={16} /> <span>ossaiwisdom48@gmail.com</span>
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex" />
    </div>
  );
};

export default Email;
