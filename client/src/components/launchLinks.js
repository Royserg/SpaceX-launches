import React from 'react'

export default function LaunchLinks({ data: { mission_patch_small, article_link, video_link } }) {
  return (
    <div className="row ">
      <div className="col-md-6 col-sm-12">
        <h4 className='my-3'>Mission patch</h4>
          {
            mission_patch_small ?
              <img className='img-thumbnail' src={mission_patch_small} alt='mission patch'/>
            :
              <p>No Mission patch available</p>
          }
      </div>

      {
        article_link &&
        (
          <div className="col-md-6 col-sm-12">
            <h4 className='my-3'>Additional links</h4>
            <h5><a href={article_link} target='_blank' rel='noopener'>Article</a></h5>
            {
              video_link
              &&
              <h5><a href={video_link} target='_blank' rel='noopener'>Video</a></h5>
            }
          </div>
        )
      }

    </div>
  )
}
