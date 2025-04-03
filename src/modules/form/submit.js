import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")
const clientName = document.querySelector("#client")

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual e define a data minima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (e) => {
    e.preventDefault()

    try {
        // recuperando o nome do cliente
        const name = clientName.value.trim()
        if(!name) return alert("informe o nome do client!")

        //recupera o horario selecionado
        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected) return alert("Selecione um horario")

        //recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")

        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //gera um ID
        const id = new Date().getTime()
    } catch (error) {
        alert("Não foi possivel realizar o agendamento")
        console.log(error)
    }
}