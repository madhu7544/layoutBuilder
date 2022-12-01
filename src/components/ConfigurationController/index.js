import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <h1 className="head">Layout</h1>
          <div className="input-container">
            <div>
              <input
                type="checkbox"
                onChange={onChangeContent}
                id="content"
                checked={showContent}
              />
              <label htmlFor="content" className="content">
                Content
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="left"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="left" className="content">
                Left Navbar
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="right"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="right" className="content">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
