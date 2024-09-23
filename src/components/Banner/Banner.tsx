import {HiOutlineHome, HiOutlineMenu, HiOutlineSearch, HiOutlineUser} from "react-icons/hi"
import LoginForm from "../LoginForm"
import { useNavigate } from "react-router-dom"

export default function Banner(){

    const navigate = useNavigate();

    function handleHomeClick(){
        navigate("/homePage");
    }
    return(
        <header className="header-piece">
            
            <HiOutlineMenu className="burger-button"/>
            <span className="title">Yolo-Force</span>
            <HiOutlineUser className="user-button"/>
            <HiOutlineHome onClick={()=>handleHomeClick()} className="user-button"/>
            
        </header>
    )
}