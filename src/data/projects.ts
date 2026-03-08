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
    title: 'AI Integrated VAPT MCP Server',
    description:
      'AI-assisted Vulnerability Assessment and Penetration Testing (VAPT) automation server that integrates reconnaissance tools, vulnerability scanners, and AI analysis to prioritize security findings and generate structured pentesting reports.',
    image: '/images/projects/ai-vapt-server.webp',
    status: 'Research & Development',
    statusColor: 'bg-cyber-green',
    tags: ['AI Security', 'VAPT','Java', 'Automation', 'Python', 'Security Research'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  },

  {
    title: 'Active Directory Attack & Defense Lab',
    description:
      'Enterprise Active Directory security lab built to study red team and blue team techniques including Kerberoasting, AS-REP Roasting, Pass-the-Hash attacks, privilege escalation, lateral movement and defensive monitoring mapped to MITRE ATT&CK.',
    image: '/images/projects/active-directory.webp',
    status: 'Active Lab',
    statusColor: 'bg-cyber-cyan',
    tags: ['Active Directory', 'Red Team', 'Blue Team', 'Kerberos', 'MITRE ATT&CK'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  },

  {
    title: 'AI Malware Sentinel – Android Malware Detection',
    description:
      'Android malware detection platform using static analysis and machine learning techniques. APK reverse engineering performed with Androguard and a Random Forest model implemented to classify suspicious application behavior.',
    image: '/images/projects/ai-malware.webp',
    status: 'Completed',
    statusColor: 'bg-cyber-green',
    tags: ['Android Security', 'Malware Analysis', 'Machine Learning', 'Static Analysis'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  },

  {
    title: 'Network Intrusion Detection System (Snort)',
    description:
      'Designed and configured a Snort-based intrusion detection system to monitor malicious traffic and detect scanning activity, brute force attempts, malware indicators and command-and-control communication.',
    image: '/images/projects/snort-ids.webp',
    status: 'Completed',
    statusColor: 'bg-cyber-cyan',
    tags: ['Snort', 'IDS', 'Network Security', 'Detection Engineering'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  },

  {
    title: 'Command and Control Traffic Analysis (Sliver)',
    description:
      'Analyzed command-and-control communication patterns to identify recurring beaconing behavior and suspicious outbound traffic during simulated attack scenarios using packet inspection and network traffic analysis.',
    image: '/images/projects/c2-analysis.webp',
    status: 'Completed',
    statusColor: 'bg-cyber-green',
    tags: ['C2 Analysis', 'Threat Detection', 'Network Forensics', 'Red Team'],
    links: {
      github: 'https://github.com/Mohdanass',
    },
  }
];
