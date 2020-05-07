import React from 'react';
// import Client from './Client'
import {Link} from 'react-router-dom'



class ClientCard extends React.Component {

    render(){
        console.log(this.props)
        return(
            <div>
                <div className='column'> 

               

                <Link to={{
                    pathname:`/client/${this.props.client.id}`,
                    state: {
                        client: this.props.client}
                    }}>

                <img src={this.props.client.image}/>
                <h2>{this.props.client.name}</h2>
                <h5>Age: {this.props.client.age}</h5>
                <h5>height: {this.props.client.height}</h5>
                <h5>weight: {this.props.client.weight}</h5>
                </Link>


                 {/* <Client {...this.props.client}/>  */}
                    </div>
            </div>
        )
    }
}

export default ClientCard

