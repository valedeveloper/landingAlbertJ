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
  sectionId: string;
  title: string;
  className?: string;
  scrollToSection: (ref: string) => void;
}
