import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.querySelector("#hours");

export function hoursLoad({ date }){
    //limpa a lista de horarios
    hours.innerHTML = ""

    const opening = openingHours.map((hour)=>{
        //recupera somente a hora
        const [schedulesHours] = hour.split(":")
        
        //adiciona a hora na date e verificar se esta no passado.
        const isHourPast = dayjs(date).add(schedulesHours, "hour").isBefore(dayjs())

        return {
            hour,
            available: !isHourPast,
        }
    })

    //renderizar os horarios

    opening.forEach(({ hour, available })=>{
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        //verificar se tem um cabeçalho
        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if(hour === "13:00"){
            hourHeaderAdd("Tarde")
        }else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }
        
        hours.append(li)
    })

    //adiciona o evento de click nos horarios disponiveis
    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("çi")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}