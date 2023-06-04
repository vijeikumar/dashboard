// Write your code here

import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {totalMatches} = this.props
    const {competingTeamLogo, matchStatus, result, competingTeam} = totalMatches
    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          className="match-card-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="match-card-name">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className="match-card-status">{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
