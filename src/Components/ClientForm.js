import React from 'react';
class ClientForm extends React.Component {
    seeList = () => {
        this.props.history.push("/clients")
    }

    render (){
        // console.log('client')

        return (
            <div>
                <h2>Add a New Client</h2>
                <form onSubmit={(e)=> {
                    this.props.newClient(e) 
                    this.seeList()}}>
                <label>Name:</label>
                <input type='text' placeholder='Client Name'/>
                <label>Age:</label>
                <input type='number'/>
                <label>Weight(lbs):</label>
                <input type='number'/>
                <label>Height(feet-inches):</label>
                <input type='text'/>
                <label>Photo:</label>
                <input type='text' placeholder='Image URL'/>
                <label>Note:</label>
                <textarea  placeholder='Type Here'/>
                <input type= 'submit'/>



                </form>





                



                






            </div>
        )
    }
}


export default ClientForm
