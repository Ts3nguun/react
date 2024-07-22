import { Tag } from "./tag";

const icons = [
    {
        name: 'javascript.svg',
        title: 'Javascript'
    },
    {
        name: 'typescript.svg',
        title: 'Typescript'
    },
    {
        name: 'react.svg',
        title: 'React'
    },
    {
        name: 'nextjs.svg',
        title: 'Next.js'
    },
    {
        name: 'nodejs.svg',
        title: 'Node.js'
    },
    {
        name: 'express.svg',
        title: 'Express.js'
    },
    {
        name: 'nest.svg',
        title: 'Nest.js'
    },
    {
        name: 'socket.svg',
        title: 'Socket.io'
    },
    {
        name: 'postgresql.svg',
        title: 'PostgreSQL'
    },
    {
        name: 'mongodb.svg',
        title: 'MongoDB'
    },
    {
        name: 'sass.svg',
        title: 'Sass/Scss'
    },
    {
        name: 'tailwindcss.svg',
        title: 'Tailwindcss'
    },
    {
        name: 'figma.svg',
        title: 'Figma'
    },
    {
        name: 'cypress.svg',
        title: 'Cypress'
    },
    {
        name: 'storybook.svg',
        title: 'Storybook'
    },
    {
        name: 'git.svg',
        title: 'Git'
    }
];

export function Skills() {
    return (
        <main className="ml-24">
            <div className="flex justify-center">
                <Tag text="About me" />
            </div>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-8 md:m-auto ml-5">
                {icons.map((icon , index) => (
                <div className="flex-col gap-2 items-center">
                    <div>
                        <img src={"./icons/" + icon.name}></img>
                    </div>
                    <span>{icon.title}</span>
                </div>
                ))}
            </div>
        </main>
    );
}