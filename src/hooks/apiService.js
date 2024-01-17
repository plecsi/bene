import axios from "axios"

export const apiService = () => {
    const HOME_URL = '/'
    const api = axios.create({
        baseURL: '',
        withCredentials: false,
        responseType: "json"
    })

    const collectionResponseHandler = async response =>
    Promise.resolve({
      data: response.data,
      raw: response
    })

    const generalErrorHandler = error => {
        if (error.response.status === 401) {
          window.location.href = HOME_URL;
          console.log('ApiService error')
        }
    
        console.error(`ApiService ${error}`);
    
        return Promise.reject(error);
      }

    const query = (resource, params) => {
        return api
          .request({
            method: "get",
            url: `${resource}`,
            params
          })
          .then(collectionResponseHandler)
          .catch(generalErrorHandler);
      }

      return {query}
}