import { Tag } from "./tag";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { RxCopy } from "react-icons/rx";
import { RiGithubLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";

export function Contact({ experience }) {
    return (
        <div className="px-4 py-16" id="Contact">
            <div className="flex justify-center mb-4">
                <Tag text="Get in touch" />
            </div>
            <div className="text-center max-w-[600px] mx-auto my-8 text-gray-600">
                What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
            </div>
            <div className="flex justify-center items-center mb-3">
                <CiMail key={CiMail}/>
                <b>
                    reachsagarshah@gmail.com
                </b>
                <RxCopy />
            </div>

            <div className="flex justify-center items-center mb-3">
                <LuPhone key ={LuPhone}/>
                <b>
                    +91 8980500565
                </b>
                <RxCopy />
            </div>
            <div className="mx-auto flex justify-center mb-3">
                <p>You may also find me on these platforms!</p>
            </div>
            <span className="flex justify-center">
                <RiGithubLine className=" w-[36px] h-[36px]" />
                <PiTwitterLogo className=" w-[36px] h-[36px]" />
                <FaFigma className=" w-[36px] h-[36px]" />
            </span>
        </div>
    )
}