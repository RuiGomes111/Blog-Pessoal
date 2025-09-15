import { ReactNode } from "react"
import Navbar from "./Navbar"

interface MaincontainerProps{
    children: ReactNode
}
export default function Maincontainer({children}:MaincontainerProps){
    return(
        <>
            <Navbar/>
            <div>
                {children}
            </div>
        </>
    )
}