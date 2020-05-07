import React, {Component} from 'react'
class Login extends Component{

  handleLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: this.state.name,
            password: this.state.password
          })
        })
        .then(res => res.json())
        .then(user => {
          this.props.updateUser(user.name)
          console.log(user)
          // debugger
           if (user.error) {
             alert(user.error)
             
           } 
          localStorage.token = user.token 
        })
        // .catch(console.log)
    }

    render() {
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>Name</label>
            <input onChange={(e) => this.handleLogin(e)} name="name" type="text" />
            <label>Password</label>
            <input onChange={(e) => this.handleLogin(e)} name="password" type="password" />
            <input type="submit"/>
            </form>
            </div>
        )
    }


}
export default Login