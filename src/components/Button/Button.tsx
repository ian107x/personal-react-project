import { Children, ReactNode } from "react"
import "./styles.scss";

interface buttonProps{
    children: ReactNode;
    clickFunction: (arg0?: any)=> any;
    linkTo?: string;
}


export default function Button(props: buttonProps){
    return(
        <>
        { props.linkTo ? 
        <a href={props.linkTo} className="buttonStyle">
            {props.children}
        </a> 
        :
        <button className="buttonStyle" onClick={props.clickFunction}>
            {props.children}
        </button>
        }
        </>
    
    )
}