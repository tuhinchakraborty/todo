(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(t,e,n){t.exports=n(323)},196:function(t,e,n){},323:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),r=n(15),c=n.n(r),i=n(26),s=n(27),l=n(29),d=n(28),u=n(30),p=(n(196),n(21)),h=n(112),f=n.n(h),m=n(45),b=n.n(m),y=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center"}},a.a.createElement(b.a,{color:"primary",checked:this.props.content.completed,onChange:function(e){return t.props.handleChange(e,t.props.content.id)}}),a.a.createElement(p.c,{disabled:this.props.content.completed,value:this.props.content.title,margin:"normal",style:{width:"50%"},onChange:function(e){return t.props.handleChange(e,t.props.content.id)}}))}}]),e}(o.Component),j={margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",backgroundColor:"#424242",color:"#fafafa"},g={backgroundColor:"#424242"},v=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.props.data.todos.map(function(e){return a.a.createElement(y,{key:e.id,content:e,handleChange:t.props.handleChange})});return a.a.createElement("div",null,a.a.createElement(p.a,{style:g,position:"static"},a.a.createElement(p.d,{variant:"dense",style:{justifyContent:"center"}},a.a.createElement(p.e,{color:"inherit",variant:"title"},"ToDo"))),e,a.a.createElement(p.b,{onClick:this.props.addTodo,style:j},a.a.createElement(f.a,null)))}}]),e}(o.Component),C=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.handleChange=function(t,e){var o=t.target;n.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e&&("checkbox"===o.type&&t.title&&(t.completed=!t.completed),"text"===o.type&&(t.title=o.value)),t})}})},n.addTodo=function(){n.state.todos.push({id:n.state.todos[n.state.todos.length-1].id+1,title:"",completed:!1}),n.setState({todos:n.state.todos})},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5").then(function(t){return t.json()}).then(function(e){return t.setState({todos:e})})}},{key:"render",value:function(){return a.a.createElement(v,{data:this.state,handleChange:this.handleChange,addTodo:this.addTodo})}}]),e}(o.Component);c.a.render(a.a.createElement(C,null),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.2d8afa8f.chunk.js.map