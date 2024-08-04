import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class FormsSection extends Component {
  state = {
    website: '',
    username: '',
    password: '',
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleAddPassword = event => {
    event.preventDefault() // Prevent the default form submission behavior
    const {website, username, password} = this.state
    const {addPassword} = this.props
    console.log(
      `Website: ${website}, Username: ${username}, Password: ${password}`,
    )
    const newPassword = {website, username, password, id: uuidv4()}
    addPassword(newPassword)
    this.setState({
      website: '',
      username: '',
      password: '',
    })
  }

  renderInputField = (src, alt, placeholder, name, type = 'text') => (
    <div className="website-card" key={name}>
      <img src={src} className="website-logo" alt={alt} />
      <div className="vertical-line" />
      <input
        type={type}
        name={name}
        value={this.state[name]}
        onChange={this.handleChange}
        placeholder={placeholder}
        className="input-element"
      />
    </div>
  )

  getAllFormDetails = () => (
    <>
      {this.renderInputField(
        'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png',
        'website',
        'Enter website',
        'website',
      )}
      {this.renderInputField(
        'https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png',
        'username',
        'Enter username',
        'username',
      )}
      {this.renderInputField(
        'https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png',
        'password',
        'Enter Password',
        'password',
        'password',
      )}
    </>
  )

  render() {
    return (
      <form className="form-section" onSubmit={this.handleAddPassword}>
        <div className="form-details">
          <h3 className="title">Add New Password</h3>
          {this.getAllFormDetails()}
          <div className="button1">
            <button type="submit" className="addButton">
              Add
            </button>
          </div>
        </div>

        <div className="image-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-image"
          />
        </div>
      </form>
    )
  }
}

export default FormsSection
