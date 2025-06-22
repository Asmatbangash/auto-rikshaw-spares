import React from "react";
import { SiHashicorp } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { MdOutlineAddIcCall } from "react-icons/md";
function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content p-10">
      <aside>
        <SiHashicorp className="text-5xl" />
        <p className="font-bold">
          Auto Rikshaw Spare Parts Industry Ltd.
          <br />
          Providing reliable & good Product.
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-xl">
            <FaFacebookF />
          </a>
          <a className="text-xl">
            <PiWhatsappLogoDuotone />
          </a>
          <a className="text-xl">
            <MdOutlineAddIcCall />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
