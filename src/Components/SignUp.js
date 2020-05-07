import React, {Component} from 'react'
class SignUp extends Component{
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      signUp = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(console.log)
    }
    render() {
        return(
            <div>
                <h2>Sign-Up</h2>
                <form onSubmit={(e) => this.signUp(e)}>
            <label>Name</label>
            <input onChange={(e) => this.handleChange(e)} name="name" type="text" />

            <label>E-mail</label>
            <input onChange={(e) => this.handleChange(e)} name="email" type="text" />

            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
            <input type="submit"/>

            </form>
            </div>
        )
    }
}

export default SignUp
