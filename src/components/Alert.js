import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';

export default function AlertComponent({text, errorClear}){
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            errorClear();
        }, 10000)
    }, [])

    return !text ? '' : <Alert className='w-50 end-0 top-0 position-absolute' show={show} key={nanoid()} variant='danger'>{text}</Alert>
}