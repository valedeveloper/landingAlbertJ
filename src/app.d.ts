import { ChangeEvent } from "react";

type ToggleMenu = {
    isMenuActive: boolean,
    onToggleMenu: (event: ChangeEvent<HTMLElement>) => void;
}

type ButtonProps ={
    onToggleMenu: () => void;
    isMenuActive: boolean;
  }

  type CardServiceProps = {
    color: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
  };