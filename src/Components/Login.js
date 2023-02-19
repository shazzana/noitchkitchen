import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'

const Login = () => {
    return (
        <div className="Login-Container">
            <img
                className="Login-Image"
            />
            <Form className="Login-Form">
            <h2>Login or create account</h2>
            <br/>
            <br/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className="Login-Form-Field"/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className="Login-Form-Field"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
};

export default Login;