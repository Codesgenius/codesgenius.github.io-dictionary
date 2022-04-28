import React from 'react';

export const WordContext = React.createContext()

export const WordProvider = ({ children }) => {

    return <WordContext.Provider value={{}}>
        {children}
    </WordContext.Provider>
}