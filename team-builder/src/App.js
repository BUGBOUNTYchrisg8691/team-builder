import React, {useState, useEffect} from 'react';
import './App.css';
import axios from './axios'
import { v4 as uuid } from 'uuid'
import styled from "styled-components"

import Form from "./components/Form"

const initialFormValues = {
  name: "",
  email: "",
  age: "",
};

const StyledDiv = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 5px 10px;
  width: 20%;
  hr {
    border: 1px dashed black;
    margin: 5px 0;
  }
`

function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [whichMate, setWhichMate] = useState('')

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    let newMate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      age: formValues.age,
      id: uuid()
    }
    axios.post("fakeapi.com", newMate)
      .then(resp => {
        setTeam([...team, resp.data])
        setFormValues(initialFormValues)
      })
      .catch(err => console.log(err))
    // setTeam([
    //   ...team,
    //   newMate
    // ])
  }

  // const setEdit = e => {
  //   setWhichMate(e.target.parentNode.firstChild.lastChild.data)
  // }

  useEffect(() => {
    axios.get("fakeapi.com")
      .then(resp => {
        setTeam(resp.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {team.map(mate => {
        return (
          <StyledDiv>
            <div>Name: {mate.name}</div>
            <div>Email: {mate.email}</div>
            <div>Age: {mate.age}</div>
            <hr />
            <button>Edit</button>
          </StyledDiv>
        )
      })}
      {/* <form>
        <select>
          {ages.map(age => {
            return (
              <option>{age}</option>
            )
          })}
        </select>
      </form> */}
      <Form values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;
