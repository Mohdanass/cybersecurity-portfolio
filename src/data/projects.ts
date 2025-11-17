export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  status: string;
  statusColor: string;
  tags: string[];
  links: ProjectLink;
}

export const projects: Project[] = [
  {
    title: 'Investigator Terminal – OSINT & Recon Toolkit',
    description:
      'Custom-built OSINT and recon automation toolkit with modules for IP lookup, email lookup, phone intelligence, fake ID generator, breach rehashing, and bank lookup. Designed to support red-team reconnaissance and intelligence gathering workflows.',
    image: '/images/projects/investigator-terminal.webp',
    status: 'Active Development',
    statusColor: 'bg-cyber-green',
    tags: ['Python', 'OSINT', 'Recon', 'Automation', 'CLI'],
    links: {
      github: 'https://github.com/Mohdanass',
      demo: 'https://mohdanass.github.io',
    },
  },
  {
    title: 'Web Application Pentesting Lab (DVWA & bWAPP)',
    description:
      'Hands-on offensive security lab covering SQL Injection, XSS, CSRF, authentication bypass, command injection, and insecure file handling. Documented vulnerabilities, exploitation steps, and mitigation techniques using Burp Suite and manual payloads.',
    image: '/images/projects/web-pentesting.webp',
    status: 'Completed',
    statusColor: 'bg-cyber-cyan',
    tags: ['Web Security', 'SQLi', 'XSS', 'Burp Suite', 'Pentesting'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  },
  {
    title: 'SIEM Log Analysis & Detection Engineering Lab',
    description:
      'Blue-team project analyzing SSH brute force, SQLi attempts, XSS payloads, and Windows event logs using Wazuh/Splunk. Built custom detection rules, alerting pipelines, and dashboards for SOC-style monitoring.',
    image: '/images/projects/siem-lab.webp',
    status: 'Active Lab',
    statusColor: 'bg-cyber-green',
    tags: ['SIEM', 'Wazuh', 'Splunk', 'Blue Team', 'Log Analysis', 'Detection Engineering'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  },
  {
    title: 'PCAP Attack Analysis – Full Kill Chain Investigation',
    description:
      'Complete network forensics case examining attacker behavior across scanning, exploitation, reverse shell traffic, credential access, and command execution. Timeline reconstruction performed using Wireshark and manual packet analysis.',
    image: '/images/projects/pcap-analysis.webp',
    status: 'Completed',
    statusColor: 'bg-cyber-cyan',
    tags: ['Wireshark', 'Network Forensics', 'Incident Response', 'Blue Team'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  },
  {
    title: 'Linux & Windows Hardening Project',
    description:
      'System hardening project implementing secure SSH configuration, firewall policies, password rules, service isolation, audit logging, and Sysmon-based monitoring. Mapped defensive controls using MITRE ATT&CK techniques.',
    image: '/images/projects/system-hardening.webp',
    status: 'Completed',
    statusColor: 'bg-cyber-green',
    tags: ['Hardening', 'Blue Team', 'Linux Security', 'Windows Security', 'MITRE ATT&CK'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  },
  {
    title: 'Android Payload & RAT Analysis Lab (AhMyth + FatRat)',
    description:
      'Controlled lab testing of Android RAT payloads to understand C2 communication, network traffic patterns, persistence behavior, and defensive countermeasures. Includes analysis notes and PCAP-based investigation.',
    image: '/images/projects/android-rat.webp',
    status: 'Research',
    statusColor: 'bg-cyber-cyan',
    tags: ['Android Security', 'Red Team', 'Malware Analysis', 'RAT', 'C2'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  },
];
