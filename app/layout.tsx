import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Max Count Challenge",
  description: "Implement a button and timer that will start from 10 and ends at 0 and tracks the counter until the timer expires and button should disappear once timer expires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
