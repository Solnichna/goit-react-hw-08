import { Suspense } from "react";

import { AppBar } from "../appBar/appBar.jsx";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};