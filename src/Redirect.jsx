import { useParams } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

const Redirect = () => {
  const params = useParams();
  const { original_url } = useLocalStorage("api_data").lsData;

  useEffect(() => {
    if (params.id) window.location = original_url;
  }, [original_url, params.id]);

  return;
};

export default Redirect;
