import "../globals.css";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";

const kumbh_Sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EventPlanner Pro: Blog",
  description:
    "Explore EventPlanner Pro's blog for the latest insights on event management, industry trends, and expert advice. Stay updated and elevate your event planning skills with each post.",
  metadataBase: new URL("https://event-planner-pro.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  openGraph: {
    title: "EventPlanner Pro: Blog",
    description:
      "Explore EventPlanner Pro's blog for the latest insights on event management, industry trends, and expert advice. Stay updated and elevate your event planning skills with each post.",
    url: "https://event-planner-pro.vercel.app/",
    siteName: "EventPlanner Pro",
    locale: "en_US",
    type: "website",
    images: "/og-image.png",
  },
  category: "marketing",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  robots: {
    googleBot: {
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "EventPlanner Pro",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Event management",
    "Event registration",
    "Ticketing system",
    "Attendee communication",
    "Event analytics",
    "Event planning software",
    "Online ticket sales",
    "Event analysis tools",
    "VIP event access",
    "Event organizer platform",
    "Event feedback tools",
    "Seamless event setup",
    "Tailored event planning",
    "Event capacity management",
    "Event promotion",
    "Multi-zone events",
    "EventPlanner Pro",
    "Professional event toolkit",
    "Dynamic ticket pricing",
    "Event marketing tools",
  ],
  authors: [{ name: "JCVB", url: "https://valeriobarreto.com" }],
  creator: "JCVB",
  publisher: "JCVB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh_Sans.className}>{children}</body>
    </html>
  );
}
