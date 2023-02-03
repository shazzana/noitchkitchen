import React from 'react';
import Form from 'react-bootstrap/Form'

import './IngredientSearchForm.css';

function IngredientSearchForm() {
    return (
        <div className='Form'>
            <h1 className='Form-text'>Is this making you itch?</h1>
            <p className='Form-para'>Some food ingredients could trigger histamine release, causing you to itch.
                Search an ingredient to find out more.
            </p>
            <Form className="Form-container">
                <Form.Group className="Form-field" controlId="formSearch">
                    <Form.Control  type="search-field" placeholder="Search" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default IngredientSearchForm;