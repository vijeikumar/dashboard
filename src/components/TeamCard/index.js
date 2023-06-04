// Write your code here
import {Component} from 'react'
import './index.css'

import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {teamCard} = this.props
    const {name, teamImageUrl, id} = teamCard
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img
            src={teamImageUrl}
            alt={` ${name}`}
            className="team-card-image"
          />
          <h1 className="team-card-name">{name}</h1>
        </li>
      </Link>
    )
  }
}
export default TeamCard
