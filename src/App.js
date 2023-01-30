
import './App.css';
import React, { Component, useState } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: '',
    hobby: ''
  });

  const {name, age, salary, hobby} = formData;

  function handleChange(event){
    const {name, value} = event.target;
    setFormData(prevFormData => {
      return {...formData, [name] : value}
    });
  }

  function handleSubmit(event){
    console.log(formData);
    event.preventDefault();

    axios.post('https://sheet.best/api/sheets/4f13d28b-0283-44c1-99be-6cf0871dfc2f', formData)
    .then(response => {
      console.log(response);
    })
  }

  
  return (
    <Container fluid className="container">
      <Header as='h2'>React Google Sheets!</Header>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Enter your name' type="text" name="name" value={name} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input placeholder='Enter your age' type="number" name="age" value={age} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input placeholder='Enter your salary' type="number" name="salary" value={salary} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input placeholder='Enter your hobby' type="text" name="hobby" value={hobby} onChange={handleChange}/>
        </Form.Field>
        
        <Button color="blue" type='submit'>Submit</Button>
      </Form>
    </Container>
  )
  
}

export default App;
