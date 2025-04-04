import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
    try {
        //faz a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //converte para json
        const data = await response.json()

        //filtra os agendamentos pelo dia selecionado
        const dailySchedules = data.filter(( schedule ) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("Não foi possivel buscar os agendamentos do dia selecionado.")
    }
}