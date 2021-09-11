import { Button, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

let LoginForm = props => {
    const { handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor='name'>
                    Username: 
                </Form.Label>
                <Field className='form-control' id='name' name='name' component='input' type='text' />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Password: 
                </Form.Label>
                <Field className='form-control' name='password' component='input' type='password' />
            </Form.Group>
            <Form.Group>
                <Button className='form-control' type='sumbit'>Login</Button>
            </Form.Group>
            
        </Form>
    )
}

LoginForm = reduxForm({form: 'login_form'})(LoginForm)

export default LoginForm