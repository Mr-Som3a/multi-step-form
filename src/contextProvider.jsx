import { createContext, useContext, useState } from "react";

const Context = createContext();

const ContextProvider=({children})=> {
    const [planPeriod, setPlanPeriod] = useState('monthly');
    const [userInfo] = useState({});
    const [currentPage, nextPage] = useState(1);


    const value = {
        planPeriod, setPlanPeriod,
        userInfo,
        currentPage, nextPage,
        
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export const useMyContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error("useMyContext must be used within a ContextProvider");
    }
    return context;
};
export default ContextProvider;