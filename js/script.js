window.addEventListener('load',()=>{
    document.querySelector('.preload').classList.add('preload-hide')
})

document.getElementById('myModal').style.display="block";
function dismissModal(){
    document.querySelector("#myModal").style.display="none"
}