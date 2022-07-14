import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuidv4';
import {todoRemainingSeletor} from '../../redux/selector'
import Todo from '../Todo'
import  { addNewTodo } from './todoSilice';

export default function TodoList() {
  
  const [todoName, setTodoName] = useState("")
  const [priority, setPriority] = useState("Medium")

  //dipatch
  const dispatch = useDispatch()  

  // useSeletor
  const todoList =  useSelector(todoRemainingSeletor)

  const handleInputChange =(e)=> {
    setTodoName(e.target.value)
  }
  const handlePriorityChange = (value) => {
    setPriority(value)
  }


  const handleAddButtonClick = ()=> {
    // dispatch(
    //   todoListSilice.actions.addTodo({
    //   id: "uuidv4()",
    //   name: todoName,
    //   completed:false,
    //   priority: priority,
    // }))
    dispatch(addNewTodo({
          id: "",
          name: todoName,
          completed:false,
          priority: priority,
        }))
    // dispatch(addTodos({
    //     id: "",
    //     name: todoName,
    //     completed:false,
    //     priority: priority,
    //   }))
    setTodoName("")
    setPriority("Medium")
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{height:'calc(100% -40px)', overflowY:'auto'}}>
      {todoList.map(todo =>
      <Todo 
      key={todo.id}
      id={todo.id}
      name={todo.name}
      prioriry={todo.priority} 
      completed={todo.completed}
      /> 
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
