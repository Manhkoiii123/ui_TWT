"use client";
import { menuLink, TMenuLink } from "@/app/constants/menu";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type TExpand = {
  id: number;
  status: boolean;
};
const Sidebar = ({ closeMenu }: { closeMenu?: () => void }) => {
  const pathName = usePathname();
  const isActive = (link: string) => {
    // return item.link
    return pathName === link || pathName.includes(link);
    // : item.subMenu?.some((sub) => pathName.includes(sub.link!));
  };
  const [isOpen, setIsOpen] = useState<TExpand[]>(
    menuLink.map((item) => ({
      id: item.id,
      status: false,
    }))
  );

  useEffect(() => {
    const defaultOpen = menuLink.find((item) =>
      item.subMenu?.some((sub) => isActive(sub.link!))
    );
    setIsOpen(
      menuLink.map((item) => ({
        id: item.id,
        status: false || defaultOpen?.id === item.id,
      }))
    );
  }, [pathName]);
  const handleOpen = (id: number) => {
    setIsOpen((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
  const displayItemMenu = (item: TMenuLink) => {
    if (!item.subMenu) {
      return (
        <Link
          href={item.link!}
          onClick={closeMenu}
          className="text-[#ffffffb3] hover:text-white font-medium leading-6 text-sm font-primary "
        >
          <div className="flex items-center gap-3 py-2">
            <div>{item.icon}</div>
            <span className="font-medium">{item.name}</span>
          </div>
        </Link>
      );
    } else {
      return (
        <>
          <div
            className="flex items-center justify-between text-[#ffffffb3] hover:text-white  font-medium leading-6 text-sm font-primary py-1"
            onClick={() => {
              handleOpen(item.id);
            }}
          >
            <div className="flex items-center gap-3">
              <div>{item.icon}</div>
              <span className="font-medium">{item.name}</span>
            </div>

            <div>
              {isOpen.find((open) => open.id === item.id)?.status ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </div>
          </div>
          {isOpen.find((open) => open.id === item.id)?.status && (
            <div
              className={`ml-8  flex flex-col gap-3 overflow-hidden ${
                isOpen.find((open) => open.id === item.id)?.status
                  ? "animate-slideDown"
                  : "animate-slideUp"
              } ${item.subMenu?.length === 0 ? "" : "my-2"} `}
            >
              {item.subMenu?.map((subItem) => (
                <Link
                  href={subItem.link!}
                  key={subItem.id}
                  className={`text-[#ffffffb3] hover:text-white font-medium leading-6 text-sm font-primary  `}
                >
                  <div
                    className={`flex items-center gap-3 py-1 px-3 rounded-md ${
                      isActive(subItem.link!) ? "bg-[#6C94E4]" : ""
                    }`}
                  >
                    <div className="w-3 h-3 border border-[#ffffffb3] rounded-full"></div>
                    <span className="font-medium">{subItem.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      );
    }
  };
  return (
    <div className="w-[280px] h-screen bg-primary pt-4">
      <div className="flex items-center justify-center mb-4 border-b border-gray-700 ">
        <Image
          src="https://newsletters.tkgplatform.com.au/assets/images/logo-twt-white.png"
          alt="logo"
          width={170}
          height={170}
          className="object-contain mb-4"
        />
      </div>
      <div className="flex flex-col gap-2 space-y-1 cursor-pointer p-2  select-none">
        {menuLink.map((item) => (
          <div
            key={item.id}
            className={`${
              isActive(item.link) ? "bg-[#6C94E4]" : ""
            } px-3 rounded-md `}
          >
            {displayItemMenu(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
