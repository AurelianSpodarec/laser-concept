import Link from "next/link";
import { IMenuItem } from "../dataMenu";

interface IMenuItemProps extends IMenuItem {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function MenuItem({ onClick, name, link }: IMenuItemProps) {
  return <Link href={link} onClick={onClick} className="link relative font-space-grotesk text-md h-full w-full lg:w-auto text-black inline-block transition duration-300 ease-out">{name}</Link>;
}

export default MenuItem
