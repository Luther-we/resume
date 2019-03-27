import React, {PureComponent} from 'react'

class Container extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      arrJour: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      today: '-',
      indexToday: -1,
      tomorrow: '-',
      indexTomorrow: 0,
    }
  }

  upToday = ()  => {
    this.setState ({
      indexToday: this.state.indexToday +1,
      today: this.state.arrJour[this.state.indexToday+1]
    })
  }

  upTomorrow = () => {
    this.setState({
      indexTomorrow: this.state.indexTomorrow +1,
      tomorrow: this.state.arrJour[this.state.indexTomorrow+1]
    })
  }

  upAll = () => {
    this.upToday()
    this.upTomorrow()
  }

  render() {
    const {today, tomorrow} = this.state
    return (
      <div>
        <PremierEnfant
          today={today}
        />
        <SecondEnfant
          tomorrow={tomorrow}
        />
        <button onClick={this.upToday}>Modifier aujourd'hui</button>
        <button onClick={this.upTomorrow}>Modifier demain</button>
        <button onClick={this.upAll}>Modifier les 2 jours</button>
      </div>
    )
  }
}

class PremierEnfant extends React.Component {
  countPremierEnfant = 0
  render() {
    const {today} = this.props
    // console.log('Premier enfant : this props ', this.props)
    this.countPremierEnfant +=1

    return (
      <div>
        <h3> {today} </h3>
        <p> Premier enfant s'est rendu <span>{this.countPremierEnfant}</span> fois</p>

      </div>
    )
  }
}

class SecondEnfant extends React.Component {
  countSecondEnfant = 0
  render() {
    const {tomorrow} = this.props
    console.log('Second enfant : this props ', this.props)
    this.countSecondEnfant += 1
    return (
      <div>
        <h3> {tomorrow} </h3>
        <p> Second enfant s'est rendu <span>{this.countSecondEnfant}</span> fois</p>
      </div>
    )
  }
}

export default Container