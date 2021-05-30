import { createContext, useState } from "react";

export const CalanderContext = createContext();

export default function CalanderProvider({children}){
    const [selectedMentor, setSelectedMentor] = useState({id: '', index: ''});

    return <CalanderContext.Provider value={{selectedMentor, setSelectedMentor}}>
        {children}
    </CalanderContext.Provider>
}