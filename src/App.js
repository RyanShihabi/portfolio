import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import { Fab } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
  {
    glb: "/ISS_stationary.jsx",
    title: "ISS Archaeology Project",
    text: "ISS Text"
  }
];

const clickLeft = (ref) => {
  
  console.log(ref);
  ref.current?.goBack()
}

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);

  // console.log(ref);


  return (
    <div className="card" 
    style={{  
      backgroundImage: "url(" + "https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{ width: "100%", position: "relative" }} >
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={width*0.5}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={1}
                customScales={[1, 1]}
                transitionTime={450}
              />
            );
          }}
        />
        <Fab
          className="card-button left"
          size="small"
          onClick={() => {ref.current?.goBack()}}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="card-button right"
          size="small"
          onClick={() => ref.current?.goNext()}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
};

export default CardExample;
