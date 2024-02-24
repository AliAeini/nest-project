import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";
import React from "react";

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