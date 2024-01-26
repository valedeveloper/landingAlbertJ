import { ToggleMenu } from "@/app";
import React, { useEffect, useState } from "react";

export const useMenu = (): ToggleMenu => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    const onToggleMenu = (event: React.ChangeEvent<HTMLElement>) => {
        setIsMenuActive((prevState) => !prevState);
    };


    useEffect(() => {
        const handleResize = () => {
            setIsMenuActive(window.innerWidth > 1000);
        };

        window.addEventListener("resize", handleResize);

        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        isMenuActive, onToggleMenu
    }
}