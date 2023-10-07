import './index.css'

const TabItem = props => {
  const {tabDetails, setActIveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    setActIveTab(tabId)
  }
  const tabsActive = isActive ? 'tabButton active' : 'tabButton'

  return (
    <li className="tabs-list">
      <button type="button" onClick={onClickTab} className={tabsActive}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
