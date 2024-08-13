import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

function Login() {
    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) =>{ console.log(data)}


    return (


        <>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button" onClick={()=>{document.getElementById("my_modal_3").close()}} >✕</button>
                            <h1 className="font-bold text-lg text-center">Login</h1>
                            <div className="mt-4 space-y-2 ">
                                <span>Email</span>
                                <br />
                                <input type="text" 
                                    placeholder="email"
                                    className="w-[100%] border outline-none py-1 rounded-md ps-1 dark:bg-slate-900 dark:text-white"
                                    {...register("email", {required: "this is required"})}
                                />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <div className="mt-4 space-y-2">
                            <span>Password</span>
                                <br />
                                <input type="password" 
                                    className="w-[100%] border outline-none py-1 rounded-md ps-1 dark:bg-slate-900 dark:text-white"
                                    placeholder="password"
                                    {...register("password" ,{required: "this is required" })}
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>
                            <div className="flex justify-between items-center mt-2 w-[100%]">
                                <button className="btn bg-pink-500 hover:bg-pink-900 text-white" type="submit">Login</button>
                                <div>
                                <p>Not registered? <Link to="/signup" className="underline text-blue-500" onClick={()=>{document.getElementById("my_modal_3").close()}}>Signup</Link></p>
                                
                                </div>
                            </div>
                        </form>

                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login