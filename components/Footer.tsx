import React from "react";
import Image from "next/image";
import { CustomButton } from "@/components/index";
import Link from "next/link";
import { footerLinks } from "@/constans";

export const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t border-gray-100 mt-5">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car Hub <br />
            All rights reserved 2021 &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="text-lg font-semibold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <div className="footer__copyrights-link">
          <p className="flex-1">@2023 Cur Rental. All Rights Reserved</p>
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
