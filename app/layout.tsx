import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

const metadata = {
  title: "Acme",
  description: "Acme Company",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
