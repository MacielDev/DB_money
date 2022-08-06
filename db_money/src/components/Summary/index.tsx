
import { Container } from './styles';

import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

import {  useTransactions } from '../../hooks/useTransactions';

export function Summary(){
    const { transactions } = useTransactions();
    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type == 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }   
        return acc;
    },{
        deposits:0,
        withdraws:0,
        total:0
    })

    function formatValue(value:number){

        return new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency:'BRL'
     }).format(value)
      
    }

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="entradas"/>
                </header>
                <strong>
                    {formatValue(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="saidas" />
                </header>
                <strong>
                    -{formatValue(summary.withdraws)}
                    
                </strong>
            </div>
            <div className="highLight-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="" />
                </header>
                <strong>
                    {formatValue(summary.total)}
                </strong>
            </div>
        </Container>
    );
}