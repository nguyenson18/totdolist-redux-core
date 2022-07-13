import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { priorityFilterChange, searchFilterTodo, statusFilterChange } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const [searchTodo, setSearchTodo] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [filterPriorities, setFilterPriorities] = useState([])
  const dispatch = useDispatch()

  const handleSearchChange =(e)=> {
    setSearchTodo(e.target.value)
    dispatch(searchFilterTodo(e.target.value))
  }

  const handleStatusChange=(e)=>{
    setFilterStatus(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setFilterPriorities(value)
    dispatch(priorityFilterChange(value))
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
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
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
          value={filterPriorities}
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
