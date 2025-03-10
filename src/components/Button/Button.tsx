import { Children, ReactNode } from "react"
import "./styles.scss";

interface buttonProps{
    children: ReactNode;
    buttonKind?: "standard" | "clear" | "red"
    clickFunction: (arg0?: any)=> any;
    linkTo?: string;
}


export default function Button({children, buttonKind, clickFunction, linkTo}: buttonProps){
    return(
        <>
        { linkTo ? 
        <a href={linkTo} className={"buttonStyle " + buttonKind ? buttonKind : " "}>
            {children}
        </a> 
        :
        <button className="buttonStyle" onClick={clickFunction}>
            {children}
        </button>
        }
        </>
    
    )
}