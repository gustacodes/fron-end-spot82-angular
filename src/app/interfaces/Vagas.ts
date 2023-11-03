import { Cliente } from "./Cliente";
import { Mensalista } from "./Mensalista";

export interface Vagas {
    id: number,
    vagaDoCliente: number,
    statusDaVaga: string,
    cliente: Cliente,
    mensalista?: Mensalista
}