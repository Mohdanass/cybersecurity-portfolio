'use client';

import { Header, FloatingNav } from '@/components/layout';
import { m } from 'framer-motion';
import { Shield, Zap, Brain, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-navy cyber-bg-animated">
      <Header />
      <FloatingNav />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">

          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">

              {/* Profile Photo */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyber-cyan/30 shadow-neon-cyan bg-gradient-to-br from-cyber-cyan/20 to-cyber-green/20">
                  <NextImage
                    src="/images/about/hacker-pic.png"
                    alt="Cybersecurity avatar"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                <div className="absolute bottom-4 right-4 w-6 h-6 bg-cyber-green rounded-full border-4 border-cyber-dark animate-pulse" />
              </m.div>

              {/* Header Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-teal-dark/50 border border-cyber-cyan/30 rounded-full mb-4">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  <span className="text-sm text-cyber-gray-light font-mono">
                    Cybersecurity Researcher | Offensive & Defensive Security
                  </span>
                </div>

                <h1 className="text-3xl font-bold">
                  About <span className="text-cyber-cyan">Me</span>
                </h1>

                <p className="text-xl text-cyber-gray-light leading-relaxed max-w-2xl md:max-w-none mt-4">
                  I work in both <span className="text-cyber-cyan">Blue Team</span> and <span className="text-cyber-green">Red Team</span> areas — including SOC analysis, 
                  threat detection, ethical hacking, vulnerability testing, and improving security through hands-on labs and research.
                </p>
              </div>
            </div>
          </m.div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">

            {/* Journey Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-2xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-cyber-cyan mb-6">My Journey</h2>

              <div className="space-y-4 text-cyber-gray-light leading-relaxed">
                <p>
                  I started with basics like networking, Linux, and cybersecurity fundamentals. 
                  From there, I explored both SOC defensive skills and offensive ethical hacking techniques.
                </p>

                <p>
                  My goal is to become strong in both sides — analysing attacks and defending them, 
                  as well as learning how attackers think and operate.
                </p>

                <p>
                  I practice daily using hands-on labs, CTFs, vulnerable machines, SIEM tools, and pentesting labs.
                </p>
              </div>
            </m.div>

            {/* Skills Grid */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {/* Defensive Security */}
              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all duration-300">
                <Shield className="text-cyber-cyan mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Defensive Security (Blue Team)</h3>
                <p className="text-cyber-gray leading-relaxed">
                  SOC operations, SIEM tools, log analysis, incident response, threat detection, 
                  monitoring, and malware basics.
                </p>
              </div>

              {/* Analytical Skills */}
              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-green/20 rounded-xl p-6 hover:border-cyber-green/50 transition-all duration-300">
                <Brain className="text-cyber-green mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Analytical Skills</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Understanding attacker patterns, analysing alerts, identifying abnormal behaviour,
                  and troubleshooting issues.
                </p>
              </div>

              {/* Offensive Security */}
              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-orange/20 rounded-xl p-6 hover:border-cyber-orange/50 transition-all duration-300">
                <Zap className="text-cyber-orange mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Offensive Security (Red Team)</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Ethical hacking, vulnerability assessment, Nmap, Burp Suite, Metasploit, privilege escalation,
                  payload testing, and basic exploitation.
                </p>
              </div>

              {/* Threat Hunting */}
              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all duration-300">
                <Target className="text-cyber-cyan mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Threat Hunting</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Searching for suspicious behaviour, analysing logs, learning attacker TTPs,
                  and detecting potential compromises.
                </p>
              </div>
            </m.div>

            {/* CTA Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <Link
                href="/projects"
                className="group p-8 bg-gradient-to-br from-cyber-cyan/10 to-cyber-green/10 border border-cyber-cyan/30 rounded-xl hover:border-cyber-cyan hover:shadow-neon-cyan transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyber-cyan mb-3 group-hover:text-cyber-green transition-colors">
                  View My Projects
                </h3>
                <p className="text-cyber-gray-light mb-4">
                  Explore my cybersecurity labs, tools, and offensive/defensive work.
                </p>
                <div className="inline-flex items-center gap-2 text-cyber-cyan group-hover:gap-4 transition-all">
                  <span className="font-mono">See Projects</span>
                  <ArrowRight size={20} />
                </div>
              </Link>

              <Link
                href="/contact"
                className="group p-8 bg-gradient-to-br from-cyber-green/10 to-cyber-orange/10 border border-cyber-green/30 rounded-xl hover:border-cyber-green hover:shadow-neon-green transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyber-green mb-3 group-hover:text-cyber-cyan transition-colors">
                  Contact Me
                </h3>
                <p className="text-cyber-gray-light mb-4">
                  Reach out for cybersecurity discussions or collaboration.
                </p>
                <div className="inline-flex items-center gap-2 text-cyber-green group-hover:gap-4 transition-all">
                  <span className="font-mono">Contact</span>
                  <ArrowRight size={20} />
                </div>
              </Link>
            </m.div>
          </div>
        </div>
      </section>
    </main>
  );
}

