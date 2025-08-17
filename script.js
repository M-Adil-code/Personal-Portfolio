
let cardimg=document.querySelectorAll('.card-img-top')
let sidebaricon=document.querySelector('.sidebaricon')
let sidebarCrossIcon=document.querySelector('.cross')

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

sidebaricon.addEventListener('click',()=>{
	document.querySelector('.nav-bg').style.right='1px'
	
})

sidebarCrossIcon.addEventListener('click',()=>{
	document.querySelector('.nav-bg').style.right='-1000px'
})