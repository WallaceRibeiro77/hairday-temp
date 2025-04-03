import { schedulesDay } from "../schedules/load"

//Seleciona o input de data
const selectedDate = document.querySelector("#date")

//recarrega a lista de horarios quando o input de data mudar.
selectedDate.onchange = () => schedulesDay()