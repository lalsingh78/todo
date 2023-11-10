import { Component } from "react";
import classes from "./todolist.module.css";
// import { render } from "react-dom";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo:"",
      currentTodoDate:""
    };
  }

//   onChangeTextHandler =(event)=>{
//     // console.log(event.target.value)
//     this.setState({
//         currentTodo:event.target.value
//     })
   
//   }
  onChngeTextHandler =(event)=>{
    this.setState({
        currentTodoDate:event.target.value
    })
}

onaddtoto =()=>{
  if(this.state.currentTodo===""||this.state.currentTodoDate===""){
    return
  }
  let newtodo ={
    id:Math.random(),
    name:this.state.currentTodo,
    date:this.state.currentTodoDate
  }
  let newTodos =[...this.state.todos,newtodo]
  this.setState({
    todos:newTodos,
    currentTodo:"",
    currentTodoDate:""
  })
}
ontododelete(id){
  let temp = this.state.todos.filter((todo)=>{return todo.id ===id})
  this.setState({
    todos:temp
  })
}
  render(){
    return( 
    <div className={classes.container}>
        <h1> TodoList</h1>
        <div className={classes.form}>
            <input value={this.state.currentTodo} onChange={(event)=> {
                this.setState({
                    currentTodo:event.target.value
                })
            }
            } type="text"/>
            <input value={this.state.currentTodoDate} onChange={(event)=> this.onChngeTextHandler(event)} type="date"/>
            <button onClick={this.onaddtoto} className={classes.button}>Add</button>
        </div>
        <div className={classes.main1}>
            <p className={classes.tag}>{this.state.currentTodo}</p>
            <p className={classes.tag}>{this.state.currentTodoDate}</p>
        </div>
        {this.state.todos.length===0 && <p>No Todos Found</p>}
        {this.state.todos.map((todo ,i)=>
         <div onClick={()=>this.ontododelete(todo.i)} className={classes.data} key={i}>
          {todo.name}<br/>
          {todo.date}
          </div>
        )}
    </div>
    )
  }
}
export default Todolist