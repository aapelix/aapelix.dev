import { createClient } from "@supabase/supabase-js";

function getNavigatorInfo() {
  return {
    browser: parseBrowser(navigator.userAgent),
    language: navigator.language,
    platform: navigator.platform,
  };
}

async function getIpInfo() {
  const res = await fetch("https://ipapi.co/json/");
  return (await res.json()) as {
    region: string;
    country: string;
  };
}

function parseBrowser(userAgent: string): string {
  const ua = userAgent.toLowerCase();

  if (ua.includes("firefox")) return "firefox";
  if (ua.includes("edg")) return "edge";
  if (ua.includes("chrome") && !ua.includes("edg") && !ua.includes("opr"))
    return "chrome";
  if (ua.includes("safari") && !ua.includes("chrome")) return "safari";
  if (ua.includes("opr") || ua.includes("opera")) return "opera";

  return "unknown";
}

async function getAnalyticsData() {
  const client = getNavigatorInfo();
  const geo = await getIpInfo();

  return {
    ...client,
    region: geo.region,
    country: geo.country,
  };
}

export async function addAnalytics(site: string) {
  if (process.env.NODE_ENV === "production") {
    const supabase = createClient(
      "https://xprvuuvjhnkifotrllrl.supabase.co",
      import.meta.env.VITE_API_KEY,
    );

    const data = await getAnalyticsData();
    await supabase.from("analytics").insert({ ...data, site: site });
  }
}
