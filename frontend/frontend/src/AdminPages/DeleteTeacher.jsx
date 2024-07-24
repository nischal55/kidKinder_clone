import axios from "axios";
import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function DeleteTeacher() {
    const {teacherId} = useParams();
    const navigate = useNavigate();

    if(confirm("Are you sure to Delete?")){
        axios.delete('/api/teacher/'+teacherId).then((res)=>{
            console.log(res.data)
            toast.success("Deleted Successfully")
            navigate('/dashboard/teachers')
        }).catch((err)=>{
            toast.error(err.response.data.message)
           })
    }else{
        navigate('/dashboard/teachers')
    }

    return (
        <>
            
        </>
    );
}

export default DeleteTeacher;