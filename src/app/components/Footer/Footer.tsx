import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white  text-center ">
      <p className="">My Cool App. All rights reserved.</p>

      <br />

      <nav className=" text-center text-sm ">
        <div>
          <Link
            className=" hover:text-neutral-600 text-center"
            href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com/mail/&service=mail&ec=GBRAFw"
           target="_blank">
            Contact
          </Link>

          <br />
          <br />

          <Link
            className=" hover:text-neutral-600"
            href="https://www.linkedin.com/in/Rizwan Ali"
            target="_blank">
            Linkdin
          </Link>

          <br />
          <br />

          <Link
            className=" hover:text-neutral-600"
            href="https://github.com/Rizwan114"
           target="_blank">
            Github
          </Link>

          <br />
          <br />

          <Link
            className=" hover:text-neutral-600"
            href="https://www.wix.com/lp-en/website-builder?utm_source=google&utm_medium=cpc&utm_campaign=18947329901^147183257401^search%20-%20en&experiment_id=best%20free%20portfolio%20websites^b^635573220860^&gad_source=1&gclid=CjwKCAjwjsi4BhB5EiwAFAL0YHT1IFjKUfVY8keXLLLHK_5PjYWqb1dY8W0irhAGAfHF_4YvRH_fhBoCvPcQAvD_BwE"
            target="_blank">
            Privacy Policy
          </Link>

          <br />
          <br />
        </div>
      </nav>
    </div>
  );
};

export default Footer;
