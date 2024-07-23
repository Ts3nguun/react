import { IoMdMenu } from "react-icons/io";

export function Navigation_bar() {
    return (
        <div className="flex justify-between bg-slate-200">
            <div>{`<SS/>`}</div>
            <div className="flex justify-content gap-6  ">
                
                    <div className="hidden lg:block">About</div>
                    <div className="hidden lg:block">Work</div>
                    <div className="hidden lg:block">Testimonals</div>
                    <div className="hidden lg:block">Contact</div>
                
            </div>
            <div className="flex gap-6">
                <div className="hidden lg:block">Change theme</div>
                <div className="hidden lg:block">Download cv</div>
                <div><IoMdMenu  className="w-9 h-9" /></div>
            </div>
        </div>
    )
}