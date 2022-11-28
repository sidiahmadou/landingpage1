

const menu = document.getElementById("menu")
menu.addEventListener("click", function(){
    console.log('ok')
    document.getElementById("navbar").classList.toggle('hidden')
})


const question = document.querySelectorAll('.questions')

for (let i =0;i<=question.length;i++){
    question[i].addEventListener('click', function(){
        document.getElementById(`question${i+1}`).classList.toggle('hidden')
    })
}
