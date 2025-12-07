import Link from "next/link";
import { IMenuItem } from "../dataMenu";

interface IMenuItemProps extends IMenuItem {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function MenuItem({ onClick, name, link }: IMenuItemProps) {
  return <Link href={link} onClick={onClick} className="link relative text-sm h-full w-full lg:w-auto text-black inline-block font-inter transition duration-300 ease-out">{name}</Link>;
}

export default MenuItem
