import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZ_API = `${REMOTE_SERVER}/api/quizzes`;

export const fetchQuizDetails = async (courseId: string, quizId: string) => {
  const { data } = await axios.get(`${QUIZ_API}/${courseId}/${quizId}`);
  return data;
};

export const createQuizDetails = async (courseId: string, quiz: any) => {
  const { data } = await axios.post(`${QUIZ_API}/${courseId}`, quiz);
  return data;
};

export const updateQuizDetails = async (courseId: string, quiz: any) => {
  const { data } = await axios.put(`${QUIZ_API}/${courseId}/${quiz._id}`, quiz);
  return data;
};

export const fetchQuizzes = async (courseId: string) => {
  const { data } = await axios.get(`${QUIZ_API}/${courseId}`);
  return data;
};
