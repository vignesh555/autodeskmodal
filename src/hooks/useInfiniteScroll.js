import { useEffect, useState } from "react";

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(true);

  const handleScroll = () => {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 2
    ) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
    // eslint-disable-next-line
  }, [isFetching]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
