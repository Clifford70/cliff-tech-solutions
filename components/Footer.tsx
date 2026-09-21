import {
  MessageCircle,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/2348038056237?text=Hello%20Cliff-Tech%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project.",
    icon: "whatsapp",
  },
  {
    name: "GitHub",
    href: "#",
    icon: "github",
  },
  {
    name: "Facebook",
    href: "#",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "#",
    icon: "instagram",
  },
  {
    name: "Email",
    href: "mailto:cliftechsolution@gamil.com",
    icon: "email",
  },
];

function SocialIcon({ type }: { type: string }) {
  if (type === "whatsapp") {
    return <MessageCircle size={20} strokeWidth={1.8} />;
  }

  if (type === "email") {
    return <Mail size={20} strokeWidth={1.8} />;
  }

  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.77 1.07.77 2.16v3.2c0 .31.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.3-.04-1.32-.13-2.51-.13-2.48 0-4.18 1.51-4.18 4.29V10H7.2v3h2.8v8h3.5Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  return null;
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071A33] text-white">

      <div className="container-custom py-14">

        <div className="grid gap-10 md:grid-cols-2">

          {/* Company Information */}
          <div>
            <p className="text-xl font-bold tracking-tight">
              Cliff-Tech Solutions Ltd
            </p>

            <p className="mt-3 max-w-md text-sm leading-7 text-gray-300">
              Technology solutions, software development and digital
              experiences by Ojeifo Sunday Clifford.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:text-center">

            <p className="text-sm font-semibold text-white">
              Connect with me
            </p>

            <div className="mt-5 flex flex-wrap gap-3 md:justify-center">

              {socialLinks.map((social) => (

                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#071A33]"
                >
                  <SocialIcon type={social.icon} />
                </a>

              ))}

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col justify-center gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Cliff-Tech Solutions Ltd.
            All rights reserved.
          </p>

        

        </div>

      </div>

    </footer>
  );
}