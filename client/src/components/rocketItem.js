import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function RocketItem({ rocket: { rocket_name, active, rocket_type, rocket_id } }) {
  return (
    <div className='card card-body mb-3'>
      <div className="row">
        <div className="col-md-10">
          <h4>
            Rocket:
            <span className={classNames({
              'text-success': active,
              'text-danger': !active
            })}>
              {rocket_name}
            </span>

          </h4>
          <p>Rocket Type: {rocket_type}</p>
        </div>
        <div className="col-md-2">
          <Link to={`/rockets/${rocket_id}`} className="btn btn-primary">Rocket Details</Link>
        </div>
      </div>
    </div>
  )
}
