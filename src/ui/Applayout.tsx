import { ReactNode } from "react"
import Banner from "../components/Banner";
import Footer from "../components/Footer";

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