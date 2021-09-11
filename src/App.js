import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AlertComponent from "./components/Alert";
import LoginPage from "./pages/login";
import { nanoid } from 'nanoid'
import { useEffect } from "react";
import useInterval from "./components/useInterval";
import { logout, setErrors, validateToken } from "./store/actions";

export default function App({children}){
  const dispatch = useDispatch();
  const user = useSelector(state => state.root.user) || {};
  const errors = useSelector(state => state.root.errors) || false;
  const loading = useSelector(state => state.root.loading) ?? false;

  useEffect(() =>{
    if(user.token){
      validate_token()
    }// eslint-disable-next-line
  },[dispatch, user])

  useInterval(() => {
    validate_token()
  }, user.token? 60000 : null)

  const validate_token = () =>{
    dispatch(validateToken(user.token))
  }

  const deleteError = () => dispatch(setErrors(errors.shift()));

  const alerts = !errors? '' : <AlertComponent key={nanoid()} text={errors[0]} errorClear={deleteError}/>
  const content = loading? <div className='d-flex justify-content-center pt-5' ><Spinner animation='border' variant='primary' size='xxl' style={{width: '5rem', height: '5rem'}}/></div> : !user.token? <LoginPage /> : children
  
  return (
    <Container fluid>
      {alerts}
      {content}
    </Container>
  )
}
