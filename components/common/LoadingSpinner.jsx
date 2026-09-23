"use client";

import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner({ label = "Loading...", className = "" }) {
  return (
    <div className={`loading-spinner ${className}`} role="status" aria-live="polite">
      <LoaderCircle className="loading-spinner-icon" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
