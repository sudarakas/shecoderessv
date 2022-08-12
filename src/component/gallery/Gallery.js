import React from "react";
import { Container } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import slider1 from "../../assets/images/slider/slider1.jpg";
import slider2 from "../../assets/images/slider/slider2.jpg";
import slider4 from "../../assets/images/slider/slider4.jpg";
import slider5 from "../../assets/images/slider/slider5.jpg";
import slider6 from "../../assets/images/slider/slider6.jpg";
import slider7 from "../../assets/images/slider/slider7.jpg";
import slider8 from "../../assets/images/slider/slider8.jpg";
import slider9 from "../../assets/images/slider/slider9.jpg";


export const Gallery = () => {
   const images = [
       {
         original: slider1,
         thumbnail: slider1,
       },
       {
        original: slider2,
        thumbnail: slider2,
      },
      {
        original: slider4,
        thumbnail: slider4,
      },
      {
        original: slider5,
        thumbnail: slider5,
      },
      {
        original: slider6,
        thumbnail: slider6,
      },
      {
        original: slider7,
        thumbnail: slider7,
      },
      {
        original: slider8,
        thumbnail: slider8,
      },
      {
        original: slider9,
        thumbnail: slider9,
      },
     ];
 return (
   <Container fluid className="section gallery">
   <ImageGallery autoPlay="true" items={images} />
   </Container>
 );
};