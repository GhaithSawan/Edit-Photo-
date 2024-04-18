let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let hueRotate = document.getElementById("hueRotate")
let download = document.getElementById("download")
let Reset = document.getElementById("reset")
let uplode = document.getElementById("uplode")
let img = document.getElementById("img")
let fatherimg = document.querySelector(".fatherimg")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
function resetimg(){
    img.style.filter = ""
    saturate.value = "100"
    contrast.value = "100"
     brightness.value = "100"
     sepia.value = "0"
    grayscale.value = "0"
    blur.value = "0"
    hueRotate.value = "0"
   

}

window.onload = function () {
    download.style.display = "none"
    Reset.style.display = "none"
    fatherimg.style.display = "none"
}
uplode.onchange = function () {
    resetimg()
    download.style.display = "block"
    Reset.style.display = "block"
    fatherimg.style.display = "block"
    let file = new FileReader()
    file.readAsDataURL(uplode.files[0])
    file.onload = function () {
        img.src = file.result
    }
    img.onload = function(){
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display = "none"
    }
}


let filters = document.querySelectorAll("ul li input")
filters.forEach(filter => {
    filter.addEventListener('input', function () {
        ctx.filter = `
        blur(${blur.value}px) 
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%) 
        grayscale(${grayscale.value})
        hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height)

    })
})


download.onclick= function(){
    download.href=canvas.toDataURL("image/png");
}

