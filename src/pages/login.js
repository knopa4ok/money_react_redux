import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../store/actions";

export default function LoginPage(){
    const dispatch = useDispatch();

    const submitLogin = (data) =>{
        dispatch(login(data))
    }
    
    return (
        <Card body className='mx-auto' style={{width: '20rem', marginTop: '10vh'}}>
            <LoginForm onSubmit={submitLogin} />
        </Card>
    )
}