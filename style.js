var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')

var currectIndex = 0;
function showGallery(){
    if(currectIndex == 0){
        prev.classList.add('hide')
    }

else{
    prev.classList.remove('hide')
}
if(currectIndex == images.length - 1){
    prev.classList.add('hide')
}
else{
    prev.classList.remove('hide')
}
}

images.forEach((item,index)=>{
    item.addEventListener('click', function(){
        currectIndex = index
        showGallery()
    })
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function(){
    if(currectIndex > 0){
        currectIndex--
        showGallery()
    }
})

next.addEventListener('click', function(){
    if(currectIndex < images.length -1){
        currectIndex++
        showGallery()
    }
})