import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
    try {
        //faz a requisição para enviar os dados do agendamento.
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when }),
        })

        //exibe mensagem de agendamento realizado
        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        alert("Não foi possivel agendar, tente novamente mais tarde.")
        console.log(error)
    }
}