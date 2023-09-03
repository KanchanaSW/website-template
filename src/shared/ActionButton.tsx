import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"


type Props = {
    children:React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink 
        className="bg-[#111B47] text-white px-10 py-2 hover:text-slate-400"
        onClick={() => setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton