import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faSave } from "@fortawesome/free-solid-svg-icons";
import { TransactionsTable } from "./Tables";
import { Button, Table} from '@themesberg/react-bootstrap';
//import {Table} from '@react-bootstrap/Table'



class TableInspect extends React {//export const TableInspect = () => {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
      }
    
      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
    
      render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
    
        if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
          button = <LoginButton onClick={this.handleLoginClick} />;
        }

    return (
    <>
      <div className="d-xl-flex justify-content-start flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex justify-content-around">
            <div className="mr-2">
                <Button variant="primary">
                    <FontAwesomeIcon icon={faPlus} />
                    <span> Annoter</span>
                </Button>
            </div>
            
            <div className="ml-2">
                <Button variant="primary">
                    <FontAwesomeIcon icon={faSave} />
                    <span> Save</span>
                </Button>
            </div>
        </div>
        
      </div>
      <div>
        <Table responsive="sm">
            <thead className="bg-light">
            <tr>
                <th>TYPE</th>
                <th>CONTENT</th>
                <th>ACCURACY</th>
                <th>EDIT</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Paragraph</th>
                <th>Lorem ipsum siet dolore consectetur </th>
                <th>0.7</th>
                <th>
                <Button variant="secondary" className="btn btn-sm">Edit</Button>
                </th>
            </tr>
            <tr>
                <th>Paragraph</th>
                <th>Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. </th>
                <th>0.7</th>
                <th>
                <Button variant="secondary" className="btn btn-sm">Edit</Button>
                </th>
            </tr>
            </tbody>
        </Table>
        </div>

        <Greeting isLoggedIn={isLoggedIn} />
          {button}
    </>
  )};
};

/*
class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }*/
  
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
  
  
  export default TableInspect;