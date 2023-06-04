// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {totalMatches: [], isLoading: true}

  componentDidMount() {
    this.getLatestMatches()
  }

  getLatestMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    console.log(response)
    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMathDetails: {
        id: fetchedData.latest_match_details.id,
        umpires: fetchedData.latest_match_details.umpires,
        result: fetchedData.latest_match_details.result,
        manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
        date: fetchedData.latest_match_details.date,
        venue: fetchedData.latest_match_details.venue,
        competingTeam: fetchedData.latest_match_details.competing_team,
        competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
        firstInnings: fetchedData.latest_match_details.first_innings,
        secondInnings: fetchedData.latest_match_details.second_innings,
        matchStatus: fetchedData.latest_match_details.match_status,
      },
      recentMatches: fetchedData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({totalMatches: updatedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {totalMatches} = this.state
    const {teamBannerUrl, latestMathDetails} = totalMatches
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} className="ipl-logo" alt="team banner" />
        <LatestMatch latestMatch={latestMathDetails} />
        {this.renderMatchDetails()}
      </div>
    )
  }

  renderMatchDetails = () => {
    const {totalMatches} = this.state
    const {recentMatches} = totalMatches
    return (
      <ul className="recent-matches-list">
        {recentMatches.map(eachItem => (
          <MatchCard key={eachItem.id} totalMatches={eachItem} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`app-team-matches-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
