import React from "react"
import { GlassCard } from "@/components/ui/glass-card"

export const DocsSection: React.FC = () => (
  <div className="flex flex-col items-center py-16">
    <GlassCard className="max-w-2xl w-full text-left">
      <h2 className="text-2xl font-bold mb-4">Corporate Profile</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Innovative IT solutions provider</li>
        <li>Expertise in software development, cloud, and AI</li>
        <li>Client-focused, quality-driven approach</li>
        <li>Comprehensive support and consulting</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Key Services</h3>
      <ul className="list-disc pl-6">
        <li>Custom Software Development</li>
        <li>Cloud Migration & Management</li>
        <li>AI & Data Analytics</li>
        <li>IT Consulting & Support</li>
      </ul>
    </GlassCard>
  </div>
)
