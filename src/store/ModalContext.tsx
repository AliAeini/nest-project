import {createContext, ReactNode, useState} from "react";

interface Props {
    children: ReactNode
};

interface contextProps {
    ModalState: boolean,
    closeModalHandler: () => void
    openModalHandler: () => void
}

export const ModalContext = createContext<contextProps>({ModalState: false, closeModalHandler: ()=>{}, openModalHandler: ()=>{} })


export function ModalContextProvider({children}: Props) {
    const [modalState, setModalState] = useState<false | true>(false)

    const closeModalHandler = ()=>{
        setModalState(false)
    }
    const openModalHandler = ()=>{
        setModalState(true)
    }
    return (
        <ModalContext.Provider value={{ModalState: modalState, closeModalHandler: closeModalHandler, openModalHandler: openModalHandler}}>
            {children}
        </ModalContext.Provider>
    );
}

