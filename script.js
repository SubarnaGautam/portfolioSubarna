const experienceBtn = document.querySelector(".experience-btn")
const nextarrow = document.querySelector(".arrow-next")
const prevarrow = document.querySelector(".arrow-prev")
const body1el = document.querySelector(".body1")


experienceBtn.addEventListener("click", function(){
    window.location.href = "experience.html"
})
nextarrow.addEventListener("click", function(){
    body1el.style.background = "url('sources/IMG_2684.jpg')"
})
prevarrow.addEventListener("click", function(){
    body1el.style.background = "url('sources/IMG_9167.png')"
})

