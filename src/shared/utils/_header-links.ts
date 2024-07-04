import {SvgSidebarArrow, SvgSidebarPlus} from "@shared/icons/sidebar";
import {TSvgFC} from "@shared/icons";

export const crm = {
  icon: SvgSidebarArrow as TSvgFC,
  items: [
    {
      title: "Сделки",
      to: ""
    },
    {
      title: "Компании",
      to: ""
    },
    {
      title: "Объекты",
      to: ""
    },
    {
      title: "Договоры",
      to: ""
    },
    {
      icon: SvgSidebarPlus as TSvgFC,
      title: "Коммерческие предложения",
      to: ""
    },
    {
      icon: SvgSidebarPlus as TSvgFC,
      title: "Счета",
      to: ""
    },
    {
      icon: SvgSidebarPlus as TSvgFC,
      title: "Акты выполненных работ",
      to: ""
    },
  ],
}