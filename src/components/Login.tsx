import { Link } from "react-router-dom"
import Button from "./shared/Button"
import Card from "./shared/Card"
import Input from "./shared/Input"
import { AuthService } from "../api/authService"
import { toast } from "react-toastify"
import Form from "./shared/Form"
import type { LoginPayload } from "../api/authTypes"
import axios from "axios"

const Login = () => {
  const handleLogin = async (e: LoginPayload) => {
    const params = {
      email: e.email,
      password: e.password
    }
    try {
      const res = await AuthService.login(params);
      toast.success(res.message)

    } catch (err: unknown) {
      if (axios.isAxiosError(err))
        return toast.error(err.response?.data?.message)
      if (err instanceof Error)
        return toast.error(err.message)
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-6/12 animate__animated animate__fadeIn">
        <Card noPadding>
          <div className="grid grid-cols-2">
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-xl font-bold text-black">SIGN IN</h1>
                <p className="text-gray-500">Start your first chat now !</p>
              </div>
              <Form className="space-y-6" onValue={(e: any) => handleLogin(e)} >
                <Input
                  name="email"
                  placeholder="Email id"
                />

                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <Button type="danger" icon="arrow-right-up-line">Sign in</Button>
              </Form>
              <div className="flex gap-2">
                <p>Don`t have an account ?</p>
                <Link to="/signup" className="text-green-400 font-medium hover:underline">Sign up</Link>
              </div>
            </div>
            <div className="overflow-hidden h-[500px] flex items-center justify-center rounded-r-xl"
              style={{
                backgroundImage: 'linear-gradient( 89.7deg,  rgba(0,0,0,1) -10.7%, rgba(53,92,125,1) 88.8% )'
              }}
            >
              <img src="/images/login.svg" alt="auth" className="w-[70%] animate__animated animate__slideInUp animate__faster" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Login