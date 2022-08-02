import React from "react";

export default function PageLayout({ children }) {
  return (
    <main className="flex flex-col gap-6 px-16 py-4 w-full">{children}</main>
  );
}
