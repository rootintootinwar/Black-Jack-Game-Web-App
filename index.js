function rand(){
	let r = Math.floor(Math.random() * 13) + 1
	if(r===1){
		return 11
	}else if(r>10){
		return 10
	}else{
		return r
	}
}

let cards = []
let bj = false
let isAlive = false
let message = ""

let realmsg = document.getElementById("message")
let realsum = document.getElementById("sum")
let realcard = document.getElementById("card")

let count = 0;

function start(){
	isAlive = true
	let a = rand()
	let b = rand()
	cards = [a,b]
	sum = a + b
	render()
}

function render(){
	if(sum<=20){
		message="Do you want to draw another Card? :|"
	}
	else if(sum===21){
		message="You have got, Black Jack! :)"
		count += 1
		let play = {
			name : "Perks",
			chips : count
		}

		let per = document.getElementById("per")
		per.textContent = play.name + " : $" + play.chips
		isAlive = false
	}
	else{
		message="you are out of the game! :("
		isAlive = false
	}
	realmsg.textContent=message

	realcard.textContent="Cards : "
	for(let i = 0;i<cards.length;i++){
	realcard.textContent+=cards[i]+" "
	}

	realsum.textContent="Sum : "+sum
}

function newC(){
	if(isAlive===true){
		let c = rand()
		sum+=c
		cards.push(c)
		render()
	}
}
