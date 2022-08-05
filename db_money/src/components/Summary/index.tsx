
import { Container } from './styles';

import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary(){
    const { transactions } = useContext(TransactionsContext);
    console.log(transactions);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highLight-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}