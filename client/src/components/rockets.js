import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import RocketItem from './rocketItem';
import MissionKey from './missionKey';

const ROCKETS_QUERY = gql`
  query RocketsQuery {
    rockets {
      rocket_id
      rocket_name
      rocket_type
      active
    }
  }

`

export default function Rockets() {
  return (
    <>
      <MissionKey textPos='Active' textNeg='Non-active' />
      <Query query={ROCKETS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) console.log(error);

          return (
            data.rockets.map(rocket => <RocketItem key={rocket.rocket_id} rocket={rocket} />)
          )
        }}

      </Query>
    </>
  )
}
