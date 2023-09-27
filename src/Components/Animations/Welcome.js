import React, { useEffect, useState } from "react";
import "./welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showLine4, setShowLine4] = useState(false);
  const [showLine5, setShowLine5] = useState(false);
  const [showLine6, setShowLine6] = useState(false);
  const [showLine7, setShowLine7] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      navigate("Home")
    }, 6000);
  }, [navigate]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLine2(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLine3(true);
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLine4(true);
    }, 900);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLine5(true);
    }, 1100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLine6(true);
    }, 1300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLine7(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="background">
      <div className="hexagon">
        <div className="hexagonLine-1"></div>
        {showLine2 && <div className="hexagonLine-2"></div>}
        {showLine3 && <div className="hexagonLine-3"></div>}
        {showLine4 && <div className="hexagonLine-4"></div>}
        {showLine5 && <div className="hexagonLine-5"></div>}
        {showLine6 && <div className="hexagonLine-6"></div>}
        {showLine7 &&  <h3 className="letter">S</h3>}
      
      </div>
    </div>
  );
}

export default Welcome;
