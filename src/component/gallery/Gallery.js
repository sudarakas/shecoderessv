import React from "react";
import { Container } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
 
export const Gallery = () => {
   const images = [
       {
         original: 'https://picsum.photos/id/1018/1000/600/',
         thumbnail: 'https://picsum.photos/id/1018/250/150/',
       },
       {
         original: 'https://picsum.photos/id/1015/1000/600/',
         thumbnail: 'https://picsum.photos/id/1015/250/150/',
       },
       {
         original: 'https://picsum.photos/id/1019/1000/600/',
         thumbnail: 'https://picsum.photos/id/1019/250/150/',
       },
     ];
 return (
   <Container fluid className="section gallery">
   <ImageGallery autoPlay="true" items={images} />
   </Container>
 );
};