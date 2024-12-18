import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
    });
    window.addEventListener("online", () => {
      setOnline(true);
    });
  }, []);
  console.log(online);
  return online;
};

export default useOnline;
