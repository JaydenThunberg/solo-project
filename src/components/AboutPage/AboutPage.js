import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p align="center" >
      This is an app designed around the needs and wants of the vintage and pinup communities.
      <br/> 
      Many of my friends have said they have struggled to find events, clothing, and friends 
      who share similar interests related to these communities. 
      My goal was to design an app that does just that. There will be an event page that allows 
      users to find events and stores page that shows stores that carry the different styles 
      of clothing. In the future, there will be a feature that will show users who have registered 
      with the app and allow them to connect with others. Eventually there will be a search function 
      to allow users to find others based on similarities such as, preferred category, era, or location. 
      They will then be able to connect through whichever social media platform the users decide on.
      </p>
      <ul>
        <span>Technologies Used:</span>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Redux</li>
        <li>Redux-Saga</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>PostrgreSQL</li>
        <li>Responsive Web Design(Flexbox, CSS Grid)</li>
      </ul>
    </div>
  </div>
);

export default AboutPage;
