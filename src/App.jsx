import { customAlphabet } from "nanoid";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useLocalStorage } from "./useLocalStorage";
import "./App.css";
import { useState } from "react";

const nanoid = customAlphabet("1234567890abcdef", 10);
// const api_url = "http://localhost:5172/api/shorturl";
const api_url = "https://urlshortner-9rpj.onrender.com/api/shorturl";

function App() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setlsData } = useLocalStorage("api_data", {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      url: e.target.url.value,
      url_id: nanoid(5),
    };
    let response = await fetch(api_url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "https://uner.vercel.app/",
        "Access-Control-Allow-Methods": "POST , GET",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, application/json, text/plain",
      },
      body: JSON.stringify(data),
      // mode: "cors",
    });
    if (response.ok) {
      response.json().then((data) => {
        console.log(data);
        if (data && Object.keys(data).length) {
          navigate("/api/shorturl");

          setlsData(data);
        }
      });
    } else setError(response.data.error);
  };

  return (
    <>
      <h1>URL Shortener Microservice</h1>
      <h2>Short URL Creation</h2>
      <p>
        Example: <code>POST [project_url]/api/shorturl</code> -
        <code>https://rebaseacademy.com</code>
      </p>
      <main>
        <form
          action="api/shorturl"
          method="POST"
          className="form"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend>URL Shortner</legend>
            <div>
              <label htmlFor="url">URL</label>
              <input
                type="text"
                id="url"
                name="url"
                placeholder="Enter the url to shorter"
              />
            </div>

            <div>
              <input type="submit" value="POST URL" />
            </div>
          </fieldset>
        </form>
      </main>
      <div>
        <center>
          <p>{error}</p>
        </center>
      </div>
      <footer>
        <p>
          By avom brice from &nbsp;
          <a href="https://rebaseacademy.com/">rebaseacademy.com</a>
        </p>
      </footer>
    </>
  );
}

App.prototypes = {
  data: PropTypes.object,
  setlsData: PropTypes.func,
  nanoid: PropTypes.string,
};

export default App;
