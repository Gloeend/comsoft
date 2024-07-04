import {Link, To} from "react-router-dom";
import {createRef, memo, PropsWithChildren, useCallback, useState} from "react";
import {clsx} from "clsx";
import c from "./style.module.scss";
import {TSvgFC} from "@shared/icons";
import {useHeaderContext} from "@widgets/header";
import {Portal} from "@widgets/portal";
import {generateId} from "@shared/utils";

interface IHeaderLinkProps extends PropsWithChildren {
  to: To;
  icon: TSvgFC;
  popup?: {
    icon: TSvgFC,
    items: IHeaderLinkPopupItem[]
  };
}

type IHeaderLinkPopupItem = {
  title: string;
  to: To;
  icon?: TSvgFC,
}

export const HeaderLink = memo(({children, to, icon: Icon, popup}: IHeaderLinkProps) => {
  const {collapse} = useHeaderContext();
  const [listOffset, setListOffset] = useState({top: "", left: ""});
  const ref = createRef<HTMLAnchorElement>();
  const refUl = createRef<HTMLUListElement>();
  const [isShow, set] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    set(true);
    if (ref.current) {
      setListOffset({
        top: `${ref.current.offsetTop}px`,
        left: `${ref.current.offsetLeft + ref.current.offsetWidth}px`,
      });
    }
  }, [ref]);

  const handleMouseLeave = useCallback(() => {
    set(false);
  }, []);

  return <Link ref={ref} onMouseLeave={() => handleMouseLeave()} onMouseEnter={() => handleMouseEnter()}
               className={clsx(c.link, collapse && c.active)} to={to}>
    <Icon/>
    <span>{children}</span>
    {
      popup &&
      <>
        {popup.icon({width: "8px", height: "8px", className: "ml-auto"})}
        {
          isShow &&
          <Portal>
            <ul ref={refUl} onMouseLeave={() => handleMouseLeave()} style={{...listOffset}} className={c.list}>
              {popup.items.map(el => <li key={generateId()}>
                <Link className="w-[100%] flex pr-[5px] items-center" to={el.to}>
                  {el.title}
                  {el.icon && el.icon({className: "ml-auto min-w-[12px]", width: "12px", height: "12px"})}
                </Link>
              </li>)}
            </ul>
          </Portal>
        }
      </>
    }
  </Link>;
})