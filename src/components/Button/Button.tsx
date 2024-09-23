import { Children, ReactNode } from "react"

interface buttonProps{
    children: ReactNode;
    clickFunction: (arg0?: any)=> any;
    linkTo?: string;
}


export default function Button(props: buttonProps){
    return(
        <>
        { props.linkTo ? 
        <a href={props.linkTo} className="buttonStyle linkStyle">
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