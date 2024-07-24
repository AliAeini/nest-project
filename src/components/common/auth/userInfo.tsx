import Modal from "@/components/common/ui/modal/Modal";
import {useContext} from "react";
import {ModalContext} from "@/store/ModalContext";
import {AuthContext} from "@/store/AuthContext";


export function UserInfo() {
    const {closeModalHandler} = useContext(ModalContext)
    const {logOut} = useContext(AuthContext)
    const userInfo = JSON.parse(window.localStorage.getItem("user")!)

    return (
        <Modal title={"user dashboard"} onClose={()=>closeModalHandler()}>
            <div className="p-4 flex flex-col gap-8 justify-between">
                <p className="text-lg md:text-xl self-center font-[500] text-gray-500">wellcome to dashboard</p>
                <div className="border-b p-2">
                    <span>name : </span>
                    <span>{userInfo!.username}</span>
                </div>
                <div className="border-b p-2">
                    <span>email : </span>
                    <span>{userInfo!.email}</span>
                </div>
                <button onClick={()=> logOut()} className="w-full p-1 md:p-2 tracking-wide md:text-lg bg-red text-white font-[400] rounded cursor-pointer">LOG OUT</button>
            </div>
            <></>
        </Modal>
    );
}