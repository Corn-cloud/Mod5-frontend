import React from 'react';
import ClientList from './ClientList'
import Login from './Login'
import SignUp from './SignUp'
import Session from './Session'
import Client from './Client'
import ClientForm from './ClientForm';
import Home from './Home'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Container extends React.Component {

  constructor(){
    super()
    this.state = {
      displayClients: [],
      clients: [],
      currentUser: " "

      }
  }
  updateUser =(name) => {
    this.setState({
      currentUser: name
    })
  }


     getClient=()=>{
    console.log(this.state.clients)
    if (this.state.clients.length === 0)
    // console.log(this.state)
    {fetch('http://localhost:3000/clients', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(clients => {
    
      if (!clients.error){ 
      this.setState({

            clients: clients,
        displayClients: [...clients]
      })}
      // console.log("after setState" ,this.state)
    })}
  }
  addClient = (e) => {
    // debugger
    e.preventDefault()
    console.log(this.state) // undefined

    fetch('http://localhost:3000/clients',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${localStorage.token}` 
      },
      body: JSON.stringify({
        name: e.target[0].value,
        age: e.target[1].value,
        height: e.target[2].value,
        weight: e.target[3].value,
        image: e.target[4].value,
        note: e.target[5].value
        })
    })
    .then(res=> res.json())
    .then(client => {
      console.log(this.state) // undefined
      // debugger
      this.setState({
        displayClients: [...this.state.clients, client]
      })
    })
  }
  
  removeClient=(client)=>{

    fetch(`http://localhost:3000/clients/${client.id}`, {method: 'DELETE'})
    .then(res=> res.json())
    .then(client => {
      this.setState({displayClients: [...this.state.clients.filter(c=>c.id !== client.id)]})
        alert('Client Deleted')
      })
  }
        
    
  



  logout = () => {
    localStorage.clear()
  }




  render(){

    return (
      <Router>
        <div>
           <nav>
          
            
              <Link to="/home">Home</Link>
          
            
              <Link to="/clients">Clients</Link>
              <Link to="/session">Sessions</Link>
              <Link to="/clients/new">New Client</Link>
            
              <Link to="/login">Login</Link>
              
              <Link to="/signup">SignUp</Link>

              <button onClick={()=> {this.logout(); window.location.href='http://localhost:3001/login'}}>LogOut</button>
          
        
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route  exact path="/clients/new" render={(routerProps) => <ClientForm  {...routerProps} newClient={this.addClient}/> }/>
          
          <Route path="/clients">
            <ClientList  clients={this.state.displayClients} getClient={this.getClient}/>
          </Route>

          <Route path="/session">
            <Session />
            </Route>

          <Route path="/login">
            <Login updateUser={this.updateUser}/>
            </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/client/:id" render={ (routerProps) => <Client {...routerProps} removeClient={this.removeClient} /> } />

            
      
        


        </Switch>
      </div>
    </Router>
  
  )
 }
}



export default Container
