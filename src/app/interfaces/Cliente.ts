import { Pagamento } from "./Pagamento"

export class Cliente {
    id!: number
    nome!: string
    veiculo!: string
    tipo!: string
    placa!: string
    vaga: number = 9
    data?: Date
    horaEntrada!: string
    horaSaida?: string
    periodo?: string
    pagamento?: string
}