import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-border bg-background pt-48 pb-12 px-8 md:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          {/* Company Block */}
          <div className="space-y-8">
            <span className="font-heading font-black text-5xl tracking-tighter text-foreground uppercase italic">
              FAAZ
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              The institutional operating layer for the Saudi enterprise landscape. Built on AI-native logic and regional mastery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-muted-foreground font-black mb-10 uppercase tracking-widest text-[10px]">Architecture</h4>
            <ul className="space-y-6">
              {["Platform4x", "ZATCA Phase 2", "Workforce AI", "ERP Evolution", "Sovereign Engineering"].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all text-xs font-black uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-muted-foreground font-black mb-10 uppercase tracking-widest text-[10px]">Institutional</h4>
            <ul className="space-y-6">
              {["Our Journey", "Success Briefs", "Privacy Policy", "SLA Documents"].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all text-xs font-black uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubs */}
          <div>
            <h4 className="text-muted-foreground font-black mb-10 uppercase tracking-widest text-[10px]">Strategic Hubs</h4>
            <ul className="space-y-6">
              {[
                { city: "Riyadh", region: "Saudi Arabia" },
                { city: "Bangalore", region: "India" }
              ].map((hub, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-black uppercase tracking-widest">{hub.city}, {hub.region}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground/50 text-[10px] uppercase font-black tracking-widest">
            © 2026 FAAZ TECHNOLOGY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-card px-4 py-2 border border-border">
              <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground text-[9px] uppercase tracking-[0.2em] font-black">Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
