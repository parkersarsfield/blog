import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const timelineData = [
  {
    date: '2014',
    title: 'Vanderbilt University',
    info:
      'I moved to Nashville to begin my Computer Science degree at Vanderbilt.',
    logo: 'vandy',
    location: 'Nashville, TN',
  },
  {
    date: 'Summer 2016',
    title: 'Faithlife',
    info:
      'Faithlife is where I fell in love with software engineering. I worked on the Faithlife Groups team where I built web apps using React, Redux, and C#. I got to explore a gorgeous part of the country and gain valuable experience working in tech.',
    logo: 'faithlife',
    location: 'Bellingham, WA',
  },
  {
    date: 'Summer 2017',
    title: 'Capital One',
    info:
      'I spent my summer at Capital One building full stack web applications for Tech College with React, Node.js, PostgreSQL and AWS.',
    logo: 'capitalone',
    location: 'McLean, VA',
  },
  {
    date: 'May 2018',
    title: 'Vanderbilt University',
    info:
      'I graduated with Honors from Vanderbilt with a major in Computer Science, as well as minors in Classical Guitar and Engineering Management.',
    logo: 'vandy',
    location: 'Nashville, TN',
  },
  {
    date: 'Summer 2018',
    title: 'Moved to D.C.',
    info:
      'I moved to the Washington, D.C. area to accept a full time position at Capital One.',
    logo: 'dcIcon',
    location: 'Washington, DC',
  },
  {
    date: '2018 - 2019',
    title: 'Capital One',
    info:
      'When I returned to Capital One, I built out an internal machine learning application with some amazing engineers. I primarily focused on building out the web application and CICD pipelines. I also contributed code to our design system enabling engineers across the company to build cohesive user experiences.',
    logo: 'capitalone',
    location: 'McLean, VA',
  },
  {
    date: '2019 - present',
    title: 'Capital One',
    info: `In 2019, I transitioned to work on Capital One's Secured Card product. I build applications and services at scale using AWS, Golang, React, and Java to provide millions of people access to credit.`,
    logo: 'capitalone',
    location: 'McLean, VA',
  },
];

const TimelineSection = ({ date, title, info, image, location }) => (
  <li className="flex mb-12 last:pb-12 last:m-0">
    <div className="flex-1 flex flex-col">
      <span className="text-right text-lg ">{title}</span>
      <span className="text-right font-light">{location}</span>
      <span className="text-right font-light">{date}</span>
    </div>
    <div className="flex-0 mx-8 z-10 self-start bg-white">
      <Img fixed={image} />
    </div>
    <div className="flex-1">
      <p>{info}</p>
    </div>
  </li>
);

TimelineSection.propTypes = {
  date: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Timeline = ({ images }) => {
  const [firstEvent, ...otherEvents] = timelineData;
  return (
    <div className="my-4 mt-0 max-w-2xl left-0 right-0 mx-auto">
      <ul className="z-0">
        <div className="relative pt-12">
          <span
            className="timeline absolute border-l-4 border-gray-400 border-dashed"
            css={{
              width: '0',
              height: '100%',
              top: 0,
              left: 0,
              right: 0,
              margin: 'auto',
            }}
          />
          {otherEvents.reverse().map((data, i) => (
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
