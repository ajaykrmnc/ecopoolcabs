import React from 'react';
import { useState,useRef,useEffect,Fragment } from "react";
import Media from 'react-media';
import Skeleton from 'react-loading-skeleton';

import {  useLoadScript} from "@react-google-maps/api";


import Showmap from './ShowMap';


export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_Map_APP_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) return <div> <Skeleton
      circle
      height="100%"
      containerClassName="avatar-skeleton"
/> </div>;
  return(
    <>
    <Media
            queries={{
              small: "(max-width: 1199px)",
              large: "(min-width: 1199px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <Showmap width1="100%" width2="100%" className="" pos=""/>
                )}
                {matches.large && (
                  <Showmap width1="38%" width2="62%" className="d-flex" pos="fixed"  />
                )}
              </Fragment>
            )}
          </Media>
    </>
  )
  
}




// options={{
//   mapId: "8fe8fbeacdabaf33",
//   clickableIcons: false,
// }}