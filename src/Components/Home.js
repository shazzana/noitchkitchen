import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

import './Home.css';


function Home(props) {
    const [formInput, setFormInput] = useState("");
    const navigate = useNavigate();
    
    const handleInput = (event) => {
        console.log(event.target.value)
        setFormInput(event.target.value)
    }

    const handleSubmit = (event) => {
        // event.preventDefault();
        // const val = formInput; //Getting the value from the state
        // console.log('formInput(state) from child:', val)
        // if (val !== "") {
        // navigate('/search');
        // } else {
        //     alert ("Please type in an ingredient")
        // }
        // props.onHandleSubmit(val)
        console.log('Button clicked!')
    }

    return (
        <div className='Form'>
            <h1 className='Form-text'>Is it making you itch?</h1>
            <p className='Form-para'>Some food ingredients could trigger histamine release, causing you to itch.
                Search an ingredient to find out more.
            </p>
            {/* <Form className="Form-container">
                <Form.Group className="Form-field" controlId="formSearch">
                    <Form.Control  
                    value={formInput}
                    onChange={handleInput}
                    type="search-field" 
                    placeholder="Search ingredient"
                    />
                </Form.Group>
                <br/>
                <Button variant="dark" onClick={handleSubmit}>Submit</Button>
            </Form> */}
            <Button variant="dark" href="/register">Search ingredients</Button>
        </div>
    )
}

export default Home;