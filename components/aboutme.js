import { Tag } from "@/components/tag";

export function Aboutme() {
    return (
        <div className="p-[80px]">
            <div className="flex justify-center">
                <Tag text="About me" />
            </div>
            <div className="md:flex gap-11">
                <div>
                    <img className="order-1 hidden md:block " src="images/Aboutme.png" />
                    <img className="block md:hidden md:justify-center" src="images/Aboutme1.png" />
                </div>
                <span className="w-[584px] h-[694px]">
                    <p>
                        Curious about me? Here you have it:
                    </p><br/>
                    <p>
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    </p><br/>
                    <p>
                        I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                    </p><br/>
                    <p>
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                    </p><br/>
                    <p>
                        When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                    </p><br/>
                    <div>
                        Finally, some quick bits about me.
                        <ul className="flex list-disc">
                            <div className="mr-5">
                                <li>B.E. in Computer Engineering</li>
                                <li>Full time freelancer</li>
                            </div>
                            <div>
                                <li>Avid learner</li>
                                <li>Aspiring indie hacker</li>
                            </div>
                        </ul>
                    </div><br/>
                    <div>
                    One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
                    </div>
                </span>
            </div>
        </div>
    )
}