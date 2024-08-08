import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUESTION_API = `${REMOTE_SERVER}/api/questions`;

export const createQuestion = async (question: any) => {
    console.log("reached")
    const { data } = await axios.post(QUESTION_API, question);
    return data;
  };

  export const fetchAllQuestions = async () => {
    const { data } = await axios.get(QUESTION_API);
    return data;
  };

  export const deleteQuestion = async ( questionId: string) => {
    console.log("reached client delete")
    const response = await axios.delete(`${QUESTION_API}/${questionId}`);
    return response.data;
  };
  
  export const updateQuestion = async (id: string,question:any) => {
    console.log("reached client update");
    const response = await axios.put(`${QUESTION_API}/${id}`, question);
    return response.data;
  }

  