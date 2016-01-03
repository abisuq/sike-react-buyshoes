import React from 'react'
import ConnectedStore from './ConnectedStore'
 
export default function MakeConnectedComponent(ViewComponent, store, ...propNames) {
  class ConnectedViewComponent extends React.Component {
  render() {
    return (
      <ConnectedStore store={store} propNames={propNames}>
        {props => <ViewComponent {...props} {...this.props} />}
      </ConnectedStore>
    )
    }
  }
  return ConnectedViewComponent
}
 
