import View from './View.js'
const tag = '[FormView]'
const FormView = Object.create(View)

FormView.setup = function(el) {
	this.init(el)
	this.inputEl = el.querySelector('[type=text]')
	this.resetEl = el.querySelector('[type=reset]')
	this.showResetBtn(false)
	this.bindEvents()
	return this
}

// 검색폼 삭제 버튼 감추기
FormView.showResetBtn = function(show = true){
	this.resetEl.style.display = show ? 'block' : 'none'
}

// 검색폼 이벤트 binding 
FormView.bindEvents = function(){
	this.on('submit', e => e.preventDefault())
	this.inputEl.addEventListener('keyup', e => this.onKeyup(e)) 
	this.resetEl.addEventListener('click', e => this.onReset())
}

// 검색 key 입력부분
FormView.onKeyup = function(e){
	const enter = 13
	this.showResetBtn(this.inputEl.value.length)
	if (e.keyCode !== enter) return
	this.emit('@submit', {input: this.inputEl.value})
}

FormView.onReset = function(){
	this.emit('@reset')
	this.showResetBtn(false)
}

export default FormView