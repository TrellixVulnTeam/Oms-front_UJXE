import React from 'react';
import {Link} from 'react-router-dom'
import {
    Nav,
    Navbar,
    NavItem,
    NavbarBrand,
    Row,
    Col
}
from 'reactstrap'

function Home(props) {
    return (
       <div className="container">
            <Navbar color="dark" dark className="mb-3">
             <Row className='w-100 mx-3' >
                 <Col lg={10}>
                 <NavbarBrand href="/home"> OAS Team
                 </NavbarBrand>
                 </Col>
                 <Col lg={2}  >
                 <Nav>
                     <NavItem>
                         <Link className="btn btn-primary" to="/add">
                             Add User
                         </Link>
                     </NavItem>
                 </Nav>
                 </Col>
             </Row>
            </Navbar>

           <table className="table table-striped border ">
               <thead className=" bg-dark text-white ">
                   <tr>
                       <th scope="col">Id</th>
                       <th scope="col">Username</th>
                       <th scope="col">Email</th>
                       <th scope="col">Operations</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <th scope="row">1</th>
                       <td>Mark</td>
                       <td>mark@gmail.com</td>
                       <td><Link to="/"  className="btn btn-danger">Delete</Link></td>
                   </tr>
                   <tr>
                       <th scope="row">2</th>
                       <td>Jacob</td>
                       <td>mark@gmail.com</td>
                       <td><Link to="/"  className="btn btn-danger">Delete</Link></td>
                   </tr>
                   <tr>
                       <th scope="row">3</th>
                       <td>Larry</td>
                       <td>mark@gmail.com</td>
                       <td><Link to="/"  className="btn btn-danger">Delete</Link></td>
                   </tr>
               </tbody>
           </table>

       </div>
    );
}

export default Home;