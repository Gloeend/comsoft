import styled, {css} from "styled-components";

interface ISwitchButtonProps {
  $active: boolean
}

export const SwitchButton = styled.button<ISwitchButtonProps>`
  width: 40px;
  height: 18px;
  border-radius: 19px;
  background: var(--comsoft-white-50);
  transition: var(--comsoft-transition-100);
  position: relative;
  
  &::before {
    left: 0;
    top: 0;
    position: absolute;
    transition: var(--comsoft-transition-125);
    display: block;
    content: "";
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background: var(--comsoft-white);

    ${({ $active }) => $active && css`
      left: calc(100% - 18px);
    `};
  }
  ${({ $active }) => $active && css`
      background: lightskyblue;
  `};
`;