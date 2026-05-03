import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = variant === "link" 
    ? "inline-flex items-center gap-2 transition-all" 
    : "px-10 py-5 text-lg font-medium rounded-full transition-all flex items-center justify-center whitespace-nowrap";
  
  const variants = {
    primary: "bg-violet-700 hover:bg-violet-600 text-white shadow-xl shadow-violet-900/40",
    secondary: "border border-violet-700 text-violet-400 hover:bg-violet-950/50",
    link: "text-violet-400 hover:text-violet-300",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
