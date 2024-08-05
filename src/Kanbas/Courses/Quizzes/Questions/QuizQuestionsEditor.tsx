import React, { useState } from 'react';
import { useNavigate } from 'react-router';

type QuestionType = 'true-false' | 'multiple-choice' | 'fill-in-multiple-blanks';

type Question = {
  id: number;
  type: QuestionType;
  text: string;
  points: number;
  isEditing: boolean;
  originalText: string; // To store the original text for cancel functionality
  originalPoints: number; // To store the original points for cancel functionality
};

export default function QuizQuestionsEditor(){
  const [questions, setQuestions] = useState<Question[]>([]);
  const [nextId, setNextId] = useState(1);

  const addQuestion = () => {
    if (questions.some(q => q.isEditing && (!q.text || q.points <= 0))) {
      return;
    }
    const newQuestion: Question = {
      id: nextId,
      type: 'multiple-choice',
      text: 'default text',
      points: 0,
      isEditing: true,
      originalText: '',
      originalPoints: 0,
    };
    setQuestions([...questions, newQuestion]);
    setNextId(nextId + 1);
  };

  const updateQuestion = (id: number, updates: Partial<Question>) => {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, ...updates }
          : question
      )
    );
  };

  const navigate = useNavigate();

  const editQuestion = (id: number) => {
    const question = questions.find((q) => q.id === id);
    if (question) {
      const path = `./edit/${question.type}/${id}`;
      navigate(path);
    }
  };

  const saveQuestion = (id: number) => {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, isEditing: false, originalText: question.text, originalPoints: question.points }
          : question
      )
    );
  };

  const cancelEdit = (id: number) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((question) =>
        question.id === id
          ? { ...question, isEditing: false, text: question.originalText, points: question.originalPoints }
          : question
      );


      return updatedQuestions.filter((q) => q.text || q.isEditing);
    });
  };


  const handleFieldChange = (id: number, field: string, value: any) => {
    updateQuestion(id, { [field]: value });
  };

  const totalPoints = questions.reduce((sum, question) => sum + question.points, 0);

  return (
    <div>
      <div><h2>QUESTIONS EDITOR</h2></div>
      <div className='float-end'>
        <h3>Total Points: {totalPoints}</h3>
      </div>
      <button className='btn btn-lg btn-secondary mb-3' onClick={addQuestion}>New Question</button>
      {questions.map((question) => (
        <div key={question.id} className="question">
          {question.isEditing ? (
            <div className='d-flex  mt-3'>
              <select
              className='form-select w-25 me-2'
                value={question.type}
                onChange={(e) => handleFieldChange(question.id, 'type', e.target.value as QuestionType)}
              >
                <option value="true-false">True/False</option>
                <option value="multiple-choice" selected>Multiple Choice</option>
                <option value="fill-in-multiple-blanks">Fill in Multiple Blanks</option>
              </select>
              <input
                type="number"
                className='form-control w-25 me-2'
                value={question.points}
                onChange={(e) => handleFieldChange(question.id, 'points', parseInt(e.target.value, 10))}
              />
              <button className='btn btn-danger me-2' onClick={() => saveQuestion(question.id)}>Save</button>
              <button  onClick={() => cancelEdit(question.id)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>Type: {question.type}</p>
              <div className="d-flex">
                <p>Q{question.id}: {question.text}</p>
              </div>
              <p>Points: {question.points}</p>
              <button className='btn btn-secondary mb-3' onClick={() => editQuestion(question.id)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


