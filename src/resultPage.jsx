import { useLocalStorage } from "./useLocalStorage";

const ResultPage = () => {
  const { short_url, original_url } = useLocalStorage("api_data").lsData;

  const styled = {
    backgroundColor: "#eee",
    padding: "1rem",
    color: "#274562",
    fontSize: "23px",
  };

  return (
    <div>
      <pre style={styled}>
        <code>{JSON.stringify({ original_url, short_url })}</code>
      </pre>
    </div>
  );
};

export default ResultPage;
