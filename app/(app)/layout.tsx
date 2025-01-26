"use client";

import React, { Suspense } from "react";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lavender-light/20 to-white">
      <Sidebar />
      <div className="md:pl-64">
        <main className="p-8">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-pulse text-brand-text-secondary">
                  Loading...
                </div>
              </div>
            }
          >
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  );
}
