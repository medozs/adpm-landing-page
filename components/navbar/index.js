import React, { useEffect, useState } from "react";
import { menu } from "../../utils/routeList";
import NavItems from "./navItems";
import Button from "../button";
import { useRouter } from "next/router";

const Navbar = () => {
  const route = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (route.asPath !== "/contact") {
      window.addEventListener("scroll", onScroll);
    } else {
      setIsScrolling(true);
    }
  }, [route, isScrolling]);

  const onScroll = () => {
    setIsScrolling(window.scrollY > 0);
  };

  return (
    <div
      className={`w-full text-base transition-all duration-500 lg:h-24 h-16 z-50 fixed px-8 items-center flex top-0 justify-between ${
        isScrolling
          ? "bg-gradient-to-b from-white to-white text-secondary shadow-xl"
          : "bg-gradient-to-b from-black/50 to-transparent text-white shadow-none"
      }`}
    >
      <div className="w-[20%] text-bold text-3xl">Logo</div>
      <div className="lg:flex hidden space-x-8 w-[60%] justify-center">
        {menu.map((item, i) => (
          <NavItems
            key={i}
            title={item.title}
            to={item.route}
            isDropdown={item?.items?.length}
            items={item?.items}
          />
        ))}
      </div>
      <div className="lg:w-[20%] flex justify-end">
        <Button
          title="Contact Us"
          contained
          onClick={() => route.push("/contact")}
        />
      </div>
    </div>
  );
};

export default Navbar;
