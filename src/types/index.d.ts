declare interface BtnProps {
  title?: string;
  icon?: ReactNode;
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
}
