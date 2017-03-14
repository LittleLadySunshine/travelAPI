import React from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.css'
import './app.css'

import {browserHistory, Router, Route} from 'react-router'


const Home = React.createClass({
  render: function() {
    return (<div>Hello world</div>)
  }
})

const routes = (
  <Router>
    <Route path="/" component={Home} />
  </Router>
)
import App from 'containers/App/App'

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App history={browserHistory} />, mountNode);


class App extends React.Component {
  static propTypes = {
  routes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
  // class getter
  content() {
    return (<Router
      routes={this.props.routes}
        history={this.props.history} />)
  }

  render() {
    return (
      <div style={ { height: '100%' } }>
        {this.content}
      </div>
    )
  }
}

const App = React.createClass({
  render: function() {
    return (
      <div className={styles.wrapper}>
        <h1>
          <i className="fa fa-star"></i>
          Environment: {__NODE_ENV__}</h1>
      </div>
    )
  }
});

module.exports = App;
