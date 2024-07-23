import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function DeleteClass() {
    const {Classid} = useParams();
    const navigate = useNavigate();


    if(confirm("Are you Sure to Delete?")){
       axios.delete('/api/classes/'+Classid).then((res)=>{
            console.log(res.data)
            toast.success("Deleted Successfully")
            navigate('/dashboard/classes')
       }).catch((err)=>{
        toast.error(err.response.data.message)
       })
    }else{
        navigate('/dashboard/classes')
    }

    return (
        <>
            
        </>
    );
}

export default DeleteClass;