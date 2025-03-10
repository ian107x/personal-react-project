import { useState } from "react";

export default function useTestHook(){
    const [pracState, setPrac] = useState<boolean>(false);
    return {pracState, setPrac}
}