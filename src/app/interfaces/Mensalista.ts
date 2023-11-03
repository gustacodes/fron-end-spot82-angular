import { Pagamento } from "./Pagamento";

export interface Mensalista {
    id: number,
    nome: string,
    contato: string,
    cpf: string,
    rua: string,
    bairro: string,
    numero: number,
    statusPagamento?: '',
    dataDeVencimento: string,
    vaga: number,
    pagamentoMensalista: Pagamento
}