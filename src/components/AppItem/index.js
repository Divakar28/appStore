import './index.css'

const AppItem = props => {
  const {tabItems} = props
  const {imageUrl, appName} = tabItems

  return (
    <div>
      <li className="app-icon">
        <img src={imageUrl} className="icons" alt="icons" />
        <p className="app-list">{appName}</p>
      </li>
    </div>
  )
}
export default AppItem
