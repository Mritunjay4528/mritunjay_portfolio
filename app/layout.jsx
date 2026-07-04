import "./globals.css";
import { profile } from "@/lib/data";

export const metadata = {
  metadataBase: new URL("https://mritunjay-devhq.vercel.app"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "Mritunjay Kumar Mandal",
    "Backend Developer",
    "Full Stack Developer Portfolio",
    "Node.js Developer",
    "React Developer",
    "KIIT",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: "https://mritunjay-devhq.vercel.app",
    siteName: `${profile.name} | Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased selection:bg-signal/20">
        {children}
      </body>
    </html>
  );
}
