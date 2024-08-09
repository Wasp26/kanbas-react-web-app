import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import * as client from "./client";
import { deleteQuiz, setQuizzes, updateQuiz } from "./reducer";
import QuizDetails from "./QuizDetails";
import QuizEditor from "./QuizEditor";
import QuizList from "./QuizList";
import { useState } from "react";

export default function Quizzes() {
  const { cid } = useParams();
  const { isStaff } = useSelector((state: any) => state.accountReducer);
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const dateToday = new Date();

  const fetchAllQuizzes = async () => {
    const quizzes = await client.fetchQuizzes(cid as string);
    dispatch(setQuizzes(quizzes));
  };

  const updateQuizDetails = async (quiz: any) => {
    await client.updateQuizDetails(cid as string, quiz);
    dispatch(updateQuiz(quiz));
  };

  const deleteQuizDetails = async (quizId: string) => {
    await client.deleteQuiz(cid as string, quizId);
    dispatch(deleteQuiz(quizId));
  };

  const filterQuizzesByName = async (name: string) => {
    if (name) {
      const quizzes = await client.findQuizzesByPartialName(
        cid as string,
        name
      );
      dispatch(setQuizzes(quizzes));
    } else {
      fetchAllQuizzes();
    }
  };

  const [quizDetails, setQuizDetails] = useState<any>({
    courseId: cid,
    numQuestions: 0,
    published: false,
    title: "New Quiz title",
    description: "New quiz description",
    quizType: "GRADEDQUIZ",
    points: 0,
    group: "QUIZ",
    shuffle: true,
    hasTimeLimit: true,
    timeLimit: 20,
    multipleAttempt: false,
    showCorrect: false,
    accessCode: "",
    oneQView: true,
    webcamReq: false,
    lockAfterAttempt: false,
    dueDate: "2024-07-01",
    availableFrom: "2024-06-01",
    availableUntil: "2024-07-08",
    questions: [],
  });

  const fetchQuizDetails = async (qzid: string) => {
    const quiz = await client.fetchQuizDetails(cid as string, qzid);
    setQuizDetails(quiz);
  };

  const createQuizDetails = async () => {
    const quiz = await client.createQuizDetails(cid as string, quizDetails);
    setQuizDetails(quiz);
    return quiz._id;
  };

  const saveQuizDetails = async () => {
    await client.updateQuizDetails(cid as string, quizDetails);
  };

  return (
    <div id="wd-quizzes">
      <Routes>
        <Route
          path="/"
          element={
            <QuizList
              isStaff={isStaff}
              quizzes={quizzes}
              fetchAllQuizzes={fetchAllQuizzes}
              updateQuizDetails={updateQuizDetails}
              deleteQuizDetails={deleteQuizDetails}
              filterQuizzesByName={filterQuizzesByName}
              quizDetails= {quizDetails}
            />
          }
        />
        <Route
          path="Editor/:qzid/*"
          element={
            <QuizEditor
              quizDetails={quizDetails}
              setQuizDetails={setQuizDetails}
              createQuizDetails={createQuizDetails}
              saveQuizDetails={saveQuizDetails}
              fetchQuizDetails={fetchQuizDetails}
            />
          }
        />
        <Route
          path=":qzid/Details"
          element={
            <QuizDetails
              quizDetails={quizDetails}
              fetchQuizDetails={fetchQuizDetails}
            />
          }
        />
      </Routes>
    </div>
  );
}
