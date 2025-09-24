import { Link } from "react-router-dom"
import Button from "./shared/Button"
import Card from "./shared/Card"
import Input from "./shared/Input"
import Form from "./shared/Form"
import type { SignupPayload } from "../api/authTypes"
import { AuthService } from "../api/authService"
import { toast } from "react-toastify"
import axios from "axios"

const Signup = () => {
  const handleSignup = async (e: SignupPayload) => {
    const params = {
      fullname: e.fullname,
      mobile: e.mobile,
      email: e.email,
      password: e.password
    }
    try {
      const res = await AuthService.signup(params);
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
                <h1 className="text-xl font-bold text-black">SIGN UP</h1>
                <p className="text-gray-500">Start your first chat now !</p>
              </div>
              <Form className="space-y-6" onValue={(e: any) => handleSignup(e)} >
                <Input
                  name="fullname"
                  placeholder="Fullname"
                />

                <Input
                  name="email"
                  placeholder="Email id"
                />

                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <Input
                  name="mobile"
                  placeholder="Mobile"
                />

                <Button type="danger" icon="arrow-right-up-line">Sign up</Button>
              </Form>
              <div className="flex gap-2">
                <p>Already have an account ?</p>
                <Link to="/login" className="text-green-400 font-medium hover:underline">Sign in</Link>
              </div>
            </div>
            <div className="overflow-hidden h-[500px] flex items-center justify-center rounded-r-xl"
              style={{
                backgroundImage: 'linear-gradient( 89.7deg,  rgba(0,0,0,1) -10.7%, rgba(53,92,125,1) 88.8% )'
              }}
            >
              <img src="/images/auth.svg" alt="auth" className="w-full animate__animated animate__slideInUp animate__faster" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Signup