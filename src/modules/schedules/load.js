import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector("#date")

export async function schedulesDay(){
    //obtem a data do input
    const date = selectedDate.value
    
    //buscar na api os agendamentos para carregar do lado direito da tela
    const dailySchedules = await scheduleFetchByDay({ date })

    //exibe os agendamentos
    schedulesShow({ dailySchedules })
    
    //renderiza as horas disponiveis
    hoursLoad({date, dailySchedules })
    
}
// carregar os horarios disponiveis(horario futuro + nao agendado) do lado esquerdo(form)