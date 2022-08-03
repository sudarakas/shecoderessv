import React from 'react'
import videoBg from '../../assets/videos/videoBg.mp4';
const index = () => {
    return (
        <div className="main">
            <video className="background-video" src={videoBg} autoPlay loop muted/>
        </div>
    )
}
export default index;