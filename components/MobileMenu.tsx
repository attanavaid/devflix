import Link from "next/link";

interface MobileMenuProps {
  visible?: boolean;
};

const MobileMenu = ({ visible }: MobileMenuProps) => {
  if (!visible) {
    return null;
  };

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          <Link href="/">
            Home
          </Link>
        </div>

        <div className="px-3 text-center text-white hover:underline">
          <Link href="/series">
            Series
          </Link>
        </div>

        <div className="px-3 text-center text-white hover:underline">
          <Link href="/films">
            Films
          </Link>
        </div>

        <div className="px-3 text-center text-white hover:underline">
          <Link href="/new">
            New & Popular
          </Link>
        </div>

        <div className="px-3 text-center text-white hover:underline">
          <Link href="/favorites">
            My Favorites
          </Link>
        </div>
        
        <div className="px-3 text-center text-white hover:underline">
          <Link href="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;