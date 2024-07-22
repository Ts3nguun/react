import { Tag } from "./tag";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { RxCopy } from "react-icons/rx";
import { RiGithubLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";

export function Contact({ experience }) {
    return (
        <div>
            <div className="flex justify-center mb-4">
                <Tag text="Get in touch" />
            </div>
            <div className="flex-wrap ">
                What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
            </div>
            {/* <div>
                <p className="flex justify-center">What’s next? Feel free to reach out to me if you're looking for a</p>
                <p className="flex justify-center">a developer, have a query, or simply want to connect.</p>
            </div> */}
            <div className="flex justify-center">
                <CiMail key={CiMail}/>
                <p>
                    reachsagarshah@gmail.com
                </p>
                <RxCopy />
            </div>

            <div className="flex justify-center">
                <LuPhone key ={LuPhone}/>
                <p>
                    +91 8980500565
                </p>
                <RxCopy />
            </div>
            <div className="mx-auto flex justify-center">
                <p>You may also find me on these platforms!</p>
            </div>
            <span className="flex justify-center">
                <RiGithubLine className=" w-[36px] h-[36px]" />
                <PiTwitterLogo className=" w-[36px] h-[36px]" />
                <FaFigma className=" w-[36px] h-[36px]" />
            </span>
            <span className="flex justify-center">
                2023 | Designed and coded with ❤️️ by Sagar Shah
            </span>
        </div>
    )
}