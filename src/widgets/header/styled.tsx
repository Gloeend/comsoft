import styled from "styled-components";
import {toRem} from "@shared/utils";

export const HeaderInnerStyledDesktop = styled.div`
  &, &::before {
    background: var(--comsoft-primary);
    position: fixed;
    left: 0;
    top: 0;
  }
  
  &::before {
    content: "";
    width: 100vw;
    z-index: 9;
    height: ${toRem(65)};
    background: var(--comsoft-primary);
  }
  
  nav {
    position: relative;
    z-index: 10;
  }
`;

export const UlStyled = styled.ul`
  margin-top: 24px;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  list-style: none;
  gap: 5px;
  
  & > a:first-child {
    padding: ${toRem(10)};
  }
  
  & > ul {
    width: 100%;
  }
`;
export const LiStyled = styled.li`
  width: 100%;
`;


export const HeaderInnerStyledMobile = styled.div`
  width: 100%;
  height: 65px;
  background: var(--comsoft-primary);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
`;

export const UlStyledMobile = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 5px;
  background: var(--comsoft-primary);
  padding: 10px 35px;
  color: var(--comsoft-text-primary);
  width: 100%;
  position: absolute;
  top: 65px;
`;

export const UlSubStyledMobile = styled.ul`
  padding-left: 5px;
  display: flex;
  flex-flow: column;
`;