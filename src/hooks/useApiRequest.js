import { useContext } from "react";
import { myAxios } from "../Utils/";

import { API_BASE_URL } from "../globals";
import { UserContext } from "../context";

export const useApiRequest = () => {
  const { token } = useContext(UserContext);

  const apiRequest = (type, endpoint, data = {}, url) => {
    return new Promise((resolve, reject) =>
      myAxios({
        method: type,
        url: url ? endpoint : `${API_BASE_URL}${endpoint}`,
        ...(token
          ? {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          : {}),
        data,
      })
        .then((res) => resolve(res.data._embedded))
        .catch((error) => reject(error))
    );
  };

  const postRequest = (endpoint, data) => apiRequest("post", endpoint, data);
  const putRequest = (endpoint, data) => apiRequest("put", endpoint, data);
  const patchRequest = (endpoint, data) => apiRequest("patch", endpoint, data);
  const deleteRequest = (endpoint) => apiRequest("delete", endpoint);
  const getRequest = (endpoint, url) => apiRequest('get', endpoint, {}, url);

  return { postRequest, putRequest, deleteRequest, patchRequest, getRequest };
};

export default useApiRequest;
