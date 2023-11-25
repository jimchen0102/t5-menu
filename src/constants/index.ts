import type { Menu } from "@/types";

export const menus: Menu[] = [
  {
    title: "服務",
    dropdowns: [
      {
        title: "MDR",
        description: "威脅偵測應變代管服務",
      },
      {
        title: "IR",
        description: "資安事件應變處理服務",
      },
    ],
  },
  {
    title: "產品",
    dropdowns: [
      {
        title: "ThreatSonar Anti-Ransomware",
        description: "威脅鑑識分析與回應平台",
      },
      {
        title: "ThreatSonar",
        description: "威脅鑑識分析平台",
      },
      {
        title: "ThreatVision",
        description: "威脅情資平台",
      },
    ],
  },
  {
    title: "產業方案",
    dropdowns: [
      {
        title: "金融機構",
      },
      {
        title: "醫療院所",
      },
      {
        title: "科技製造業",
      },
      {
        title: "政府機關",
      },
    ],
  },
  {
    title: "關於 TeamT5",
    dropdowns: [
      {
        title: "TeamT5 團隊",
      },
      {
        title: "人才招募",
      },
    ],
  },
  {
    title: "最新消息",
  },
  {
    title: "部落格",
  },
  {
    title: "聯絡我們",
    dropdowns: [
      {
        title: "索取資訊",
      },
      {
        title: "合作夥伴",
      },
    ],
  },
];
