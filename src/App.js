import React, {Component} from 'react';
import {Form, Button, InputGroup} from 'react-bootstrap';
import ViewTodo from './components/viewTodo';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          title: "Task 1",
          isComplete: false
        },
        {
          title: "Task 2",
          isComplete: true
        },
        {
          title: "Task 3",
          isComplete: false
        },
        {
          title: "Task 4",
          isComplete: true
        },
      ],
      newTodo: "",
    };
  }

  updateTodo = (newTodoList) => {
    this.setState({
      todoList: newTodoList,
    });
  };
  render() {
    return (
      <div className="container">
        <header className="font-weight-bold text-lg">
          <h1>Todo List</h1>
        </header>
        <div>
          <Form onSubmit={(e) => {
            e.preventDefault();
            const newTodoList = this.state.todoList;
            const newTodo = {
              title: this.state.newTodo,
              isComplete: false
            };
            newTodoList.push(newTodo);
            this.setState({
              todoList: newTodoList
            });
          }}>
            <Form.Group>
              <Form.Label>New Todo List</Form.Label>
              <InputGroup>
                <Form.Control type="text" 
                onChange={(e) => {
                  this.setState({
                    newTodo: e.target.value,
                  });
                }}
                />
                <InputGroup.Append>
                  <Button type="submit">Submit</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </div>
        <div className="d-flex">
          <ViewTodo title="InComplete"
          todoList={this.state.todoList}
          buttonCmd="Finish"
          updateTodo={this.updateTodo} />
          <div className="w-50 border border-secondary p-2">
            <h2>Complete</h2>
            {this.state.todoList.map((todo, index) => {
              if(todo.isComplete) {
                return(
                  <div className="border border-success mb-1 p-2 d-flex justify-content-between">
                    <p>{todo.title}</p>
                    <Button 
                      onClick={() => {
                      const newTodoList = this.state.todoList;
                      newTodoList[index].isComplete = !newTodoList[index].isComplete;
                      this.setState({
                        todoList: newTodoList,
                      });
                    }}>
                      Do it Again
                    </Button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;