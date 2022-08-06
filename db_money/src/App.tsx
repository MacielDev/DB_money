import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';


import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  // CRIANDO NOSSO MODAL PARA CADASTRO DE NOVA TRANSAÇÃO 

  // DRIANDO O ESTADO PARA CONTROLAR A ABERTURA/FECHAMENTO DO MODAL
  const [isNewTransactionModalOpen , setIsNewTransactionModalOpen] = useState(false);

  //FUNÇÃO QUE ABRE O MODAL
  function handleOpenNewTransactionModal():void{
    setIsNewTransactionModalOpen(true);
  }

  // FUNÇÃO QUE FECHA O MODAL
  function handleCloseNewTransactionModal():void{
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}

