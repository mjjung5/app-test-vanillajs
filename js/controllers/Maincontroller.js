import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'
const tag = '[MainController]'

export default {
	init(){
		console.log(tag, 'init()')
		FormView.setup(document.querySelector('form'))
			.on('@submit', e => this.onSubmit(e.detail.input))
			.on('@reset', e => this.resetData())

		ResultView.setup(document.querySelector('.search-result'))
	},

	search(query){
		console.log(tag, 'search()', query)
		SearchModel.list(query).then(data => {
			this.onSearchResult(data)
		})
	},

	onSubmit(input){
		console.log(tag, 'onSubmit()', input)
		// 입력데이터를 받아서 검색요청
		this.search(input)
	},

	resetData(){
		console.log(tag, 'resetData()')
	},

	onSearchResult(data){
		ResultView.render(data)
	}
}