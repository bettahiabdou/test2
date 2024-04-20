import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
    return (
        <header className="w-full items-center px-4 lg:px-16 xl:px-0 py-4 lg:h-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-0 lg:py-2">
                    {/* logo */}
                    <Link href="/">
                        <div className="w-full lg:w-auto">
                            <Image
                                src="/logo.svg"
                                alt="logo"
                                width={300}
                                height={20}
                                priority
                            />
                        </div>
                    </Link>

                    {/* socials */}
                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default Header;
