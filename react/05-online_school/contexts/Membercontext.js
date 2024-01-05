import {Membercontext, createContext, useContext, useState} from "react";

const Membercontext = createContext();

export function MemberProvider({children}){
    const[member, setMember] = useState({});

    return(
        <Membercontext.Provider value={{member, setMember}}>
            {children}
        </Membercontext.Provider>
    );
}

export function useSetMember(){
    const context = useContext(MemberContext);
    if(!context){
        throw new Error("반드시 MemberProvider 안에서 사용해야 합니다.")
    }

    return context.setMember;
}