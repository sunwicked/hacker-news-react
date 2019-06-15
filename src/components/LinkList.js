import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`{
posts(last:10){
	edges{
		node{
			id
			name
			description
			media{
				url
			}
		}
	}
}
}`
  
class LinkList extends Component {
  render() {
    return (
		<Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    //show UI
          const linksToRender = data.posts.edges
          return (
            <div>
              <Link node={linksToRender}/>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList