import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (userId) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const editUserService = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};

const getALlCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};

const getOutStandingDoctorService = (limit) => {
  return axios.get(`/api/get-outstanding-doctor?limit=${limit}`);
};

const getAllDoctors = () => {
  return axios.get(`/api/get-all-doctors`);
};

const createDetailInfoDoctor = (data) => {
  return axios.post("/api/save-info-doctor", data);
};

const getDetailInfoDoctor = (doctorId) => {
  return axios.get(`/api/get-detail-doctor-by-id?id=${doctorId}`);
};

const saveBulkScheduleDoctor = (data) => {
  return axios.post("/api/bulk-create-schedule", data);
};

const getScheduleDoctorByDate = (doctorId, date) => {
  return axios.get(
    `/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`
  );
};

let getExtraInforDoctorById = (doctorId) => {
  return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`);
};

let getProfileDoctorById = (doctorId) => {
  return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`);
};

let postPatientBookAppointment = (data) => {
  return axios.post("/api/patient-book-appointment", data);
}

export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getALlCodeService,
  getOutStandingDoctorService,
  getAllDoctors,
  createDetailInfoDoctor,
  getDetailInfoDoctor,
  saveBulkScheduleDoctor,
  getScheduleDoctorByDate,
  getExtraInforDoctorById,
  getProfileDoctorById,
  postPatientBookAppointment,
};
