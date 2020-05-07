import React from 'react';
// import { Redirect } from 'react-router-dom';

 
class Client extends React.Component {
    seeList = () => {
        this.props.history.push("/clients")
    }
    constructor(){
        super()
        this.state ={
            displayClient: []
        }
    }

editClient=(e)=> {
    e.preventDefault()
    fetch(`http://localhost:3000/clients/${this.props.client.id}`,{
        method: 'PATCH',
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
    .then(console.log(this.props.location.state.client))
}

// removeClient=(client)=>{
//     fetch(`http://localhost:3000/clients/${client.id}`, {method: 'DELETE'})
//     .then(res=> res.json())
//     .then(client => {
//       this.setState({displayClient: [...this.state.clients.filter(c=>c.id !== client.id)]})
//         alert('Client Deleted')
//       })
//   }


    render(){
        // debugger
        // console.log(this.props.location.state.client) 
        return(
            <div>
                <img src={this.props.location.state.client.image}/>
                 <input type='text' value= {this.props.location.state.client.name}/>
                 <input type='text' value= {this.props.location.state.client.age}/>
                 <input type='number'  value={this.props.location.state.client.height}/>
                 <input type='number'  value={this.props.location.state.client.weight}/>
                 <input type='textarea'  value={this.props.location.state.client.note}/>
                 
                <button onClick={(e)=> this.editClient(e)}>UPDATE</button>
                <button onClick={()=> {this.props.removeClient(this.props.location.state.client) 
                    this.seeList()}}>DELETE</button>
                
            </div>
        )
    }
}

export default Client
