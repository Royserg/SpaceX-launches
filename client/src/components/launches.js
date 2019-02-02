import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './launchItem';
import MissionKey from './missionKey';


const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends Component {
  render() {
    return (
      <>
        <MissionKey textPos='Success' textNeg='Fail' />
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);

              return <>
                {
                  data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                  ))
                }
              </>
            }
          }
        </Query>
      </>
    )
  }
}

export default Launches;
