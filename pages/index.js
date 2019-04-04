import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock, rootReducer } from '../store'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    console.log(this.props)
    this.timer = setInterval(() => this.props.startClock(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <h1>123</h1>
  }
}
const mapDispatchToProps = { startClock }
export default connect(
  rootReducer,
  mapDispatchToProps
)(Index)
