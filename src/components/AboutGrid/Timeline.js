import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const timelineData = [
  {
    date: '2016',
    title: 'Faithlife',
    logo: 'faithlife',
    location: 'Bellingham, WA',
  },
  {
    date: '2017 - 2020',
    title: 'Capital One',
    logo: 'capitalone',
    location: 'McLean, VA',
  },
  {
    date: '2020 - 2021',
    title: 'Storyblocks',
    logo: 'storyblocks',
    location: 'Arlington, VA',
  },
  {
    date: '2021 - present',
    title: 'Palantir',
    logo: 'palantir',
    location: 'Washington, DC',
  },
];

const TimelineSection = ({ date, title, image, location }) => (
  <li className="flex mb-12 last:pb-12 last:m-0">
    <div className="flex flex-col flex-1">
      <span className="text-lg text-right ">{title}</span>
      <span className="font-light text-right">{location}</span>
      <span className="font-light text-right">{date}</span>
    </div>
    <div className="z-10 self-start mx-8 bg-white flex-0">
      <Img fixed={image} />
    </div>
    <div className="flex-1" />
  </li>
);

TimelineSection.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Timeline = ({ images }) => {
  const [firstEvent, ...otherEvents] = timelineData;
  return (
    <div className="left-0 right-0 max-w-2xl mx-auto my-4 mt-0">
      <ul className="z-0">
        <div className="relative pt-12">
          <span
            className="absolute border-l-4 border-gray-400 border-dashed timeline"
            style={{
              width: '0',
              height: '100%',
              top: 0,
              left: 0,
              right: 0,
              margin: 'auto',
            }}
          />
          {otherEvents.reverse().map((data) => (
            <TimelineSection
              image={images[data.logo]}
              key={data.date}
              {...data}
            />
          ))}
        </div>
        <TimelineSection
          image={images[firstEvent.logo]}
          key={firstEvent.date}
          {...firstEvent}
        />
      </ul>
    </div>
  );
};

Timeline.propTypes = {
  images: PropTypes.object.isRequired,
};

export default Timeline;
