import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io"

const navigation = [
    {
        name: "About",
        link: "#About"
    },
    {
        name: "Work",
        link: "#Work"
    },
    {
        name: "Testimonials",
        link: "/about"
    },
    {
        name: "Contact",
        link: "#Contact"
    },
]




export function Navigation_bar() {
    let [open, setOpen] = useState(true);

    function openMenu() {
        setOpen(true);
    }

    function closeMenu() {
        setOpen(false);
    }
    return (
        <div className=" bg-slate-200 ">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="text-[30px]">{`<SS/>`}</div>
                <div className=" justify-content gap-6 hidden lg:flex text-black">
                    {navigation.map((nav) => (
                        <Link key={nav.link} href={nav.link} className="text-slate-400">{nav.name}</Link>
                    ))}

                </div>
                <div className="flex gap-6 items-center">
                    <div className="hidden lg:block">Change theme</div>
                    <Link href={"Light.pdf"} target="blank">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded hidden lg:block">
                            Download CV
                        </button>
                    </Link>
                    
                </div>

                <div className="lg:hidden items-center">
                    <div className=" gap-4">
                        <button onClick={openMenu}><IoMdMenu className="w-9 h-9" /></button>
                        <div>
                            <div className={`fixed translate-all inset-0 bg-slate-500/90 ${open ? "block" : "hidden"}`} onClick={closeMenu}></div>
                            <div className={`fixed top-0 bottom-0 translate-all w-64 text-black bg-white shadow-lg ${open ? "right-0" : "-right-full"}`}>
                                <div>
                                    <span className="flex justify-between text-[24px] shadow">{`<SS/>`}<button onClick={closeMenu}><IoMdClose /></button></span>
                                    <span className="gap-4 p-4 flex flex-col text-gray-600 shadow">
                                        {navigation.map((nav) => (
                                            <Link key={nav.link} href={nav.link} className="text-slate-400">{nav.name}</Link>
                                        ))}
                                    </span>
                                    <span className=" flex flex-col gap-4 p-4">
                                        Switch theme

                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                            Download CV
                                        </button>
                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}