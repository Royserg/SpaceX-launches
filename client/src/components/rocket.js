import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


const ROCKET_QUERY = gql`
  query RocketQuery($rocket_id: String!) {
    rocket(rocket_id: $rocket_id) {
      rocket_name
      rocket_type
      active
      first_flight
      description
      flickr_images
      height {
        meters
        feet
      }
      mass {
        kg
        lb
      }
    }
  }
`

export default function Rocket({ match }) {
  const rocket_id = match.params.rocket_id;

  return (
    <>
      <Query query={ROCKET_QUERY} variables={{rocket_id}}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>
          if (error) return `Error!: ${error}`;

          const { rocket_name,
            rocket_type,
            active,
            first_flight,
            description,
            flickr_images,
            height: { meters, feet },
            mass: { kg, lb }
            } = data.rocket;

          return (
            <>
              <h2>Rocket:
                <span className={classNames({
                  'text-success': active,
                  'text-danger': !active
                })}>
                  {rocket_name}
                </span>
              </h2>
              <hr />
              <h4>Details</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  Rocket type: {rocket_type}
                </li>
                <li className="list-group-item">
                  First Flight: {first_flight}
                </li>
                <li className="list-group-item">
                  Active: { active ? 'Yes' : 'No' }
                </li>
                <li className="list-group-item">
                  Description: {description}
                </li>
                <li className="list-group-item">
                  Height: { meters }m / {feet}ft
                </li>
                <li className="list-group-item">
                  Mass: { kg }kg / {lb}lb
                </li>
              </ul>
              <div className="container my-3">
                {
                  flickr_images.map((img, i) => {
                    return <img key={i} src={img} alt={`Rocket ${i}`} className='img-thumbnail mx-auto d-block mb-2' />
                  })
                }
              </div>
            </>
          )
        }}
      </Query>
      <hr />
      <Link to='/rockets' className='btn btn-secondary mb-3'>Back</Link>
    </>
  )
}
