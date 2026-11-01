import logoImg from '../assets/logo.png';

export const chapterInfo = {
  title: "IEI Student Chapter",
  department: "Department of Information Technology",
  institution: "MGM's College of Engineering, Nanded",
  motto: "“Connecting Minds. Inspiring Innovation. Building Engineers.”",
  session: "2026–2027",
  logo: logoImg,
  leadership: {
    facultyCoordinator: {
      name: "Ms. Jayshree Wadje",
      role: "Faculty Coordinator",
      department: "Dept. of Information Technology",
      initials: "JW"
    },
    president: {
      name: "Parth Bulbule",
      role: "IEI Student Chapter President",
      department: "B.Tech Information Technology",
      phone: "+91 8177942863",
      phoneRaw: "8177942863",
      initials: "PB"
    },
    vicePresident: {
      name: "Surabhi Toshniwal",
      role: "IEI Student Chapter Vice President",
      department: "B.Tech Information Technology",
      initials: "ST"
    },
    email: "iei_it@mgmcen.ac.in"
  }
};

export const mainLinks = [
  {
    id: "whatsapp",
    title: "WhatsApp Community",
    subtitle: "Join our official student chapter group for instant alerts",
    url: "https://chat.whatsapp.com/I9kEutpR8A9AugJvK0Tnzm",
    type: "whatsapp",
    badge: "Active Group",
    color: "from-emerald-500 to-green-600",
    bgHover: "hover:border-emerald-300",
    iconColor: "bg-emerald-600 text-white"
  },
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "Follow event stories, reels, team highlights & announcements",
    url: "https://www.instagram.com/iei_it_mgmcoen?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw==",
    type: "instagram",
    badge: "@iei_it_mgmcoen",
    color: "from-amber-500 via-rose-500 to-purple-600",
    bgHover: "hover:border-pink-300",
    iconColor: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white"
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    subtitle: "Connect with faculty, alumni network, and professional speakers",
    url: "https://www.linkedin.com/in/institute-of-engineers-iei-information-technology",
    type: "linkedin",
    badge: "Professional Network",
    color: "from-blue-600 to-blue-800",
    bgHover: "hover:border-blue-400",
    iconColor: "bg-[#0A66C2] text-white"
  },
  {
    id: "academic-hub",
    title: "Google Drive",
    subtitle: "Academic notes, syllabus, lab manuals & study resources",
    url: "https://drive.google.com/drive/folders/1gVkTTFflCkJhgFyg9FkDR0JEBWWJ_pMm?usp=sharing",
    type: "drive",
    badge: "Study Materials",
    color: "from-amber-500 to-orange-600",
    bgHover: "hover:border-amber-300",
    iconColor: "bg-amber-500 text-white"
  },
  {
    id: "event-registration",
    title: "Event Registration",
    subtitle: "Register for active technical workshops, hackathons & seminars",
    url: "https://chat.whatsapp.com/I9kEutpR8A9AugJvK0Tnzm", // Points to active WhatsApp community for registration
    type: "event",
    badge: "Portal Link",
    color: "from-indigo-600 to-blue-700",
    bgHover: "hover:border-indigo-300",
    iconColor: "bg-indigo-600 text-white"
  },
  {
    id: "official-email",
    title: "Official Email",
    subtitle: "Direct inquiries for partnerships, membership & official correspondence",
    url: "mailto:iei_it@mgmcen.ac.in",
    type: "email",
    badge: "iei_it@mgmcen.ac.in",
    color: "from-blue-500 to-indigo-600",
    bgHover: "hover:border-blue-300",
    iconColor: "bg-blue-600 text-white"
  }
];
