import { FC, ReactElement, type ReactNode } from 'react'

interface CardInterface {
  titleIcon?: string
  children?: ReactElement
  title?: ReactNode
  footer?: ReactElement
  devider?: boolean
  noPadding?: boolean
}

const Card: FC<CardInterface> = ({ noPadding = false, titleIcon, children, title, footer, devider = false }) => {
  return (
    <div className={`bg-white shadow-lg ${noPadding ? '' : 'px-5 py-4'} rounded-lg border border-gray-100 space-y-2`}>

      {
        title &&
        <div className='flex space-x-2 items-center'>
          {titleIcon && <i className={`${titleIcon} text-zinc-800`}></i>}
          <h1 className='flex justify-between items-center w-full text-lg font-semibold text-zinc-800 capitalize py-1'>{title}</h1>
        </div>
      }
      {
        devider && <div className='border-b border-b-gray-200 -mx-4 my-3' />
      }
      {
        children &&
        <div className='text-gray-500'>{children}</div>
      }
      {
        footer &&
        <div className='flex justify-between items-center w-full text-lg font-semibold text-zinc-800 capitalize py-1 mt-4'>
          {footer}
        </div>
      }
    </div>
  )
}

export default Card