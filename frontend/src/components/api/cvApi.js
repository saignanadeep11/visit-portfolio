import axios from "axios";

export const createCv = async (data) => {
  return await axios
    .post("http://localhost:8000/cv/api/createCv", data, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      return "Your Cv is Created";
    })
    .catch((err) => {
      console.error(err);
      return err.response.data.error;
    });
};

export const getCv = async (uuid) => {
  let cvData;
  await axios
    .get(`http://localhost:8000/cv/api/getCv/${uuid}`, {
      withCredentials: true,
    })
    .then((res) => {
      // console.log(res,res.data)
      cvData = res.data;
      // return res.data
    })
    .catch((err) => {
      console.error(err);
    });
  // console.log(cvData)
  return cvData;
};

export const getMyCv = async () => {
  let cv;
  await axios
    .get("http://localhost:8000/cv/api/getMyCv", { withCredentials: true })
    .then((res) => {
      cv = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return cv;
};

export const deleteMyCv = async () => {
  await axios
    .delete("http://localhost:8000/cv/api/deleteCv", { withCredentials: true })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

export const getAdmin = async () => {
  let data = null;
  await axios
    .get("http://localhost:8000/cv/api/getAdmin", { withCredentials: true })
    .then((res) => (data = res.data))
    .catch((err) => console.log(err));
  return data;
};
