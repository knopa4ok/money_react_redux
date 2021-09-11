import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInterval from '../components/useInterval';
import TransactionForm from '../forms/TransactionForm';
import { sendGet, setErrors } from '../store/actions';
import moment from 'moment/min/moment-with-locales'

export default function Transactions(){
    const dispatch = useDispatch();
    const transactions = useSelector(state => state.root.transactions);
    const token = useSelector(state => state.root.user.token);
    const loading = useSelector(state => state.root.loading);

    useEffect(() =>{
        if(!loading && !transactions){
            getTransactions()
        } // eslint-disable-next-line
    },[]);

    useInterval(() =>{
        getTransactions()
    }, transactions? 30000 : null)

    const getTransactions = () => dispatch(sendGet('/api/transaction', 'transactions', token));

    const createTransaction = data => {
        const reg = /^(?<name>[\w, ]+) (?<summ>-*\d+) (?<description>[\w, ]*)$/gu;
        const matches = reg.exec(data.name);
        if(!matches || !matches.groups){
            dispatch(setErrors(['Имя или сумма заполнены не верно']))
            return;
        }else if(!data.date){
            data.date = moment().format('YYYY-MM-DD');
        }
        data.name = matches.groups.name;
        data.summ = matches.groups.summ;
        data.description = matches.groups.description;
        
        
    }

    return (
        <TransactionForm onSubmit={createTransaction} />
    )
}