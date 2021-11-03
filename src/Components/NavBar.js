import React from 'react'

 function NavBar() {
    return (
       
    <Navbar bg="dark" variant="dark" >
        <Contrainer>
            <Navbar.Brand href="#home">Pet shop</Navbar.Brand>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search" />
            </Form>

        </Contrainer>
    </Navbar>
            
       
    )
}
export default NavBar;