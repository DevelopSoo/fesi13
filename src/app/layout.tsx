import Header from "@/components/Header";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
