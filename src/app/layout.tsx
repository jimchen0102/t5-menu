import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeamT5 杜浦數位安全 - Persistent Cyber Threat Hunters - TeamT5",
  description:
    "TeamT5 杜浦數位安全專精網路威脅研究，提供端點偵測與回應(EDR)解決方案。協助美日臺大型企業有效保護商業機密文件，營運不受網路攻擊影響。團隊具備超過10年的惡意程式與進階持續性滲透攻擊(APT)的經驗，基於地緣和語言優勢，我們有效掌握亞太地區的駭客攻擊，更經常受邀參加世界級資安會議、發表研究成果。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
