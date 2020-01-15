import React, { useState } from 'react';
import NationalTrustLocations from './national-trust-places.json';

function App() {

  // const [list, setlist] = useState([]);

 const locations = () => {

  // console.log(NationalTrustLocations);

  const seList = [];
  Object.keys(NationalTrustLocations).map(function(key, index) {

    if (NationalTrustLocations[key].cmsRegion === 'RegionLondonSouthEast' && NationalTrustLocations[key].subTitle.includes("Kent")) {

      console.log(NationalTrustLocations[key]);

      seList.push({
        title: NationalTrustLocations[key].title,
        location: NationalTrustLocations[key].subTitle,
        image: NationalTrustLocations[key].imageUrl
      })
    }
    return false;
  });
  
  console.log(seList);
 }

 locations();

  return (
    <h1>Locations</h1>
  );
}

export default App;
