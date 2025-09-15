import type React from "react"

interface AvaratInterface {
    title?: string
    subtitle?: string
    image?: string
}
const Avatar: React.FC<AvaratInterface> = ({ title, subtitle = "write subtitle", image }) => {
    return (
        <div className='flex gap-3 p-3 items-center'>
            {
                image &&
                <img src={image} className='rounded-full h-12 w-12 object-content' />
            }
            {
                (title && subtitle) && <div className='flex flex-col'>
                    <h1 className='text-lg text-zinc-300 font-medium'>{title}</h1>
                    <label className='text-zinc-400'>{subtitle}</label>
                </div>
            }

        </div>
    )
}

export default Avatar