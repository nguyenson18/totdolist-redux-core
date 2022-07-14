import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { priorityFilterChange, searchFilterTodo, statusFilterChange } from '../../redux/actions';
import filterSlice from './filterSlice'


const { Search } = Input;

export default function Filters() {
  const [searchTodo, setSearchTodo] = useState("")
  const [statusTodo, setStatusTodo] = useState("All")
  const [priorityTodo, setPriorityTodo] = useState([])


  // dispatch
  const dispatch = useDispatch()

  const handleSearchChange = (e) => {
    setSearchTodo(e.target.value)
    dispatch(filterSlice.actions.searchFilterTodo(e.target.value))
  } 
  
  const handleStatusChange = (e)=> {
    setStatusTodo(e.target.value)
    dispatch(filterSlice.actions.statusFilterChange(e.target.value))
  }
  const handlePriorityChange = (value)=> {
    setPriorityTodo(value)
    dispatch(filterSlice.actions.priorityFilterChange(value))
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchTodo} onChange={handleSearchChange}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusTodo} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priorityTodo}
          onChange={handlePriorityChange}
        >
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
      </Col>
    </Row>
  );
}
