import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  BrainCircuit, 
  Cloud, 
  Smartphone, 
  Database, 
  LineChart 
} from 'lucide-react';
import alakaria from '@/assets/sevices/alakaria.jpg';
import ambergroup from '@/assets/sevices/ambergroup.jpg';
import arco from '@/assets/sevices/arco.jpg';
import jussur from '@/assets/sevices/jussur.jpg';
import durhospitality from '@/assets/sevices/durhospitality.jpg';
import mavarid from '@/assets/sevices/mavarid.jpg';
import rscm from '@/assets/sevices/rscm.jpg';
import tac from '@/assets/sevices/tac.png';
import techsa from '@/assets/sevices/techsa.jpg';

// Banking Assets
import riyadLogo from '@/assets/banking/riyad.png';
import saibLogo from '@/assets/banking/saib.png';

// Digital Trust
import nafidhLogo from '@/assets/degital-trust/Nafidh.png';
import digitalSigLogo from '@/assets/degital-trust/digitalsig.jpg';

// Identity
import biometricLogo from '@/assets/identity/Biometric.png';
import activeDirLogo from '@/assets/identity/activedir.png';

// Payments
import hyperPayLogo from '@/assets/payments/HyperPay.png';
import sadadLogo from '@/assets/payments/Sadad.png';
import sadadAcctLogo from '@/assets/payments/Sadadacct.png';
import posLogo from '@/assets/payments/pos.png';

// Regulatory
import ajeerLogo from '@/assets/regulatory/ajeer.jpg';
import muqeemLogo from '@/assets/regulatory/muquum.jpg';
import qiwaLogo from '@/assets/regulatory/qiwa.jpg';
import zatcaLogo from '@/assets/regulatory/zatca.jpg';

import { staggerContainer, fadeInUp, springHover } from '../lib/animations';

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ scale: 1.02, y: -10 }}
    className="relative flex flex-col border border-border bg-card rounded-3xl p-10 lg:p-12 group hover:bg-muted hover:border-primary/50 transition-all shadow-xl overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
    
    <div className="w-16 h-16 rounded-2xl border border-border bg-background/50 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-500 relative z-10">
      <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-3xl lg:text-4xl font-heading font-black text-foreground mb-6 group-hover:text-primary transition-colors uppercase tracking-tighter italic relative z-10">{title}</h3>
    <p className="text-muted-foreground text-base leading-relaxed mb-auto pb-10 relative z-10">{desc}</p>
    
    <div className="mt-auto flex items-center gap-4 group-hover:gap-6 transition-all duration-500 relative z-10 w-full">
      <span className="text-xs font-black uppercase tracking-widest text-primary">Service Detail</span>
      <div className="relative flex-1 h-[2px]">
        <div className="absolute inset-0 bg-border" />
        <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
      </div>
    </div>
  </motion.div>
);

const LogoCard = ({ logo, name }: { logo: string; name: string }) => (
  <div className="flex-shrink-0 w-64 h-32 border border-border mx-6 flex items-center justify-center p-10 group hover:border-primary/40 hover:bg-foreground/5 transition-all bg-card/20 overflow-hidden">
    <img 
      src={logo} 
      alt={name} 
      className="max-w-full max-h-full object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
    />
  </div>
);

