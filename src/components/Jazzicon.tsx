import jazzicon from "@metamask/jazzicon";
import { useEffect, useRef } from "react";

export const Jazzicon = ({ account }: { account: string }) => {
  const avatarRef = useRef<any>();
  useEffect(() => {
    const element = avatarRef.current;
    if (element && account) {
      const addr = account.slice(2, 10);
      const seed = parseInt(addr, 16);
      const icon = jazzicon(20, seed); //generates a size 20 icon
      if (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(icon);
    }
  }, [account, avatarRef]);

  return <div ref={avatarRef} className="h-[20px] w-[20px]"/>;
};
