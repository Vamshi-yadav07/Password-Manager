import {Component} from 'react'
import PasswordList from '../PasswordList'
import './index.css'

class YourPasswords extends Component {
  state = {searchinput: '', checked: false}

  handleSearchChange = event => {
    this.setState({searchinput: event.target.value})
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  render() {
    const {searchinput, checked} = this.state
    const {data, deletePassword} = this.props

    const filteredPasswords = data.filter(password =>
      password.website.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div className="password-container">
        <div className="heading-searchbox">
          <div className="title">
            <h1>Your Passwords</h1>
            <p>{filteredPasswords.length}</p>
          </div>
          <div className="search-container">
            <div className="website-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="website-logo"
                alt="search"
              />
              <div className="vertical-line" />
              <input
                type="search"
                value={searchinput}
                onChange={this.handleSearchChange}
                placeholder="Search"
                className="input-element input2"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="show-passwords">
          <input
            type="checkbox"
            id="mycheckbox"
            checked={checked}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="mycheckbox">Show Passwords</label>
        </div>
        <ul className="different-passwords">
          {filteredPasswords.length === 0 ? (
            <div className="no-passwords">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="no-items-img"
                alt="no passwords"
              />
              <p>No passwords</p>
            </div>
          ) : (
            filteredPasswords.map(password => (
              <PasswordList
                password={password}
                key={password.id}
                showPasswords={checked}
                deletePassword={deletePassword}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default YourPasswords
