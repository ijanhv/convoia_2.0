import React from "react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800

  return (
    <div className="h-full flex items-center justify-center relative">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"></div>
      {children}
    </div>
  );
};

export default AuthLayout;
