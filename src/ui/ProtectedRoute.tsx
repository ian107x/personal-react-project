import { ReactNode } from "react"
import { useDispatch } from "react-redux"

type props = {
    children: ReactNode
}

export default function ProtectedRoute({children}: props){
    const dispatch = useDispatch();
}