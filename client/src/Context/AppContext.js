import { createContext, useState } from "react";

const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [showChirp, setShowChirp] = useState(false)

    const changeChirpState = ()=>{
        setShowChirp((prev)=>!prev)
    }

    return <AppContext.Provider data={{showChirp, changeChirpState}}>
        {props.children}
    </AppContext.Provider>
}