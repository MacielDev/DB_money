import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';


import { GlobalStyle } from "./styles/global";

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Modal para criar nova transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

