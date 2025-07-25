declare interface BtnProps {
  title?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  type?: string;
  onBtnClick?: () => void;
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
}

declare interface MoreDetailsBlockProps<T> {
  title: string;
  details: T;
  displayItems: (details: T) => ReactNode;
}
