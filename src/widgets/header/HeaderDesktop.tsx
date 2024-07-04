import {Link} from "react-router-dom";
import {SvgHeaderLogotype, SvgHeaderOpen} from "@shared/icons/header";
import {toRem} from "@shared/utils";
import c from "@widgets/header/style.module.scss";
import {HeaderInnerStyledDesktop, LiStyled, UlStyled} from "@widgets/header/styled.tsx";
import {HeaderLink} from "@widgets/header/ui/header-link";
import {SvgSidebarApprovals, SvgSidebarArrow, SvgSidebarNotification, SvgSidebarPlanner} from "@shared/icons/sidebar";
import {TSvgFC} from "@shared/icons";
import {useHeaderContext} from "@widgets/header/Header.tsx";
import {clsx} from "clsx";
import {SwitchButton} from "@features/switch-button";
import {crm} from "@shared/utils/_header-links.ts";
import {Notification} from "@features/notification";

export const HeaderDesktop = () => {
  const {collapse, setCollapse, freeze, setFreeze} = useHeaderContext();

  return (
    <HeaderInnerStyledDesktop className={clsx(c.header, collapse && c.active)}>
      <nav>
        <Link to="/">
          <SvgHeaderLogotype width={!collapse ? toRem(125) : toRem(50)} height={toRem(45)}/>
        </Link>
        <button className={clsx(c.open)} onClick={() => setCollapse(!collapse)}><SvgHeaderOpen/></button>
        <UlStyled>
          {/* FIXME: Конечно можно сделать статический mock или промис (как будто приходит с сервера), как вариант, но time => money */}
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Планировщик</HeaderLink></LiStyled>
          <LiStyled><HeaderLink popup={crm} to="#" icon={SvgSidebarPlanner}>CRM</HeaderLink></LiStyled>
          <LiStyled><HeaderLink popup={{
            icon: SvgSidebarArrow,
            items: [
              {title: "Закупки", to: ""},
              {title: "Продажи", to: ""},
              {title: "Товары", to: ""},
            ]
          }} to="#" icon={SvgSidebarPlanner}>Склад</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Инструменты</HeaderLink></LiStyled>
          <LiStyled><HeaderLink popup={{
            icon: SvgSidebarArrow,
            items: [
              {title: "Заявки", to: ""},
              {title: "Календарь", to: ""},
              {title: "Компании", to: ""},
              {title: "Пользователи", to: ""},
              {title: "Отчёты", to: ""},
              {title: "Парк техники", to: ""},
            ]
          }} to="#" icon={SvgSidebarPlanner}>Help Desk</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Финансы</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Аналитика</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>База знаний</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Документация</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Настройки</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Список обновлений</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Пользователи</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Задачи</HeaderLink></LiStyled>
          <LiStyled><HeaderLink to="#" icon={SvgSidebarPlanner}>Сообщить об ошибке</HeaderLink></LiStyled>
          <div className="w-[100%] h-[1px] bg-[var(--comsoft-primary-hover)] my-[10px]"/>
          <div
            className={`flex flex-col ${collapse && "!flex-row justify-center w-[100%] [&>span]:absolute"} items-center gap-[12px]`}>
            <span
              className="whitespace-nowrap text-12px leading-[12px] block text-[var(--comsoft-text-primary)]"
            >{!collapse && "Сохранить состояние"}</span>
            <SwitchButton $active={freeze} onClick={() => setFreeze(!freeze)}></SwitchButton>
          </div>
          <div className="w-[100%] h-[1px] bg-[var(--comsoft-primary-hover)] my-[10px]"/>
          <div className={`flex justify-around w-[100%] ${collapse && "flex-col items-center gap-[15px] pr-[5px]"}`}>
            <Notification count={4} icon={SvgSidebarNotification}/>
            <Notification count={4} icon={SvgSidebarApprovals}/>
          </div>
          <LiStyled>
            <HeaderLink
              to="#"
              popup={{icon: SvgSidebarArrow as TSvgFC, items: [{title: "Выйти", to: ""}]}}
              icon={() => <div className="w-[30px] rounded-full h-[30px] bg-black"/>}
            >Профиль</HeaderLink>
          </LiStyled>
        </UlStyled>
      </nav>
    </HeaderInnerStyledDesktop>
  )
}