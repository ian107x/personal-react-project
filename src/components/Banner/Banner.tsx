import {HiOutlineHome, HiOutlineMenu, HiOutlineSearch, HiOutlineUser} from "react-icons/hi"
import LoginForm from "../LoginForm"
import { useNavigate } from "react-router-dom"
import Button from "../Button/Button";
import "./styles.scss"

export default function Banner(){

    const navigate = useNavigate();

    function handleHomeClick(){
        navigate("/homePage");
    }
    return(
        <header className="header-piece">
            
            <Button clickFunction={()=>{}}><HiOutlineMenu className="burger-button"/></Button>
            <span className="title">Test Banner</span>
            <HiOutlineUser className="user-button"/>
            <Button clickFunction={()=>handleHomeClick()} linkTo="/homepage">
                <HiOutlineHome className="user-button"/>
            </Button>
            
        </header>
    )
}