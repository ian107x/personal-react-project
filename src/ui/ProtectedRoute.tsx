import { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAuth, getState } from "../slices/authSlice";
import { RootState } from "../slices/store";
import { useNavigate } from "react-router-dom";

type props = {
    children: ReactNode
}

export default function ProtectedRoute({children}: props){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    if(isAuthenticated){
        return(
            {children}
        );

        }else{
            navigate("/")
        }
    }
