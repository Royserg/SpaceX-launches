import React from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';
import LaunchLinks from './launchLinks';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_success
      launch_year
      launch_date_local
      details
      links {
        mission_patch_small
        article_link
        video_link
      }
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default function Launch({ match }) {
  let { flight_number } = match.params;
  flight_number = parseInt(flight_number);

  return (
    <div className="container">
      <Query
        query={LAUNCH_QUERY}
        variables={{flight_number}}
      >
        {({ loading, error, data }) => {
          if (loading) return <span>Loading...</span>;
          if (error) console.log(error);

          const {
              mission_name,
              launch_success,
              launch_year,
              flight_number,
              launch_date_local,
              details,
              links,
              rocket: { rocket_id, rocket_name, rocket_type }
            }  = data.launch;

          return (
            <>
              <h2 className='display-4 my-3'>
                <span className='text-muted'>Mission:</span>
                <span className={classNames({
                  'text-success' : launch_success,
                  'text-danger' : !launch_success
                })}>
                  {mission_name}
                </span>
              </h2>
              <h4 className='mb-3'>Launch Details</h4>
              <ul className='list-group'>
                <li className="list-group-item">
                  Flight Number: {flight_number}
                </li>
                <li className="list-group-item">
                  Launch Year: {launch_year}
                </li>
                <li className="list-group-item">
                  Launch Successful:
                  <span className={classNames({
                    'text-success' : launch_success,
                    'text-danger' : !launch_success
                  })}>
                    {launch_success ? 'Yes' : 'No'}
                  </span>
                </li>
                <li className="list-group-item">
                  Details: {details || "No details provided"}
                </li>
                <li className="list-group-item">
                  Launch Date: <Moment format="DD/MM/YYYY HH:mm">{ launch_date_local }</Moment>
                </li>
              </ul>

              <h4 className='my-3'>Rocket Details</h4>
              <ul className='list-group'>
                <li className="list-group-item">
                  Rocket Id: {rocket_id}
                </li>
                <li className="list-group-item">
                  Rocket Name: {rocket_name}
                </li>
                <li className="list-group-item">
                  Rocket Type: {rocket_type}
                </li>
              </ul>
              <LaunchLinks data={data.launch.links} />
              <hr />
              <Link to='/' className='btn btn-secondary'>Back</Link>
            </>
          )
        }}
      </Query>
    </div>
  )
}
