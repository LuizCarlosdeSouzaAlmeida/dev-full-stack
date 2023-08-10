import axios from "src/utils/axios";

export const getLectures = async () => {
  const response = await axios.get("/api/lecture/");
  console.log(response.data);
  return response.data;
};

export const getLectureById = async (id) => {
  const response = await axios.get(`/api/lecture/${id}`);
  console.log(response.data);
  return response.data;
};

export const postLecture = async (lecture) => {
  const response = await axios.post("/api/lecture/", lecture);
  console.log(response.data);
  return response.data;
};

export const updateLectureById = async (id, lecture) => {
  const response = await axios.put(`/api/lecture/${id}`, lecture);
  console.log(response.data);
  return response.data;
};

export const deleteLectureById = async (id) => {
  const response = await axios.delete(`/api/lecture/${id}`);
  console.log(response.data);
  return response.data;
};
