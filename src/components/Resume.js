import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    // Redirect to your resume URL
    window.location.href =
      "https://drive.google.com/file/d/1fmAGmOcZK3jaNK4OB_TTMcG1TNDYfNCK/view";
  }, []);

  return <div>Redirecting to resume...</div>;
};

export default Resume;
