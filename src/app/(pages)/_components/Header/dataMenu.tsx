import { WebsiteRoutes } from "@/routes";

export interface IMenuItem {
  name: string;
  link: WebsiteRoutes
}

const dataMenu: IMenuItem[] = [
  {
    name: "Services",
    link: WebsiteRoutes.SOLUTION
  },
  {
    name: "Work",
    link: WebsiteRoutes.PROCESS
  },
  {
    name: "About",
    link: WebsiteRoutes.ABOUT
  },
  {
    name: "Blog",
    link: WebsiteRoutes.FAQ
  },
  {
    name: "Contact",
    link: WebsiteRoutes.ROOT
  }
]


export default dataMenu