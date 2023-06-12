import React, { useState, useEffect } from "react";

export const useFetch = (url, params) => {
  const [state, setState] = useState({ loading: true });
  useEffect(() => {
    setState({ loading: true });
    fetch(url, params)
      .then((resp) => resp.json())
      .then((data) => setState({ data: data }))
      .catch((error) => setState({ error: error }));
  }, [url]);
  return state;
};
