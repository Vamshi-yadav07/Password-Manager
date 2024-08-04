import './index.css'

const hexcodes = [
  '#454f84',
  '#0b69ff',
  '#94a3b8',
  '#b6c3ca',
  '#7683cb',
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c',
  '#0ea5e9',
]

const starImages =
  'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

const deleteIcon =
  'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * hexcodes.length)
  return hexcodes[randomIndex]
}

const PasswordList = ({password, showPasswords, deletePassword}) => {
  const randomColor = getRandomColor()

  const onclicked = () => {
    deletePassword(password.id)
  }

  return (
    <li className="password-item">
      <div className="profile-section">
        <div className="profile-icon" style={{backgroundColor: randomColor}}>
          <div>{password.username[0]}</div>
        </div>
        <div className="password-details">
          <p>{password.website}</p>
          <p>{password.username}</p>

          {showPasswords ? (
            <p>{password.password}</p>
          ) : (
            <img src={starImages} alt="stars" className="stars-icon" />
          )}
        </div>
      </div>
      <button className="password-actions" testid="delete" onClick={onclicked}>
        <img src={deleteIcon} alt="delete" className="delete-icon" />
      </button>
    </li>
  )
}

export default PasswordList
