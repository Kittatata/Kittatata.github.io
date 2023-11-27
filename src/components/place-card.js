import React from 'react'

import PropTypes from 'prop-types'

import './place-card.css'

const PlaceCard = (props) => {
  return (
    <div className={`place-card-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className="place-card-image"
      />
      <div className="place-card-container1">
        <span className="place-card-text">{props.project_title}</span>
        <span className="place-card-text1">{props.description}</span>
      </div>
    </div>
  )
}

PlaceCard.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt: 'image',
  project_title: 'project_title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  rootClassName: '',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  project_title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PlaceCard
