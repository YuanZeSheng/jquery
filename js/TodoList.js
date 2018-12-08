  /*
 * *@ 2018-12-08
 * *@ author mikeYuan 
 * *@ jquery 面向对象 todoList
 * *@ ECMAScript6
*/

function TodoList() {
  // 初始化
  this.init();
  // 绑定事件
  this.bindEvents();
}

$.extend( TodoList.prototype, {

  init: function() {
    // 提交按钮 
    this.submitBtn = $('.submitBtn');
    // 输入框
    this.inputValue = $('.inputValue');
    // tolist 列表
    this.todoList = $('.todoList')

  },

  bindEvents: function() {
    // 点击提交按钮
    this.submitBtn.on( 'click', $.proxy( this.handleClickSubmitBtn, this ) )
  },

  handleClickSubmitBtn: function() {

    if( !this.inputValue.val() ) {
      alert('不输入内容你是认真的吗');
      return false
    }

    let todoListStr = 
    `
      <li> ${ this.inputValue.val() } </li>
    `

    this.todoList.append(todoListStr)

    this.inputValue.val('')

  }

})