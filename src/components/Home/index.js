// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTheCards()
  }

  getTheCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))

    this.setState({teamCardList: updatedData, isLoading: false})
  }

  renderResult = () => {
    const {teamCardList} = this.state

    return (
      <ul className="team-list-items">
        {teamCardList.map(team => (
          <TeamCard key={team.id} teamCard={team} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />

            <h1 className="name-head">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderResult()}
        </div>
      </div>
    )
  }
}
export default Home
