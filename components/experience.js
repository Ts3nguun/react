import { Tag } from "@/components/tag";

export function Experience({ props }) {
    return (
        <div className="mt-20">
            <div className="flex justify-center">
                <Tag text="Experience" />
            </div>
            <div className="text-gray-600 text-center">
                Here is a quick summary of my most recent experiences:
            </div>

        </div>
    )
}