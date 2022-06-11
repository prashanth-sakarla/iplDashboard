// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  componentDidMount() {
    this.getTeamsDetails()
  }

  getTeamsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)
  }

  render() {
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            alt="ipl logo"
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
      </div>
    )
  }
}
export default Home
