import {Link} from "react-router-dom";
import {FC} from "react";
import {TSvgFC} from "@shared/icons";

interface INotificationProps {
  count?: number;
  icon: TSvgFC;
}

export const Notification: FC<INotificationProps> = ({count, icon: Icon}) => {
  return (
    <Link to="" className="relative">
      <Icon/>
      {count && <span className="font-bold absolute top-[-35%] right-[-75%] w-[20px] h-[20px] bg-[yellow] flex items-center justify-center rounded-full">{count}</span>}
    </Link>
  )
}