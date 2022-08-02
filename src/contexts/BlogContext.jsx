import { useEffect, useState } from "react";
import { createContext } from "react";
import { getCardData } from "../helpers/functions";

export const BlogContext = createContext();
const BlogContextProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    getCardData(setCardInfo);
  }, []);

  return (
    <BlogContext.Provider value={{ cardInfo }}>{children}</BlogContext.Provider>
  );
};

export default BlogContextProvider;
