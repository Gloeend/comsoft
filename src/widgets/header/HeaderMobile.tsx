import {HeaderInnerStyledMobile, UlStyledMobile, UlSubStyledMobile} from "@widgets/header/styled.tsx";
import {Link} from "react-router-dom";
import {SvgHeaderLogotype, SvgHeaderOpen} from "@shared/icons/header";
import {useHeaderContext} from "@widgets/header/Header.tsx";
import {Portal} from "@widgets/portal";
import {Notification} from "@features/notification";
import {SvgSidebarApprovals, SvgSidebarNotification} from "@shared/icons/sidebar";
export const HeaderMobile = () => {
  const {collapse, setCollapse} = useHeaderContext();

  return (
    <HeaderInnerStyledMobile>
      <nav className="flex justify-between items-center w-[100%] px-[20px]">
        <Link to="/">
          <div className="w-[30px] rounded-full h-[30px] bg-black"/>
        </Link>
        <Link to="/" className="ml-auto"><SvgHeaderLogotype width="45px" height="40px"/></Link>
        <button className="ml-auto" onClick={() => setCollapse(!collapse)}>
          <SvgHeaderOpen className={`${collapse ? "rotate-90" : "-rotate-90"}`} />
        </button>
      </nav>
      <ul className="flex items-center justify-around fixed bottom-0 w-[100%] h-[65px] bg-[var(--comsoft-primary)]">
        <div className="flex gap-[60px]">
          <Notification icon={SvgSidebarNotification} count={5} />
          <Notification icon={SvgSidebarApprovals} count={5} />
        </div>
      </ul>
      {
        collapse && <Portal>
          <UlStyledMobile>
            <li>
              <Link to="">Планировщик</Link>
            </li>
            <li>
              <Link to="">Планировщик</Link>
              <UlSubStyledMobile>
                <Link to="">Заявки</Link>
              </UlSubStyledMobile>
            </li>
            <li>
              <Link to="">Планировщик</Link>
              <UlSubStyledMobile>
                <Link to="">Компании</Link>
                <Link to="">Компании</Link>
                <Link to="">Компании</Link>
                <Link to="">Акты выполненных работ</Link>
              </UlSubStyledMobile>
            </li>
            <li>
              <Link to="">Планировщик</Link>
            </li>
            <li>
              <Link to="">Планировщик</Link>
            </li>
            <li>
              <Link to="">Планировщик</Link>
            </li>
            <li>
              <Link to="">Планировщик</Link>
            </li>
            <li>
              <Link to="">Планировщик</Link>
            </li>
            <li>
              <Link to="">Планировщик</Link>
            </li>
            <li>
              <Link to="">Планировщик</Link>
            </li>
            <li>
              <Link to="">Выйти</Link>
            </li>
          </UlStyledMobile>
        </Portal>
      }
    </HeaderInnerStyledMobile>
  );
}