import React, { useState } from "react";
import { Timeline } from "./Timeline";

const Index = () => {
  const [content, setContent] = useState([
    { text: "Registration open", date: "20th Augest, 2022" },
    { text: "Registration closed", date: "30th Augest, 2022" },
    { text: "Hackothon day", date: "3rd September, 2022" },
    { text: "Hackothon day", date: "3rd September, 2022" },
    { text: "Hackothon day", date: "3rd September, 2022" },
    { text: "Hackothon day", date: "3rd September, 2022" },
    
  ]);
 
  return (
    <div>
        
      <Timeline content={content} />
    </div>
  );
};

export default Index;
