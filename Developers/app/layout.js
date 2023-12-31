import "./globals.css";
import { lexend } from "./localFont";

export const metadata = {
  title: "Talentyard: Achieving Innovation through Collaboration",
  description: "Building for the next generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable}`}>{children}</body>
    </html>
  );
}
