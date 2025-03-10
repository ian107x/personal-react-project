import { renderHook } from "@testing-library/react"
import useTestHook from "./useTestHook"
import { act } from "react";

describe("test the practice hook", ()=>{
    test("basic hook test", ()=>{
        const { result } = renderHook(()=>useTestHook());
        
        expect(result.current.pracState).toBe(false);
        act(()=>{
            result.current.setPrac(true);
        });
        expect(result.current.pracState).toBe(true);


    })
})