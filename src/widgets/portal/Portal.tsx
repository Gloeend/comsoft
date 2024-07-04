import {FC, PropsWithChildren, useCallback} from "react";
import {createPortal} from "react-dom";

export const Portal: FC<PropsWithChildren> = ({children}) => {
  const createRef = useCallback(() => {
    if (!document) {
      return {} as HTMLDivElement;
    }

    const existed = document.querySelector('#q-portal');

    if (existed) {
      return existed;
    }

    const div = document.createElement('div');
    div.classList.add('q-portal');
    div.setAttribute('id', 'q-portal');
    document.body.appendChild(div);
    return div;
  }, []);


  return createPortal(children, createRef());
}