import React from "react";
import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  const { loading, data, error } = useFetch(
    "http://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">Loading Error</div>;
  return (
    <section className="section">
      {data &&
        data.length > 0 &&
        data.map((item, id) => (
          <div className="post" key={id}>
            {item.title}
          </div>
        ))}
    </section>
  );
}

export default App;
