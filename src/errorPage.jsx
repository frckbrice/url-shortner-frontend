import { useRouteError } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export default function ErrorPage() {
  const error = useRouteError();
  const { original_url } = useLocalStorage("api_data").lsData;
   window.open(`${original_url}`, "_self", "noreferrer");

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status}</i>
        <i>{error.statusText || error.message || error.data}</i>
      </p>
    </div>
  );
}
