import React, { useState } from "react";
import { Timeline } from "./Timeline";

const Index = () => {
  const [content, setContent] = useState([
    { text: "Registration Open", date: "12th Augest, 2022" },
    { text: "Registration Closed", date: "30th Augest, 2022" },
    { text: "Hackothon day", date: "3rd September, 2022" },
    { text: "Hackothon day", date: "3rd September, 2022" },
    { text: "Hackothon day", date: "3rd September, 2022" },
    { text: "SHECODERess Say", date: "3rd September, 2022" },
    
  ]);
 
  return (
    <div>
        
      <Timeline content={content} />
    </div>
  );
};

export default Index;
