import { RiGithubLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";


export function Hero() {
    return (
        <div className="md:w-full py-16 px-4 md:py-[70px] md:px-[86px] md:flex ml-20" >
                <img className="order-1 hidden md:block " src="images/Hero.png"/>
                <img className="block md:hidden ml-11" src="images/Hero1.png " />
            <div className="w-full  gap-[48px]">
                <div class="flex-wrap">
                    <p>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
                </div>
                <div>
                    <ul className="h-[56px] gap-[64px] mt-11 mb-11">
                        <li className="flex"><SlLocationPin className="w-[20px] h-[20px]"/>Ahmedabad, India</li>
                        <li className="flex"><img src="images/Dot.png"></img>Available for new projects</li>
                    </ul>
                </div>
                <div className="flex">
                    <RiGithubLine className=" w-[36px] h-[36px]"/>
                    <PiTwitterLogo className=" w-[36px] h-[36px]"/>
                    <FaFigma className=" w-[36px] h-[36px]"/>
                </div>
            </div>

        </div>
    )
}