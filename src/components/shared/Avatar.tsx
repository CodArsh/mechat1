import type { ReactNode } from "react"
import type React from "react"

interface AvaratInterface {
    dpSize?: "lg" | "md"
    title?: string
    subtitle?: ReactNode
    image?: string
    titleColor?: string
    subtitleColor?: string
}
const Avatar: React.FC<AvaratInterface> = ({ dpSize = "lg", title, subtitle = "write subtitle", image, titleColor = "#d4d4d8", subtitleColor = "#a1a1aa" }) => {
    return (
        <div className='flex gap-3 p-3 items-center'>
            {
                image &&
                <img src={image} className={`rounded-full  ${dpSize === 'md' ? 'h-12 w-12' : 'h-17 w-17'} object-content`} />
            }
            {
                (title && subtitle) && <div className='flex flex-col'>
                    <h1 className={`${dpSize === 'md' ? 'text-sm' : 'text-xl'} font-medium `} style={{ color: titleColor }}>{title}</h1>
                    {/* <label style={{ color: subtitleColor }}>{subtitle}</label> */}
                    <div className={`${dpSize === 'md' ? 'text-sm' : 'text-md'} `} style={{ color: subtitleColor }}>
                        {subtitle}
                    </div>
                </div>
            }

        </div>
    )
}

export default Avatar