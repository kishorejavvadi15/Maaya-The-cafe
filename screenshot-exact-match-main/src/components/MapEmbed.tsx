import { useEffect, useState } from "react";
import { Navigation } from "lucide-react";
import exterior from "@/assets/cafe-exterior.jpg";
import { SITE } from "@/lib/site";

/**
 * In-app browsers (Instagram/Facebook WebViews) block Google's map iframe
 * with X-Frame-Options, showing "web page not available". There we show a
 * clickable card that opens Google Maps directly instead.
 */
function isInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /Instagram|FBAN|FBAV|FB_IAB|FBIOS|FB4A|TikTok|Musical_ly|Snapchat|Line\//i.test(ua);
}

export function MapEmbed() {
  const [inApp, setInApp] = useState(false);

  useEffect(() => {
    setInApp(isInAppBrowser());
  }, []);

  if (inApp) {
    return (
      <a
        href={SITE.directions}
        target="_blank"
        rel="noreferrer"
        className="group relative block h-full min-h-[420px] w-full overflow-hidden"
        aria-label="Open Maayaa The Cafe in Google Maps"
      >
        <img
          src={exterior}
          alt="Maayaa The Cafe exterior"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-6">
          <p className="eyebrow text-gold">Find Us</p>
          <p className="max-w-md text-sm leading-relaxed text-cream/85">{SITE.address}</p>
          <span className="btn-gold">
            <Navigation className="h-4 w-4" /> Open in Google Maps
          </span>
        </div>
      </a>
    );
  }

  return (
    <iframe
      title="Map to Maayaa The Cafe"
      src={SITE.mapEmbed}
      className="h-full min-h-[420px] w-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
