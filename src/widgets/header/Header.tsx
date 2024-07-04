import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";
import Media from "react-media";
import {HeaderDesktop} from "@widgets/header/HeaderDesktop.tsx";
import {HeaderMobile} from "@widgets/header/HeaderMobile.tsx";

interface IHeaderContext {
  collapse: boolean;
  setCollapse: (val: boolean) => any;
  freeze: boolean;
  setFreeze: Dispatch<SetStateAction<boolean>>;
}

const HeaderContext = createContext<IHeaderContext>({} as IHeaderContext);
export const useHeaderContext = () => useContext(HeaderContext);

export const Header = () => {
  const [active, set] = useState<boolean>(false);
  const [freeze, setFreeze] = useState(false);

  const setCollapseHandler = (val: boolean) => {
    if (freeze) return;
    set(val)
  }

  return <HeaderContext.Provider value={{collapse: active, setCollapse: setCollapseHandler, freeze, setFreeze}}>
    <header>
      <Media query="(min-width: 1001px)"><HeaderDesktop/></Media>
      <Media query="(max-width: 1000px)"><HeaderMobile/></Media>
    </header>
  </HeaderContext.Provider>
}