const IntegrationCard = ({ logo, name, desc }: { logo: string; name: string; desc: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden group hover:bg-muted hover:border-primary/50 transition-all shadow-xl"
    >
      <div className="h-48 flex items-center justify-center p-8 bg-background/50 group-hover:bg-background/80 transition-colors relative" style={{ perspective: 1200 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 z-0" />
        <motion.div 
          animate={{ rotateY: isHovered ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-white rounded-xl w-full h-full p-6 flex items-center justify-center border border-border/30 shadow-[inset_0_4px_20px_rgba(0,0,0,0.1)] relative z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
           <div className="absolute inset-0 flex items-center justify-center p-6" style={{ backfaceVisibility: "hidden" }}>
              <img src={logo} alt={name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
           </div>
           <div className="absolute inset-0 flex items-center justify-center p-6 bg-white rounded-xl" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
              <img src={logo} alt={name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
           </div>
        </motion.div>
      </div>
      <div className="p-8 flex-1 flex flex-col items-center text-center">
        <h5 className="font-heading font-black text-foreground text-xl tracking-tight mb-3 group-hover:text-primary transition-colors">{name}</h5>
        <p className="text-muted-foreground text-xs font-medium leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Development",
      desc: "Bespoke software architecture tailored to your unique operational flow and scalability needs."
    },
    {
      icon: BrainCircuit,
      title: "AI & Automation",
      desc: "Intelligent agentic workflows and RAG-based systems that automate decision-making across the enterprise."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      desc: "Secure, high-availability cloud migration and managed hosting services optimized for enterprise performance."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      desc: "Premium cross-platform mobile experiences that extend your enterprise capabilities to the field."
    },
    {
      icon: Database,
      title: "Data Engineering",
      desc: "Robust data pipelines and warehousing solutions that transform raw information into strategic assets."
    },
    {
      icon: LineChart,
      title: "Digital Strategy",
      desc: "Navigating the digital landscape with expert consulting in digital transformation and architecture."
    }
  ];

  const clientLogos = [
    { name: "Al Akaria", logo: alakaria },
    { name: "Amber Group", logo: ambergroup },
    { name: "ARCO", logo: arco },
    { name: "Jussur", logo: jussur },
    { name: "Dur Hospitality", logo: durhospitality },
    { name: "Mavarid", logo: mavarid },
    { name: "RSCM", logo: rscm },
    { name: "TAC", logo: tac },
    { name: "TechSA", logo: techsa },
  ];
  
  const integrationCategories = [
    {
      title: "Government & Regulatory",
      items: [
        { name: "Muqeem", logo: muqeemLogo, desc: "Iqama & visa status, worker registration, MOI portal" },
        { name: "Ajeer (MOL)", logo: ajeerLogo, desc: "Temp contracts, work permits, Nitaqat compliance" },
        { name: "Qiwa", logo: qiwaLogo, desc: "Employee contracts, HR compliance, MHRSD services" },
        { name: "ZATCA E-Invoice", logo: zatcaLogo, desc: "Wave 2 certified, clearance & reporting mode" }
      ]
    },
    {
      title: "Legal & Digital Trust",
      items: [
        { name: "Digital Signature", logo: digitalSigLogo, desc: "Legally binding doc sig, PKI certificate validation" },
        { name: "Nafidh Sanad", logo: nafidhLogo, desc: "Official document authentication, Notary services" }
      ]
    },
    {
      title: "Payment & Transactions",
      items: [
        { name: "HyperPay", logo: hyperPayLogo, desc: "Online payment gateway, multi-currency processing" },
        { name: "SADAD Payment", logo: sadadLogo, desc: "Bill payment, SADAD network, automated posting" },
        { name: "SADAD Account", logo: sadadAcctLogo, desc: "SADAD auto-re debting, direct bank transfers" },
        { name: "POS Payment", logo: posLogo, desc: "Point-of-sale terminals, reconciliation" }
      ]
    },
    {
      title: "Banking Integrations",
      items: [
        { name: "SAIB Bank", logo: saibLogo, desc: "Salary transfers, account validation, reconciliation" },
        { name: "Riyad Bank", logo: riyadLogo, desc: "Corporate banking API, wire transfers, statements" }
      ]
    },
    {
      title: "Identity, Access & Attendance",
      items: [
        { name: "Biometric", logo: biometricLogo, desc: "Fingerprint & face auth, access control integrations" },
        { name: "Active Directory", logo: activeDirLogo, desc: "SSO, LDAP, Azure AD, RBAC sync, provisioning" }
      ]
    }
  ];

  return (
    <section id="services" className="py-48 relative bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
          <motion.div variants={fadeInUp} className="w-full mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground uppercase tracking-widest mb-6">
              Service Portfolio
            </h3>
            <div className="w-full h-px bg-border mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl font-medium">
              Every engagement is designed around business outcomes and measurable value — no off-the-shelf shortcuts.
            </p>
          </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-48"
        >
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </motion.div>

        {/* Logo Marquees */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-48"
        >
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="mb-12 w-full">
            <h4 className="text-2xl md:text-3xl font-heading font-bold text-foreground uppercase tracking-widest mb-6">Institutional Partners</h4>
            <div className="w-full h-px bg-border mb-12" />
            <div className="flex animate-scroll-left">
              {[...clientLogos, ...clientLogos].map((client, i) => (
                <LogoCard key={i} logo={client.logo} name={client.name} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="pt-40 border-t border-border"
        >
          <motion.div variants={fadeInUp} className="mb-16 w-full">
             <h4 className="text-2xl md:text-3xl font-heading font-bold text-foreground uppercase tracking-widest mb-6">Integration Expertise</h4>
             <div className="w-full h-[2px] bg-border mb-6 relative">
                 <div className="absolute top-0 left-0 h-full w-32 bg-primary" />
             </div>
             <p className="text-muted-foreground max-w-3xl text-lg font-medium">We have hands-on integration experience with Saudi Arabia's leading government portals, payment gateways, banking systems, and identity platforms — delivering seamless, production-grade connectivity across enterprise environments.</p>
          </motion.div>

          <div className="space-y-32">
            {integrationCategories.map((category, index) => (
              <motion.div 
                key={index}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.h5 variants={fadeInUp} className="text-primary font-black text-sm uppercase tracking-widest mb-10 flex items-center gap-4">
                  <span>{category.title}</span>
                  <div className="flex-1 h-px bg-border" />
                </motion.h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item, idx) => (
                    <IntegrationCard key={idx} logo={item.logo} name={item.name} desc={item.desc} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
