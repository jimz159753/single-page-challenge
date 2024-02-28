import { IField } from "../interfaces/data.interface"

export const ArrtoObj = (riskFactors: IField[], keyTrends: IField[], keyAsks: IField[]) => {
    return riskFactors.map((el, idx) => ({
        riskFactor: el.title,
        keyTrend: keyTrends[idx].title,
        keyAsk: keyAsks[idx].title
    }))
}