import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const showingLeftNavbar = () => (
        <div className="left-container">
          <h1 className="body-header-text">Left Navbar Menu</h1>
          <ul className="list-items">
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
            <li className="item">Item 4</li>
          </ul>
        </div>
      )
      const showingContent = () => (
        <div className="content-container">
          <h1 className="content-head">Content</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )
      const showingRightNavbar = () => (
        <div className="right-container">
          <h1 className="right-header-text">Right Navbar</h1>
          <div className="ad-box-container">
            <p className="ad-box">Ad 1</p>
            <p className="ad-box">Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar ? showingLeftNavbar() : null}
          {showContent ? showingContent() : null}
          {showRightNavbar ? showingRightNavbar() : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
