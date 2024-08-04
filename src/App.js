import {Component} from 'react'
import FormsSection from './FormsSection'
import YourPasswords from './YourPasswords'
import './App.css'

class App extends Component {
  state = {
    passwords: [],
  }

  addPassword = newPassword => {
    this.setState(prevState => ({
      passwords: [...prevState.passwords, newPassword],
    }))
  }

  deletePassword = id => {
    this.setState(prevState => ({
      passwords: prevState.passwords.filter(password => password.id !== id),
    }))
  }

  render() {
    const {passwords} = this.state
    console.log(passwords)
    return (
      <div className="bg-container">
        <img
          className="logo-styles"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <FormsSection addPassword={this.addPassword} />
        <YourPasswords data={passwords} deletePassword={this.deletePassword} />
      </div>
    )
  }
}

export default App
