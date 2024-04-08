import React from "react";
import {Footer, Header} from "@/components";
import {MenuLinks} from "@/mock/MenuLinks";
import {BrowsCateguryMock} from "@/mock/BrowsCateguryMock";

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
}