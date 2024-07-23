import { RiGithubLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";


export function Hero() {
    return (
        <div className="md:w-full py-16 px-4 md:flex md:py-[70px] md:px-[86px]  ">
                <img className="order-1 hidden md:block ml-24" src="images/Hero.png"/>
                <img className="block md:hidden md:justify-center mx-auto" src="images/Hero1.png" />
            <div className="w-full  gap-[48px]">
                <h1 className="text-[60px]">Hi, I’m Sagar 👋</h1>
                <div class="flex-wrap">
                    <p>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
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

// 