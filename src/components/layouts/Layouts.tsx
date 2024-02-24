import React from "react";
import {Footer, Header} from "@/components";

interface props{
    children: React.ReactNode
}
export function Layouts({children}: props) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
};