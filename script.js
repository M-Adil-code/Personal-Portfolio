
let cardimg=document.querySelectorAll('.card-img-top')

cardimg.forEach((item)=>{

	item.addEventListener('mouseenter',(e)=>{
		console.log(e.target)
		e.target.querySelector('.card-bgoverlay').classList.remove('d-none')
	})
	item.addEventListener('mouseleave',(e)=>{
		console.log(e.target)
		e.target.querySelector('.card-bgoverlay').classList.add('d-none')
	})
	
})