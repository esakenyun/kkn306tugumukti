"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ActivityRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/activity");
  }, []);

  return null;
}
