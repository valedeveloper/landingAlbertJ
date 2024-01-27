import { ChangeEvent } from "react";

type ToggleMenu = {
  isMenuActive: boolean;
  onToggleMenu: (event: ChangeEvent<HTMLElement>) => void;
};

type ButtonProps = {
  onToggleMenu: MouseEventHandler<HTMLButtonElement>;
  isMenuActive: boolean;
};

type CardServiceProps = {
  color: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type ItemProps= {
  href: string;
  title: string;
  className?: string;
  isWhatsApp?: boolean;
  isScroll?: boolean;
  scrollToSection: (ref: string) => void;
}
