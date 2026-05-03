"use client";

import { motion } from "framer-motion";
import content from "@/content.config";

// ── SVG Icons ────────────────────────────────────────────────────────────────

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45a2.78 2.78 0 0 0-1.95 1.97A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.97 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.46z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="black" />
    </svg>
  );
}

function TwitterIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function whatsAppUrl() {
  return `https://wa.me/${content.whatsapp.number}?text=${encodeURIComponent(
    content.whatsapp.message
  )}`;
}

function makeOpenInApp(platform: string, webUrl: string) {
  const schemes: Record<string, (u: string) => string | null> = {
    instagram: (u) => { const m = u.match(/instagram\.com\/([^/?#]+)/); return m ? `instagram://user?username=${m[1]}` : null; },
    youtube:   (u) => { const m = u.match(/youtube\.com\/@([^/?#]+)/);   return m ? `vnd.youtube://www.youtube.com/@${m[1]}` : null; },
    twitter:   (u) => { const m = u.match(/twitter\.com\/([^/?#]+)/);    return m ? `twitter://user?screen_name=${m[1]}` : null; },
    linkedin:  (u) => { const m = u.match(/linkedin\.com\/in\/([^/?#]+)/); return m ? `linkedin://in/${m[1]}` : null; },
  };
  return (e: React.MouseEvent) => {
    e.preventDefault();
    const appUrl = schemes[platform]?.(webUrl);
    if (!appUrl) { window.open(webUrl, "_blank", "noopener,noreferrer"); return; }
    const timer = setTimeout(() => { window.location.href = webUrl; }, 1500);
    document.addEventListener("visibilitychange", function onHide() {
      if (document.hidden) { clearTimeout(timer); document.removeEventListener("visibilitychange", onHide); }
    });
    window.location.href = appUrl;
  };
}

const HEADING = { fontFamily: "var(--font-poppins), Poppins, sans-serif" };
const BODY = { fontFamily: "var(--font-montserrat), Montserrat, sans-serif" };
const GOLD = "#D4AF37";

// ── Main component ───────────────────────────────────────────────────────────

export default function LandingPage() {
  const waUrl = whatsAppUrl();
  const linksDelay = 0.8;

  return (
    <div className="min-h-screen bg-black">
      {/* Ambient background */}
      <div className="ambient-bg" />

      {/* Scrollable page */}
      <div
        className="relative z-10 flex flex-col items-center px-5 pt-12 pb-32"
        style={{ width: "min(480px, 100%)", margin: "0 auto" }}
      >

        {/* ── Profile ── */}
        <motion.div
          className="flex flex-col items-center text-center gap-3 w-full mb-8"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Photo + glow ring */}
          <div
            className="relative flex items-center justify-center mb-2"
            style={{ width: 148, height: 148 }}
          >
            <div
              className="absolute rounded-full glow-ring"
              style={{
                width: 144,
                height: 144,
                border: `2px solid ${GOLD}`,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content.photoPath}
              alt={content.name}
              width={120}
              height={120}
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>

          {/* Name */}
          <h1
            className="text-[1.9rem] font-bold leading-tight tracking-tight"
            style={{ ...HEADING, color: "#FFFFFF" }}
          >
            {content.name}
          </h1>

          {/* Tagline */}
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ ...BODY, color: GOLD }}
          >
            {content.tagline}
          </p>

          {/* Bio */}
          <p
            className="text-sm leading-relaxed max-w-[300px]"
            style={{ ...BODY, color: "#9CA3AF" }}
          >
            {content.bio}
          </p>
        </motion.div>

        {/* ── Links list ── */}
        <div className="w-full flex flex-col gap-3 mb-10">
          {content.links.map((link, i) => (
            <motion.a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-4 px-5 py-5 rounded-2xl"
              style={link.featured ? {
                background: `linear-gradient(135deg, #C9A227 0%, #F0CB52 45%, #C9A227 100%)`,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "transparent",
                textDecoration: "none",
                color: "#000000",
                boxShadow: "0 0 28px rgba(212,175,55,0.3), 0 4px 16px rgba(212,175,55,0.2)",
                touchAction: "pan-y",
                ...BODY,
              } : {
                background: "rgba(255,255,255,0.04)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                textDecoration: "none",
                color: "#FFFFFF",
                touchAction: "pan-y",
                ...BODY,
              }}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: (idx: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, delay: linksDelay + idx * 0.1, ease: "easeOut" },
                }),
              }}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.15, ease: "easeOut" }}
              whileHover={link.featured ? {
                y: -3,
                boxShadow: "0 0 48px rgba(212,175,55,0.55), 0 8px 28px rgba(212,175,55,0.35)",
                transition: { duration: 0.15, ease: "easeOut" },
              } : {
                y: -3,
                borderColor: "rgba(212,175,55,0.35)",
                backgroundColor: "rgba(255,255,255,0.07)",
                boxShadow: "0 8px 32px rgba(212,175,55,0.14)",
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98, transition: { duration: 0.08 } }}
            >
              {/* Icon */}
              <span className="select-none flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{
                  width: 46,
                  height: 46,
                  background: link.featured ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.07)",
                  fontSize: 22,
                }}
              >
                {link.iconPath
                  ? <img src={link.iconPath} alt="" style={{ width: 28, height: 28, objectFit: "contain" }} />
                  : link.icon
                }
              </span>

              {/* Text */}
              <div className="flex flex-col flex-1 gap-0.5">
                <span className="text-[15px] font-semibold leading-snug" style={{ ...HEADING }}>
                  {link.label}
                </span>
                {link.description && (
                  <span className="text-[12px] leading-snug"
                    style={{ color: link.featured ? "rgba(0,0,0,0.6)" : "#6B7280" }}
                  >
                    {link.description}
                  </span>
                )}
              </div>

              {/* Arrow */}
              <span className="text-[18px] flex-shrink-0"
                style={{ color: link.featured ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.25)" }}
              >
                ›
              </span>
            </motion.a>
          ))}
        </div>

        {/* ── Social icons row ── */}
        <motion.div
          className="flex gap-8 items-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: linksDelay + content.links.length * 0.1 + 0.15,
          }}
        >
          {content.social.instagram && (
            <motion.a
              href={content.social.instagram}
              onClick={makeOpenInApp("instagram", content.social.instagram)}
              aria-label="Instagram"
              style={{ color: "#4B5563" }}
              whileHover={{ color: GOLD, scale: 1.18 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <InstagramIcon size={24} />
            </motion.a>
          )}
          {content.social.youtube && (
            <motion.a
              href={content.social.youtube}
              onClick={makeOpenInApp("youtube", content.social.youtube)}
              aria-label="YouTube"
              style={{ color: "#4B5563" }}
              whileHover={{ color: GOLD, scale: 1.18 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <YouTubeIcon size={26} />
            </motion.a>
          )}
          {content.social.twitter && (
            <motion.a
              href={content.social.twitter}
              onClick={makeOpenInApp("twitter", content.social.twitter)}
              aria-label="Twitter / X"
              style={{ color: "#4B5563" }}
              whileHover={{ color: GOLD, scale: 1.18 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <TwitterIcon size={22} />
            </motion.a>
          )}
          {content.social.linkedin && (
            <motion.a
              href={content.social.linkedin}
              onClick={makeOpenInApp("linkedin", content.social.linkedin)}
              aria-label="LinkedIn"
              style={{ color: "#4B5563" }}
              whileHover={{ color: GOLD, scale: 1.18 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <LinkedInIcon size={22} />
            </motion.a>
          )}
          {content.social.email && (
            <motion.a
              href={`mailto:${content.social.email}`}
              aria-label="Email"
              style={{ color: "#4B5563" }}
              whileHover={{ color: GOLD, scale: 1.18 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <EmailIcon size={22} />
            </motion.a>
          )}
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            style={{ color: "#4B5563" }}
            whileHover={{ color: "#25D366", scale: 1.18 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
          >
            <WhatsAppIcon size={24} />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <p
          className="text-[11px]"
          style={{ ...BODY, color: "#374151" }}
        >
          © {new Date().getFullYear()} {content.name}
        </p>
      </div>
    </div>
  );
}
