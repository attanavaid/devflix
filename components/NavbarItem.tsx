import Link from "next/link";

interface NavbarItemProps {
  label: string;
  href: string;
  active?: boolean;
};

const NavbarItem = ({ label, href, active }: NavbarItemProps) => {
  return (
    <div className={active ? "text-white cursor-default" : "text-gray-200 hover:text-gray-300 cursor-pointer transition"}>
      <Link href={href}>
        {label}
      </Link>
    </div>
  );
};

export default NavbarItem;