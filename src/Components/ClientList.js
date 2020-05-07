import React from 'react';
import ClientCard from './ClientCard'

class ClientList extends React.Component {
    componentDidMount(){
        this.props.getClient()
    }
    
    render(){
        return(
            <div>
                

               { this.props.clients.length > 0 ? 
               this.props.clients.map(client => <ClientCard client={client} key={client.id}/>) : null  } 
                
            </div>
               
                
        )
    }
}
    





export default ClientList
