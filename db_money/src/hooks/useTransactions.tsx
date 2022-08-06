import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface Transaction{
    id: number;
    title:string;
    amount: number;
    type: string;
    category:string;
    createdAt: string;
}
interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: Transaction[];createTransaction: (transaction:TransactionInput)=> Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const[transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    },[]);

    async function createTransaction(transactionInput:TransactionInput){
       
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions,createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context;
}



//PODEMOS TIPAR DE TRÊS FORMAS:

// 1)Criando uma interface e não passando nem id e nem createdAT

// interface TransactionInput{
//     title:string;
//     amount: number;
//     type: string;
//     category:string;
// }

//2) Usando "Pick" e passando quais propriedades deveremos ter 
// e seus respectivos tipos

// type TransactionInput = Pick<Transaction,'title'|'amount'|'type'|'category'>



//3) Usando o Omit<> e passando os campos que eu não quero que sejam passados.
//type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>