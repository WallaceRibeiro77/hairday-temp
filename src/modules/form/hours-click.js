export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available");

    hours.forEach(( available )=>{
        available.addEventListener("click", (selected)=>{
            
            //removendo a classe de todas as li nao selecioandas
            hours.forEach(( hour ) =>{
                hour.classList.remove("hour-selected")
            })

            //adicionar a classe na li clickada
            selected.target.classList.add("hour-selected")
        })
    })
}