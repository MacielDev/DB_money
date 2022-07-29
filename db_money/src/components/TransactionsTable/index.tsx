import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() => {
        fetch("http://localhost:3000/api/transactions")
            .then(response => response.json())
            .then(data => console.log(data))
    },[]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$1200</td>
                        <td>Desenvolvimento</td>
                        <td>12/04/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1200</td>
                        <td>casa</td>
                        <td>10/07/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}