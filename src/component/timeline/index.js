import React, { useState } from "react";
import { Timeline } from "./Timeline";

const Index = () => {
  const [content, setContent] = useState([
    { text: "Registration Open", date: "12th Augest, 2022" },
    { text: "Registration Closed", date: "30th Augest, 2022" },
    { text: "Tehnical Session by Sana Commerce", date: "" },
    { text: "Technical Session by Exact Pro", date: "" },
    { text: "Hackothon day", date: "3rd September, 2022" },
    { text: "SHECODERess Day", date: "3rd September, 2022" },
    
  ]);
 
  return (
    <div>
        
      <Timeline content={content} />
    </div>
  );
};

export default Index;
