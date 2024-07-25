import { Tag } from "./tag";
import { CiShare1 } from "react-icons/ci";



const workData = [
    {
        title: "Fiskil",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tags: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git",],
        image: "images/app.png",
        link: ""
    }, {
        title: "Fiskil",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tags: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git",],
        image: "images/app.png",
        link: ""
    }, {
        title: "Fiskil",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tags: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git",],
        image: "images/app.png",
        link: ""
    }, 
]


export default function Works() {
    return (
        <div className="max-w-6xl mx-auto" id="Work">
            <div className="flex justify-center mb-4 mt-16">
                <Tag text="Work" />
            </div>
            <div className="text-gray-600 text-center">Some of the noteworthy projects I have built:</div>
            <div className="px-4">
                {workData.map((work, index) => (
                    <WorkCard key={work.title} work={work} isReverse={index % 2 === 1} />
                ))}
            </div>
        </div>
    );
}

function WorkCard({ isReverse = false, work }) {
    return (
        <div className={`mb-5 rounded-lg shadow md:flex  ${isReverse ? "md:flex-row-reverse" : ""}`}>
            <div className="p-4 md:flex-1 bg-slate-300">
                <img src="/images/app.png" width={200} height={200} className="w-full rounded-lg shadow" />
            </div>

            <div className="p-4 md:flex-1 py-10 px-10">
                <div className="mb-5 font-bold">{work.title}</div>
                <div className="mb-5">{work.text} </div>
                <div className="flex flex-wrap gap-2 mb-5">
                    {work.tags.map((tags) => (
                    <Tag key={tags} text={tags} />
                    ))}
                </div>
                <CiShare1 />
            </div>
        </div>
    );
}