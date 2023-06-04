import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatch
    return (
      <div className="latest-match-container">
        <h1 className="">Latest Matches:</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details-main">
              <p className="latest-match-team-name">{competingTeam}</p>
              <p className="latest-match-date">{date}</p>
              <p className="latest-match-venue">{venue}</p>
              <p className="latest-match-status">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="latest-match-logo"
              alt={`latest match ${competingTeam}`}
            />
            <div className="latest-match-details-info">
              <div className="match-info-items">
                <p className="latest-match-label">First Innings</p>
                <p className="latest-match-value">{firstInnings}</p>
              </div>
              <div className="match-info-items">
                <p className="latest-match-label">Second Innings</p>
                <p className="latest-match-value">{secondInnings}</p>
              </div>
              <div className="match-info-items">
                <p className="latest-match-label">Man of the Match</p>
                <p className="latest-match-value">{manOfTheMatch}</p>
              </div>
              <div className="match-info-items">
                <p className="latest-match-label">Umpires</p>
                <p className="latest-match-value">{umpires}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
