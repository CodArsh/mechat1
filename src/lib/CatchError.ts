import axios from 'axios'
import { toast } from 'react-toastify'

const CatchError = (err:unknown) => {
    if (axios.isAxiosError(err))
        return toast.error(err.response?.data?.message)
    if (err instanceof Error)
        return toast.error(err.message)
}

export default CatchError
