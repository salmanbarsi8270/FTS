import React from "react"

export const GlassCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <div
    className={`backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-xl shadow-lg border border-white/30 dark:border-black/30 p-6 ${className}`}
    style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", border: "1px solid rgba(255,255,255,0.18)" }}
  >
    {children}
  </div>
)
