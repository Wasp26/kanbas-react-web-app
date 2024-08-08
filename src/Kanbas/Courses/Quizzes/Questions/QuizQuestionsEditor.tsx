import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa6';
import { deleteQuestion, setQuestions } from './reducer';
import * as client from './client';

export default function QuizQuestionsEditor() {
  const [newQuestionType, setNewQuestionType] = useState('multiple-choice');
  const dispatch = useDispatch();
  const questions = useSelector((state: any) => state.questions.questions);
  const navigate = useNavigate();


  const fetchQuestions = async () => {
    const questions = await client.fetchAllQuestions();
    dispatch(setQuestions(questions));
  };

  const handleAddQuestion = () => {
    navigate(`./edit/${newQuestionType}/new`);
  };

  const handleEditQuestion = (id: string) => {
    const question = questions.find((q: any) => q.id === id);
    if (question) {
      const path = `./edit/${question.type}/${id}`;
      navigate(path);
    }
  };

  const handleDeleteQuestion = async (id: string) => {
   await client.deleteQuestion(id);
   dispatch(deleteQuestion(id));
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
 
  const totalQuestions = questions.length;
  const totalPoints = questions.reduce((sum: number, question: any) => sum + question.points, 0);

  return (
    <div>
      <div><h2>QUESTIONS EDITOR</h2>
        <span className='float-end'>
          <label className='me-3'> Questions: {totalQuestions}</label>
          <label >Points: {totalPoints}</label>
        </span>
      </div>

      <div className='d-flex mb-3'>
        <select
          className='form-select w-25 me-2'
          value={newQuestionType}
          onChange={(e) => setNewQuestionType(e.target.value)}
        >
          <option value="true-false">True/False</option>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="fill-in-blanks">Fill in the Blanks</option>
        </select>
        <button className='btn btn-lg btn-secondary' onClick={handleAddQuestion}>Create Question</button>
      </div>
      <hr />
      {questions.map((question: any, index: number) => (
        <div key={question.id} className="question">
          <p>Type: {question.type} <span className='float-end'>Points: {question.points}</span></p>
          <FaTrash onClick={() => handleDeleteQuestion(question.id)} className='float-end text-danger' />
          <p>Q{index + 1}: {question.text}
          </p>
          {question.type === 'multiple-choice' && question.choices && (
            <ul className='list-group'>
              {question.choices.map((choice: any) => (
                <li key={choice.id} className='list-group-item w-25' style={{ color: choice.isCorrect ? 'green' : 'black' }}>
                  {choice.text}
                </li>
              ))}
            </ul>
          )}

          {question.type === 'true-false' && (
            <ul className='list-group'>
              <li className='list-group-item w-25' style={{ color: question.answer === true ? 'green' : 'black' }}>True</li>
              <li className='list-group-item w-25' style={{ color: question.answer === false ? 'green' : 'black' }}>False</li>
            </ul>
          )}

          {question.type === 'fill-in-blanks' && question.blanks &&(
            <ul className='list-group'>
              {question.blanks.map((blank :any) =>(
                <li key={blank.id} className='list-group-item w-25'>
                  {blank.text}
                </li>
              ))}
            </ul>
          )}

          <button className='btn btn-secondary mt-2' onClick={() => handleEditQuestion(question.id)}>Edit</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
