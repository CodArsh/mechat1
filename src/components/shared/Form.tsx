import { type FC, type FormEvent, type ReactNode } from 'react'

interface FormInterface {
  children: ReactNode
  className: string
  onValue?: (event: any) => void
}

const Form: FC<FormInterface> = ({ children, className, onValue }) => {

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data: Record<string, any> = {}
    formData?.forEach((value, name) => {
      data[name] = value
    })
    if (onValue) {
      onValue(data)
    }
  }

  return (
    <form className={className} onSubmit={handleForm}>
      {children}
    </form>
  )
}

export default Form
