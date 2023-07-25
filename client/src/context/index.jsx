import React, { useContext, createContext, Children } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x97074AEC2333247D1879C7b5514962a2c7346040');
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ])

            console.log("contract call success", data)
        } catch (error) {
            console.log("contract call failure", error)
        }
    }
    return (
        <StateContext.Provider value={{
            address, contract,connect, createCampaign: publishCampaign,
        }}>

            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);