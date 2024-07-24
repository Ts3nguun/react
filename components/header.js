import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io"

const navigation = [
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Work",
        link: "/about"
    },
    {
        name: "Testimonials",
        link: "/about"
    },
    {
        name: "Contact",
        link: "/about"
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
                <div className="flex justify-content gap-6  ">

                    <div className="hidden lg:block">About</div>
                    <div className="hidden lg:block">Work</div>
                    <div className="hidden lg:block">Testimonals</div>
                    <div className="hidden lg:block">Contact</div>

                </div>
                <div className="flex gap-6 items-center">
                    <div className="hidden lg:block">Change theme</div>
                    <button className="hidden lg:block"></button>
                    {/* <button class="bg-gray-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded-2xl inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span>Downloada </span>
                </button> */}
                </div>

                <div className="lg:hidden items-center">
                    <div className="flex justify-center gap-4">

                        { }
                        <button onClick={openMenu}><IoMdMenu className="w-9 h-9" /></button>

                        <div>
                            <div className={`fixed translate-all inset-0 bg-slate-500/90 ${open ? "block" : "hidden"}`} onClick={closeMenu}></div>
                            <div className={`fixed top-0 bottom-0 translate-all w-64 text-black bg-white shadow-lg ${open ? "right-0" : "-right-full"}`}>
                                <div>
                                    {navigation.map((nav) => (
                                        <Link key={nav.link} href={nav.link} className="text-slate-400">{nav.name}</Link>
                                    ))}
                                    <button onClick={closeMenu}><IoMdClose /></button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}