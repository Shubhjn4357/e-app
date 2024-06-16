import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-dvh d-center">
      {children}
    </div>
  );
};

export default AuthLayout;
