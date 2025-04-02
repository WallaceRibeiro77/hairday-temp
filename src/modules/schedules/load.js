import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector("#date")

export function schedulesDay(){
    //obtem a data do input
    const date = selectedDate.value    

    //renderiza as horas disponiveis
    hoursLoad({date})
    
}
//buscar na api os agendamentos para carregar do lado direito da tela
// carregar os horarios disponiveis(horario futuro + nao agendado) do lado esquerdo(form)