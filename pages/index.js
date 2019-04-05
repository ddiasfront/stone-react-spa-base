import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock, rootReducer } from '../store'
import Example from '../components/examples'
import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    const res = await fetch('https://testapi.io/api/ddiasfront//biblioteca')
    const image = await res.json() 
    return {biblioteca: image}
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    console.log(this.props)
  }

  componentWillUnmount () {
  }

  render () {
    return <h1>Z</h1>
  }
}

const mapStateToProps = state => {
  return {reducer: state.reducer}
}

const mapDispatchToProps = { startClock }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
