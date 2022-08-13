import React, { useState } from "react";
import { Timeline } from "./Timeline";

const Index = () => {
  const [content, setContent] = useState([
    { text: "Registration Open", date: "12th Auguest, 2022" },
    { text: "Registration Closed", date: "16th Auguest, 2022" },
    { text: "Technical Session", date: "" },
    { text: "Hackathon day", date: "2nd September, 2022" },   
  ]);
 
  return (
    <div>
        
      <Timeline content={content} />
    </div>
  );
};

export default Index;
