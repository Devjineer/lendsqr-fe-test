declare interface BtnProps {
  title?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  type?: string;
  onBtnClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void> | void;
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
  closeSideBar?: () => void;
}

declare interface MoreDetailsBlockProps<T> {
  title: string;
  details: T;
  displayItems: (details: T) => ReactNode;
}

declare interface User {
  id: string;
  organisation: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: number;
  status: string;
}

declare interface LogoProps {
  className: string;
  imgClassName: string;
}
