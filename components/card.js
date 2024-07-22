export function Card({ experience }) {
    return (
        <div className="lg:flex p-8 justify-between  mx-auto space-y-5 rounded-xl lg:w-[896px] shadow bg-white mb-5 max-w-7xl">
            <div className="w-[206px] h-[28px] lg:order-1">
                <img src="./images/logo-upwork.svg"></img>
            </div>
            <div className="md:w-36 h-6 lg:order-3">
                <span>{experience.startDate}</span>-
                <span>{experience.endDate}</span>
            </div>
            <div className="md:w-96 h-56 lg:order-2">
                <p>{experience.title}</p>
                <ul className="list-disc">
                    {experience.listItems.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}