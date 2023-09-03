import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton"
import HText from "@/shared/HText"

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const navbarBackground = isTopOfPage ? "bg-white" : "bg-white drop-shadow border-solid border-b-2 border-gray-100";

    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 `}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* left side */}
                        {/* <img src={Logo} alt="logo" width={150} height={40} /> */}
                        <HText>Website Name</HText>

                        {/* right side */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                                <ActionButton setSelectedPage={setSelectedPage}>Buy Now</ActionButton>
                            </div>
                        ) : (
                            <button className="rounded-full bg-[#111B47] p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* mobile menu modal */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white border-solid border-l-2 border-gray-100 drop-shadow-xl">
                    {/* close icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-black" />
                        </button>
                    </div>

                    {/* menu items */}
                    <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar