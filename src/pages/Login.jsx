import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import {TbSocial} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import {Loading, CustomButton, TextInput} from '../components'
import { BgImage } from '../assets'
import {BsShare} from "react-icons/bs"
import {AiOutlineInteraction} from "react-icons/ai"
import {ImConnection} from "react-icons/im"


const Login = () => {
  const {
    register,
    handleSubmit, 
    formState: { errors }
  } = useForm({
    mode: "onChange"
  })

  const onSubmit = async(data) =>{}

  const [errMsg, setErrMsg] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8- lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl'>

      {/* LEFT */}
      <div className='w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center' >
        <div className='w-full flex flex-row gap-2 items-center mb-6'>
          <div className='p-2 bg-[#065ad8] rounded text-white'>
              <TbSocial />
          </div>
            <span className='text-2xl text-[#065ad8] font-semibold' >
              ShareFun
            </span>
        </div>
        <p className='text-ascent-1 text-base font-semibold'>
          Log in to your account
        </p>
        <span className='text-sm mt-2 text-ascent-2'>Welcome Back</span>
        <form className='py-8 flex flex-col gap-5'
          onSubmit={handleSubmit(onsubmit)}>
          <TextInput 
          name="email" 
          placeholder="email@example.com"
          label="Email Address"
          type="email"
          register={
            register("email", {
              required: "Email Address is required"
            })}
            styles="w-full rounded-full"
            labelStyle='ml-2'
            error={errors.email ? errors.email.message : "" }
          />

          <TextInput 
          name="password" 
          placeholder="enter password"
          label="Password"
          type="password"
          register={
            register("password", {
              required: "Password is required"
            })}
            styles="w-full rounded-full"
            labelStyle='ml-2'
            error={errors.password ? errors.password.message : "" }
          />
          <Link 
            to="/reset-password"
            className='text-sm text-right text-blue font-semibold'
        > Forgot Password ?
        </Link>

        {
          errMsg?.message && (
            <span 
            className={`text-sm ${
              errMsg?.status == "failed"
              ? "text-[#f64949fe]"
              : "text-[#2ba150fe]"
            } mt-0.5 ` }>

            </span>
          )}

          {
            isSubmitting ? <Loading /> : <CustomButton 
            
            type="submit"
            containerStyle={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
            titie='Login'
            />
          }
        </form>
        <p className='text-ascent-2 text-sm text-center'>
          Don't have an account?{" "}
          <Link to='/register'
          className='text-[#065ad8] font-semibold ml-2 cursor-pointerx '>
          Create an Account
          </Link>

        </p>
      </div>
      
      {/* RIGHT */}
      <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue'>
          <div className='relative w-full flex items-center justify-center'>
            <img 
            src={BgImage} 
            alt="Bg Image"
            className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover' 
            />

            <div className='absolute flex items-center gap-1 bg-white right-5 top-5 py-2 px-5 rounded-full'>
                <BsShare size={10}/>
                <span className='text-xs font-medium'>Share</span>
            </div>

            <div className='absolute flex items-center gap-1 bg-white left-5 top-6 px-5 rounded-full'>
                <ImConnection size={10}/>
                <span className='text-xs font-medium'>Connect</span>
            </div>

            <div className='absolute flex items-center gap-1 bg-white left-3 bottom-1 py-2 px-5 rounded-full'>
                <AiOutlineInteraction/>
                <span className='text-xs font-medium'>Interact</span>
            </div>

          </div>
      </div>
      </div>
    </div>
  )
}

export default Login