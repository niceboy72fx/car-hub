"use client";

import { useSelector } from "react-redux";

export function ShowToast({ children }: { children: React.ReactNode }) {
  const open = useSelector((state) => state?.setToastWindows?.open);
  return <div>{open ? children : null}</div>;
}
