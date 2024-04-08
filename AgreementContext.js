import { createContext, useContext, useState } from 'react';


const AgreementContext = createContext();
export const useAgreementContext = () => useContext(AgreementContext);

export const AgreementProvider = ({ children }) => {
const [agreementData, setAgreementData] = useState({});

const createAgreement = (data) => {
    setAgreementData(data);
};


return (
    <AgreementContext.Provider value={{ agreementData, createAgreement }}>
        {children}
    </AgreementContext.Provider>
);
};

