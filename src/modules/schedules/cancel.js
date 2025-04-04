import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

// gera evento de click para cada lista(manha, tarde e noite)
periods.forEach((period) =>{
    //captura o evento de click na lista
    period.addEventListener("click", async (e)=>{

        if(e.target.classList.contains("cancel-icon")){

            //obtem a li pai do elemento clickado
            const item = e.target.closest("li")
            //pega o id do agendamento para remover
            const { id } = item.dataset

            //confirma que o id foi selecionado
            if(id){

                //confirma se o usuario quer remover ou cancelar o agendamento
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    //faz a requisição para cancelar na API
                    await scheduleCancel({ id })
                    //recarrega o fluxo de agendamentos
                    schedulesDay()
                }
            }
        }
    })
})