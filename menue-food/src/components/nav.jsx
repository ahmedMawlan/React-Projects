import React ,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NaveBar({filterSearch}) {

    const [searchValue, setSearchValue] = useState('')
    const onSearch = () =>{
        // e.preventDefault()
        filterSearch(searchValue)
        setSearchValue('')
    }

    return (
        <Navbar expand="lg"  className="bg-body-tertiary mb-3 " data-bs-theme="dark">
        <Container >
            <Navbar href="#" className='brand-color' ><h2>مطعم جديد</h2></Navbar>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >

            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="بحـــث..."
                className="me-5"
                aria-label="Search"
                onChange={(e)=> setSearchValue  (e.target.value)}
                value={searchValue}
                />
                <Button onClick={()=> onSearch()} variant="outline-warning me-5">بحـث</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        
        </Navbar>
    );
}

export default NaveBar;