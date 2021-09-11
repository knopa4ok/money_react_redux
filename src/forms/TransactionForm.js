import { Button, Form, InputGroup } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

let TransactionForm = ({ handleSubmit }) => {

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor='name' className='fw-bold'>
                    Запись:
                </Form.Label>
                <Form.Text>
                    &nbsp;<i>имя сумма описание</i>
                </Form.Text>
                <InputGroup>
                    <Field className='' id='date' name='date' component='input' type='date' />
                    <Field className='form-control' id='name' name='name' component='input' type='text' placeholder='имя сумма описание' defaultValue=''/>
                    <InputGroup.Text><Button className='' type='sumbit'>Добавить</Button></InputGroup.Text>
                </InputGroup>
                
            </Form.Group>          
        </Form>
    )
}

TransactionForm = reduxForm({form: 'transaction_form'})(TransactionForm)

export default TransactionForm