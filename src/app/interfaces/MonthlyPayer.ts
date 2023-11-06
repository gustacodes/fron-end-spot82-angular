import { Payment } from "./Payment";

export interface MonthlyPayer {
    id: number,
    name: string,
    contact: string,
    cpf: string,
    rua: string,
    district: string,
    number: number,
    statusPayment?: '',
    dueDate: string,
    spot: number,
    paymentMonthlyPayer: Payment
}