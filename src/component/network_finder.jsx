import React from 'react'
import Paper from 'material-ui/lib/paper'

import TopBar from './topbar/topbar'
import SearchArea from './search/search_area'
import ResultArea from './result/result_area'

export default class NetworkFinder extends React.Component {

  constructor(props) {super(props)}

  render() {
    console.log(this)
    const style = {
      height: 700,
      width: "90%"
    }
    return (
      <Paper style={style} z={3}>
        <TopBar/>
        <SearchArea updateQuery={this.props.updateQuery} query={this.props.query}/>
        <ResultArea networkLists={this.props.networkLists} vizSwitch={this.props.vizSwitch} viz={this.props.viz}/>
      </Paper>
    )
  }

}
