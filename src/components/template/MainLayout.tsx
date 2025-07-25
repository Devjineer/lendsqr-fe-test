import type { ReactNode } from "react";
import Header from "../common/Header";

const MainLayout = ({ children }: {children: ReactNode}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
