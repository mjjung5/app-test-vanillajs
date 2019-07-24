import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.setup = function(el){
  this.init(el)
},

ResultView.messages = {
  ERR_NO_RESULT : '검색결과가 없습니다.'
},

// 검색결과 DOM 설정
ResultView.render = function(data = []){
  console.log(tag, 'render()', data)
  this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : this.messages.ERR_NO_RESULT
  this.show()
},

ResultView.getSearchResultHtml = function(data) {
  return data.reduce((html, item) => {
    html += this.getSearchItemHtml(item)
    return html
  },  '<ul>' + '</ul>');
}

ResultView.getSearchItemHtml = function(item){
  return `<li> 
    <img src="${item.image}">
    <p>${item.name}</p> 
  </li>`

}

export default ResultView;