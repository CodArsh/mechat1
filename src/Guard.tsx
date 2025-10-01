import { useContext, useEffect } from "react"
import Context from "./Context"
import CatchError from "./lib/CatchError"
import { AuthService } from "./api/authService"
import { Outlet, useNavigate } from "react-router-dom"

const Guard = () => {
    const { session, setSession } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        getSession()
    }, [])

    const getSession = async () => {
        try {
            const data = await AuthService.session()
            console.log(data)
            setSession(data)
        } catch (error: unknown) {
            CatchError(error)
            navigate('/login')
        }
    }
    if (session === null)
        return session

    return <Outlet />
}

export default Guard
