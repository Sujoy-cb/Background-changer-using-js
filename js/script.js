const randomColors = ["#A66CFF","#9C9EFE" ,"#AFB4FF","#B1E1FF", "#1C3879", "#607EAA", "#EAE3D2", "#31087B", "#FA2FB5", "#FFC23C", "#FCF8E8", "#76549A", "#EAE509", "#7DCE13", "#5800FF", "#0096FF", "#00D7FF", "#72FFFF", "#3CCF4E", "#F90716"]



const button = document.getElementById('btn')
const color = document.querySelector('.color')


button.addEventListener("click", ()=>{
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = randomColors[randomNumber];
    color.textContent = randomColors [randomNumber]
})


function getRandomNumber(){
    return Math.floor(Math.random() * randomColors.length)
}

