import axios from "axios";

type IMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";

export const urlApi = "https://back-end-cepd.onrender.com";
export const urlApiSocket = "ws://back-end-cepd.onrender.com";

// export const urlApi = "http://localhost:3009";
// export const urlApiSocket = "ws://localhost:3009";

console.log("urlApi", urlApi);

export const callApi = async (url: string, method: IMethod, body?: any) => {
  try {
    return await axios({
      url: `${urlApi}/${url}`,
      method: method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: `Bearer ${body.token}`,
      },
    });
  } catch (error: any) {
    // if (error.message.includes("401")) {
    //   window.location.replace("/");
    // }
    throw error;
  }
};

export const UploadImg = async (url: string, formData?: any) => {
  try {
    return await axios.post(`${urlApi}/${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `${window.sessionStorage.getItem("token")}`,
      },
    });
  } catch (error: any) {
    throw error;
  }
};

export const UploadOneImg = async (url: string, file: any, folder: string) => {
  const formData = new FormData();
  formData.append("images", file);

  try {
    const response = await axios.post(
      `http://localhost:3009/${url}?folder=${folder}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: `${window.sessionStorage.getItem("token")}`,
        },
      }
    );
    // Assuming the server responds with the uploaded file information
    return response.data;
  } catch (error) {
    console.error("Error uploading images:", error);
  }
};
