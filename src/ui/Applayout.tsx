import { ReactNode } from "react"
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer";

type childProps = {
    children: ReactNode;
}

export default function AppLayout({children}: childProps){
    return(
        <>
            <Banner/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    )
}