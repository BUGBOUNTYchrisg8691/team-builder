import React from 'react'
import styled from "styled-components"

const StyledDiv = styled.div`
    border: 1px dashed black;
    padding: 10px 5px 0;
    width: 250px;
    clear: both;
    .input {
        width: 100%;
        clear: both;
        margin: 10px 0 0;
    }
    .age {
        width: 10vh;
    }
    label {
        margin: 5px;
    }
    form * {
        vertical-align: middle;
    }
    hr {
        border: 1px dashed black;
    }
    button {
        margin: 10px 0 0;
        padding: 2px 5px;
    }
`


export default function Form(props) {
    const {values, update, submit} = props

    const handleUpdate = e => {
        const {name, value} = e.target
        update(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        submit()
    }

    const ages = []
    for (let i = 1; i < 100; i++) {
      ages.push(i)
    }

    return (
        <StyledDiv>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleUpdate}
                        placeholder="Enter name"
                        maxLength="30"
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email" 
                        value={values.email}
                        onChange={handleUpdate}
                        placeholder="Enter email"
                        maxLength="50"
                    />
                </label>
                <label className="age">
                    Age:
                    <select
                        name="age"
                        value={values.age} 
                        onChange={handleUpdate}
                    >
                        {ages.map(age => {
                            return (
                                <option>{age}</option>
                            )
                        })}
                    </select>
                </label>
                <input type="submit"></input>
            </form>
        </StyledDiv>
    )
}
