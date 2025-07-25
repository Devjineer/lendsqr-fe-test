declare interface BtnProps {
  title?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  type?: string;
  onBtnClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void> | void;
}

declare interface SideBarProps {
  sidebar: string;
  section: string;
  sectionTitle: string;
  link: string;
  active?: string;
  linkContainer: string;
  linksWrapper: string;
  addedBtnClass?: string;
  logoutWrap?: string;
  closeSideBar?: () => void;
}

declare interface MoreDetailsBlockProps<T> {
  title: string;
  details: T;
  displayItems: (details: T) => ReactNode;
}

declare interface User {
  organisation: string;
  username: string;
  personal_info: {
    email: string;
    phone: string;
  };
  id: string;
  date_joined: number;
  status: string;
}

declare interface LogoProps {
  className: string;
  imgClassName: string;
}
