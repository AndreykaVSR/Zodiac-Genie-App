class Aztro extends Component {
  constructor(props){
      super(props);
      this.state = {
        json: {}
      }
  }

  componentDidMount () {
      const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
      fetch(URL, {
          method: 'POST'
      }).then(response => response.json())
      .then(json => { this.setState({json}); });
  }
}