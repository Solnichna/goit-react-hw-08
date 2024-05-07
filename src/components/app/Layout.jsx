import { Suspense } from "react";

import { AppBar } from "../appBar/AppBar.jsx";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};