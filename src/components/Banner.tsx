import {HiOutlineHome, HiOutlineMenu, HiOutlineSearch, HiOutlineUser} from "react-icons/hi"
import LoginForm from "./LoginForm"

export default function Banner(){
    return(
        <header className="header-piece">
            
            <HiOutlineMenu className="burger-button"/>
            <span className="title">Yolo-Force</span>
            <HiOutlineUser className="user-button"/>
            <HiOutlineHome className="user-button"/>
            
        </header>
    )
}