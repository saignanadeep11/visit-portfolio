import axios from "axios";
const url = process.env.VITE_BACKEND_URL || import.meta.env.VITE_BACKEND_URL;
export const signUp = async (data) => {
  return await axios
    .post(`${url}/user/api/SignUp`, data, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      return "User Has been Created";
    })
    .catch((err) => {
      console.error(err);
      return err.response.data.errorResponse.errmsg;
    });
};
export const login = async (data) => {
  return await axios
    .post(`${url}/user/api/login`, data, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      return err.response.data;
    });
};

export const isUserLogin = async () => {
  let user = null;
  await axios
    .get(`${url}/user/api/isUser`, {
      withCredentials: true,
    })
    .then((res) => {
      user = res.data;
      // console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
  return user;
};

export const logOut = async () => {
  await axios
    .post(`${url}/user/api/logOut`, {}, { withCredentials: true })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const verifyEmail = async (token) => {
  let data = null;
  await axios
    .get(`${url}/user/api/verifyEmail/${token}`, {
      withCredentials: true,
    })
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  return data;
};

export const sendEmail = async () => {
  await axios
    .post(
      `${url}/user/api/sendEmail`,
      {},
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const isMailVerified = async () => {
  let eod;
  await axios
    .get(`${url}/user/api/isMailVerified`, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      eod = res;
    })
    .catch((err) => {
      console.log(err.data);
    });
  return eod;
};

export const getAdminUser = async () => {
  let data = null;
  await axios
    .get(`${url}/user/api/getAdminUser`, {
      withCredentials: true,
    })
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  return data;
};
