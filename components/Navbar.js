import Link from "next/link";
import PrimaryButton from "./primaryButton";
import Image from "next/image";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
    {
      name: "Working Process",
      href: "#workingProcess",
    },
  ];

  const sss = "Contact";
  return (
    <div className="w-[100vw] border-b-[1px] border-b-slate-600">
      <nav className="flex justify-around items-center py-3">
        <Link href="#" className=" navButtonHover">
          <Image src="/Images/logo.jpg" width={200} height={20} />
        </Link>
        <div className="flex flex-col justify-center">
          <div className="flex justify-between gap-10">
            {links.map((link) => (
              <Link
                href={link.href}
                className="navButtonHover text-2xl font-semibold text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <PrimaryButton text={"Contact Us"} href={"#contact"} />
      </nav>
    </div>
  );
};

export default Navbar;
