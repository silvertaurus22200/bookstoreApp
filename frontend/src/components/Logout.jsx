import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {

    const [userAuth, setUserAuth] = useAuth();

    const handleLogout = async ()=>{
        localStorage.removeItem("User");
        setUserAuth({...userAuth, User : null});
        window.location.reload();
        toast.success("logout successful");

        
    }

    return ( 
        <>
            <button className="hover:bg-pink-500 hover:text-white p-2 bg-slate-900 text-white rounded-md font-bold text-lg border" onClick = {handleLogout}>Logout</button>
  
            
        </>
     );
}
 
export default Logout;