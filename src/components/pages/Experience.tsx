import React from "react";
import { Briefcase, Calendar, Download } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Security Researcher (Trainee)",
      company: "Ehackify Cybersecurity Research & Training",
      period: "Jun 2025 – Present",
      location: "On-site",
      summary:
        "Training in offensive security with hands-on VAPT, Burp Suite, web application analysis, exploitation techniques, and cybersecurity research.",
    },
    {
      role: "Cyber Security Student",
      company: "TryHackMe",
      period: "May 2025 – Present",
      location: "Online",
      summary:
        "Practical cybersecurity learning through guided labs and attack simulations. Focused on web security, Linux, privilege escalation, and network exploitation.",
    },
    {
      role: "Cybersecurity Intern",
      company: "EYEQDOTNET Pvt Ltd",
      period: "Feb 2025 – May 2025",
      location: "Mangaluru, Karnataka · On-site",
      summary:
        "Worked on OWASP ZAP scanning, VAPT assessments, report writing, and identifying vulnerabilities across web applications and internal systems.",
    },
    {
      role: "Cyber Forensics Intern",
      company: "Office of the Commissioner of Police, Kochi",
      period: "Jan 2025 – Jan 2025",
      location: "Kochi, Kerala · On-site",
      summary:
        "Assisted in cyber forensic investigations, digital evidence analysis, case documentation, and cybercrime investigation workflows.",
    },
    {
      role: "Cybersecurity Intern",
      company: "SMEClabs",
      period: "Jun 2024 – Jul 2024",
      location: "Kochi, Kerala · On-site",
      summary:
        "Hands-on training in penetration testing and cybersecurity fundamentals, including reconnaissance, exploitation, and Linux security.",
    },
  ];

  // optional inferred tags (keeps design lively) — you can remove or edit these later
  const inferredTech: Record<string, string[]> = {
    "Ehackify Cybersecurity Research & Training": ["VAPT", "Burp Suite", "Exploitation", "Python"],
    TryHackMe: ["Labs", "Linux", "Privilege Esc.", "Web Sec"],
    "EYEQDOTNET Pvt Ltd": ["OWASP ZAP", "VAPT", "Reporting"],
    "Office of the Commissioner of Police, Kochi": ["Forensics", "Evidence Analysis"],
    SMEClabs: ["Recon", "Exploitation", "Linux"],
  };

  const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/6 backdrop-blur-sm border border-white/6">
      {children}
    </span>
  );

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-10">
      <header className="mb-8 flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/10 border border-white/6">
          <Briefcase className="w-6 h-6 text-cyber-cyan" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Experience</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Internships, trainings and hands-on engagements
          </p>
        </div>
      </header>

      <div className="relative">
        {/* vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-green/80 to-transparent" />

        <div className="space-y-8 pl-16">
          {experiences.map((exp, idx) => (
            <article
              key={`${exp.company}-${idx}`}
              className="relative rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/6 p-6 shadow-sm"
            >
              {/* timeline dot */}
              <div className="absolute -left-10 top-6 w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-cyber-green to-cyber-cyan shadow-md">
                <span className="w-2 h-2 rounded-full bg-white/90" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                    <Badge>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
                      </svg>
                      <span>{exp.company}</span>
                    </Badge>

                    <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-right text-muted-foreground">
                  <span className="block">Location</span>
                  <span className="block font-medium mt-1">{exp.location}</span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>

              {/* small tech tags (optional visual flair) */}
              {inferredTech[exp.company] && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {inferredTech[exp.company].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}

          {/* CTA card */}
          <div className="pt-6">
            <div className="rounded-2xl border border-white/6 bg-gradient-to-br from-cyber-navy/10 to-cyber-dark/6 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold">Want more details?</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Download a full CV or view project case studies for each engagement.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href="/assets/Muhammed-Anas-CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6 bg-white/3 hover:bg-white/6"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Download CV</span>
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
