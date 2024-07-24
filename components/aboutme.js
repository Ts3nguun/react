import { Tag } from "@/components/tag";

export function Aboutme() {
    return (
        <div className="py-16 px-4 lg:w-[1280px] mx-auto ">
            <div className="flex justify-center mb-3">
                <Tag text="About me" />
            </div>
            <div className="md:flex gap-20">
                <div>
                    <img className="order-1 hidden md:block " src="images/Aboutme.png" />
                    <img className="block md:hidden md:justify-center mx-auto" src="images/Aboutme1.png" />
                </div>
                <span className="w-[584px] h-[694px]">
                    <p className="text-[30px]">
                        Curious about me? Here you have it:
                    </p><br/>
                    <p className="text-gray-600">
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    </p><br/>
                    <p className="text-gray-600">
                        I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                    </p><br/>
                    <p className="text-gray-600">
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                    </p><br/>
                    <p className="text-gray-600">
                        When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                    </p><br/>
                    <div>
                        Finally, some quick bits about me.
                        <ul className="flex list-disc px-10">
                            <div className="mr-5">
                                <li className="text-gray-600">B.E. in Computer Engineering</li>
                                <li className="text-gray-600">Full time freelancer</li>
                            </div>
                            <div>
                                <li className="text-gray-600">Avid learner</li>
                                <li className="text-gray-600">Aspiring indie hacker</li>
                            </div>
                        </ul>
                    </div><br/>
                    <div className="text-gray-600">
                    One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
                    </div>
                </span>
            </div>
        </div>
    )
}