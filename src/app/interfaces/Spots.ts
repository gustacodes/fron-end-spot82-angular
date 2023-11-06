import { Client } from "./Client";
import { MonthlyPayer } from "./MonthlyPayer";

export interface Spots {
    id: number,
    spotClient: number,
    statusSpot: string,
    client: Client,
    monthlypayer?: MonthlyPayer
}