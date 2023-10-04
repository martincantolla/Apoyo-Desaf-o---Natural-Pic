import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const PicsContext = createContext();

const PicsProvider = ({ children }) => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    const fetchPics = async () => {
      try {
        const response = await axios.get("/photos.json");

        setPics(response.data.photos);
      } catch (error) {
        console.error("Error fetching pictures", error);
      }
    };

    fetchPics();
  }, []); // Empty dependency array to fetch data only once

  return (
    <PicsContext.Provider value={{ pics, setPics }}>
      {children}
    </PicsContext.Provider>
  );
};

export default PicsProvider;
