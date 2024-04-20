import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
      <header className="w-full items-center px-16 xl-px-0 xl:h-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
            {/* logo */}
            <Link href="/">
              <Image
                  src="/logo.svg"
                  alt="logo"
                  width={300}
                  height={20}
                  priority
              />
            </Link>

            {/* socials */}
            <Socials />
          </div>
        </div>


      </header>
  );
};

export default Header;
