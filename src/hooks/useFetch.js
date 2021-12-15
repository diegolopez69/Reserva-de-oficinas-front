import { useContext, useState, useEffect } from "react";

import { UserContext } from "../context";
import { myAxios } from "../Utils";

export const FETCHSTATES = {
  loading: "loading",
  error: "error",
  success: "success",
};

export const useFetch = (url) => {
  const source = myAxios.CancelToken.source();

  const { token } = useContext(UserContext);

  const [status, setStatus] = useState(FETCHSTATES.loading);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    setData({});
  }, [url]);

  useEffect(() => {
    setStatus(FETCHSTATES.loading);
    myAxios({
      method: "GET",
      url,
      cancelToken: source.token,
      ...(token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : {}),
    })
      .then(({ data }) => {
        setData(data._embedded);
        setError(null);
        setStatus(FETCHSTATES.success);
      })
      .catch((error) => {
        if (!myAxios.isCancel(error)) {
          setData(null);
          setError(error);
          setStatus(FETCHSTATES.error);
        }
        console.error(error);
      });

    return () => source.cancel("Petición cancelada");
  }, [url]);

  return [data, status, error];
};
