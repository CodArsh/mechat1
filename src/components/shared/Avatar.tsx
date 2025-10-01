import type { ReactNode } from "react"
import type React from "react"

interface AvaratInterface {
    dpSize?: "lg" | "md" | "sm"
    title?: string | null
    subtitle?: ReactNode
    image?: string
    titleColor?: string
    subtitleColor?: string
    onClick?: () => void
}
const Avatar: React.FC<AvaratInterface> = ({onClick, dpSize = "lg", title, subtitle = "write subtitle", image, titleColor = "#d4d4d8", subtitleColor = "#a1a1aa" }) => {
    return (
        <div className='flex gap-3 p-3 items-center'>
            {
                image &&
                <img onClick={onClick} src={image} className={`rounded-full  ${dpSize === 'sm' ? 'h-6 w-6' : dpSize === 'md' ? 'h-12 w-12' : 'h-17 w-17'} object-content`} />
            }
            {
                (title && subtitle) && <div className='flex flex-col'>
                    <h1 className={`${dpSize === 'md' ? 'text-sm' : 'text-xl'} font-medium capitalize `} style={{ color: titleColor }}>{title}</h1>
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