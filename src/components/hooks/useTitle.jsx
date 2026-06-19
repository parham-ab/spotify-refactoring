import { useEffect } from "react";

const useTitle = (title) => {
  return useEffect(() => {
    document.title = title;
  }, []);
};

export default useTitle;