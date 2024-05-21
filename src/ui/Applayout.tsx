import { ReactNode } from "react"
import Banner from "./Banner";
import Footer from "./Footer";

type childProps = {
    children: ReactNode;
}

export default function AppLayout({children}: childProps){
    return(
        <>
        <Banner/>
        <div>
            {children}
        </div>
        <Footer/>
        </>
    )
}