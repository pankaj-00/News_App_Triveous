import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/contexts/auth-context";
import { ArticlesProvider } from "@/contexts/article-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News App",
  description: "It's a simple news feed app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ArticlesProvider>
            <Navbar />
            {children}
          </ArticlesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
