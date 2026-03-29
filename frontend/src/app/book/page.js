"use client";

// /book page: users create booking for selected equipment, e.g. /book?e=equipmentId.
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/AppContext";

export default function BookPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const equipmentId = searchParams.get("e") || "";
  const { isAuthenticated, authReady } = useAppContext();

  useEffect(() => {
    if (authReady && !isAuthenticated) {
      toast.error("Login to proceed");
      router.push("/login");
    }
  }, [authReady, isAuthenticated, router]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <h1 className="text-center text-3xl font-bold text-text-primary">
        /book{equipmentId ? `?e=${equipmentId}` : ""}
      </h1>
    </div>
  );
}
