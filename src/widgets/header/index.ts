import {SvgSidebarArrow, SvgSidebarPlus} from "@shared/icons/sidebar";
import {TSvgFC} from "@shared/icons";

export * from "./Header.tsx";


export const exPopupArrow = {icon: SvgSidebarArrow as TSvgFC, items: [{to: "", title: "Заявки"}]};
export const exPopupPlus = {icon: SvgSidebarPlus as TSvgFC, items: [
    {to: "", title: "Компании"},
    {to: "", title: "Компании"},
    {to: "", title: "Компании"},
    {to: "", title: "Акты выполненных работ"},
  ]};