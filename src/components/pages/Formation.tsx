"use client";
import React from "react";
import { m } from "framer-motion";

/* Small inline SVG icon components to avoid lucide-react import issues.
   These are minimal, accessible, and dependency-free. */
const GraduationCap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden viewBox="0 0 24 24" width="20" height="20" {...props}>
    <path fill="currentColor" d="M12 2L1 7l11 5 9-4.09V13h2V7L12 2z" />
    <path fill="currentColor" d="M11 13v7h2v-7h-2z" />
  </svg>
);

const CertificateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden viewBox="0 0 24 24" width="20" height="20" {...props}>
    <rect x="2" y="3" width="20" height="14" rx="1" ry="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 8h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 11h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="18" cy="18" r="3" fill="currentColor"/>
    <path d="M18 16v2l1 1" stroke="#fff" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function Formation() {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Yenepoya University",
      period: "2022 - 2025",
      summary:
        "Developed strong fundamentals in computer science, networking, operating systems, data structures, programming, and applied information security concepts.",
    },
    {
      degree: "Web Development Program",
      school: "NxtWave",
      period: "2024 - Present",
      summary:
        "Training in modern full-stack development including JavaScript, TypeScript, React, Node.js, and production-grade UI/UX fundamentals.",
    },
    {
      degree: "Advanced Cybersecurity & VAPT Training",
      school: "Ehackify Cybersecurity Research & Training",
      period: "2025 - Present",
      summary:
        "Hands-on offensive security training focused on VAPT, exploitation, OSINT automation, adversary simulation, Android security, and red-team methodologies.",
    },
  ];

    const certifications = [
    {
      name: "Google Cybersecurity Professional Certificate",
      provider: "Google / Coursera",
      year: "2024",
    },
    {
      name: "IBM Cybersecurity Analyst Professional Certificate",
      provider: "IBM / Coursera",
      year: "2024",
    },

    // -----------------------------
    // ⭐ Added Certifications
    // -----------------------------
    {
      name: "CyberSecurity Advanced Certificate",
      provider: "IBM / Coursera",
      year: "2025",
    },
    {
      name: "Practical Approach to CyberSecurity",
      provider: "TCS iON",
      year: "2025",
    },
    {
      name: "Pre Security Learning Path",
      provider: "TryHackMe",
      year: "2025",
    },
    {
      name: "Web Fundamentals Learning Path",
      provider: "TryHackMe",
      year: "2025",
    },
    {
      name: "Access Control Concepts",
      provider: "ISC2 / Coursera",
      year: "2024",
    },
    {
      name: "Network Security",
      provider: "ISC2 / Coursera",
      year: "2024",
    },
  ];

  return (
    <section id="formation" className="py-10 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-6">Formation & Certifications</h2>

      <div className="grid gap-8">
        <div>
          <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
            <GraduationCap /> Education
          </h3>
          <div className="space-y-4">
            {education.map((item, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-4 border rounded-md bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">
                    <GraduationCap />
                  </div>
                  <div>
                    <div className="font-semibold">{item.degree}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.school} • {item.period}
                    </div>
                    <p className="mt-2 text-sm">{item.summary}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
            <CertificateIcon /> Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
                className="p-3 rounded-md bg-white/3 flex items-center gap-3"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded bg-white/6">
                  <CertificateIcon />
                </div>
                <div>
                  <div className="font-medium">{c.name}</div>
                  <div className="text-sm text-muted-foreground">{c.provider} • {c.year}</div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
