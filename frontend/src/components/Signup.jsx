import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = async (data)=>{
        const userInfo = {
          fullname: data.name,
          email: data.email,
          password: data.password
        }

        await axios.post("http://localhost:4001/user/signup", userInfo)
              .then((res)=>{
                  toast.success(res.data.message)
                  localStorage.setItem("User", JSON.stringify(res.data.user))
              }).catch((err)=>{
                toast.error(err.response.data.message);
              })


        
    }


  return (
    <>
    <div className="flex h-screen justify-center items-center dark:bg-slate-900 dark:text-white">
          <div className='w-80 md:w-96 rounded-md dark:border shadow-md flex-col justify-center items-center px-6 py-6'>
          <h1 className='font-bold text-lg text-center'>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <br />
                        <input type="text"
                        placeholder='Name'
                        className='w-[100%] border outline-none py-1 rounded-md ps-1 dark:bg-slate-900 dark:text-white'
                        {...register("name", {required : "This field is required."})}
                         />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="text"
                        placeholder='Email'
                        className='w-[100%] border outline-none py-1 rounded-md ps-1 dark:bg-slate-900 dark:text-white'
                        {...register("email", {required : "This is requird field"})}
                         />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input type="password"
                        placeholder='Password'
                        className='w-[100%] border outline-none py-1 rounded-md ps-1 dark:bg-slate-900 dark:text-white'
                        {...register("password", {required : "This field is required"})}
                         />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="flex justify-between items-center mt-6 w-[100%]">
                                <button className="btn bg-pink-500 hover:bg-pink-900 text-white" type="submit">Register</button>
                                <div>
                                <p>Have an Account? <span className="underline text-blue-500 cursor-pointer" onClick={()=>{document.getElementById("my_modal_3").showModal()}}>Login</span></p>
                                
                                </div>
                            </div>  
            </form>
          </div>
    </div>
    </>
  )
}

export default Signup