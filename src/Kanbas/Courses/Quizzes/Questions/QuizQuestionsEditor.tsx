import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, updateQuestion, deleteQuestion } from './reducer';
import { FaTrash } from 'react-icons/fa6';

const defaultQuestion = {
  id: '',
  type: 'multiple-choice',
  text: 'default text',
  points: 0,
  isEditing: true,
  originalText: '',
  originalPoints: 0,
  answers: [],
  correctAnswer: '',
  feedback: '',
};

export default function QuizQuestionsEditor() {
  const [editingQuestion, setEditingQuestion] = useState<any>(null); 
  const dispatch = useDispatch();
  const questions = useSelector((state: any) => state.questions.questions);

  const handleAddQuestion = () => {
    if (editingQuestion) {
    
      return;
    }
    const newQuestion = { ...defaultQuestion, id: new Date().getTime().toString() };
    setEditingQuestion(newQuestion); 
  };

  const navigate = useNavigate();

  const handleEditQuestion = (id: string) => {
    const question = questions.find((q: any) => q.id === id);
    if (question) {
      setEditingQuestion(question); 
      const path = `./edit/${question.type}/${id}`;
      navigate(path);
    }
  };

  const handleDeleteQuestion = (id: string) => {
    dispatch(deleteQuestion(id));
  };

  const handleSaveQuestion = () => {
    if (editingQuestion) {
      dispatch(addQuestion(editingQuestion)); 
      setEditingQuestion(null); 
    }
  };

  const handleCancelEdit = () => {
    if (editingQuestion) {
      const isInList = questions.some((q: any) => q.id === editingQuestion.id);
      
      if (!isInList) {
        dispatch(deleteQuestion(editingQuestion.id));
      }
      setEditingQuestion(null);
    }
  };

  const handleFieldChange = (field: string, value: any) => {
    if (editingQuestion) {
      setEditingQuestion({ ...editingQuestion, [field]: value });
    }
  };

  const totalQuestions = questions.length;
  const totalPoints = questions.reduce((sum: number, question: any) => sum + question.points, 0);

  return (
    <div>
      <div><h2>QUESTIONS EDITOR</h2></div>
      <div className='float-end'>
        <h3>Total Questions: {totalQuestions}</h3>
        <h3>Total Points: {totalPoints}</h3>
      </div>
      <button className='btn btn-lg btn-secondary mb-3' onClick={handleAddQuestion}>New Question</button>
      {editingQuestion ? (
        <div className='d-flex mt-3'>
          <select
            className='form-select w-25 me-2'
            value={editingQuestion.type}
            onChange={(e) => handleFieldChange('type', e.target.value)}
          >
            <option value="true-false">True/False</option>
            <option value="multiple-choice">Multiple Choice</option>
            <option value="fill-in-multiple-blanks">Fill in Multiple Blanks</option>
          </select>
          <input
            type="number"
            className='form-control w-25 me-2'
            value={editingQuestion.points}
            onChange={(e) => handleFieldChange('points', parseInt(e.target.value, 10))}
          />
          <button className='btn btn-danger me-2' onClick={handleSaveQuestion}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        questions.map((question: any, index: number) => (
          <div key={question.id} className="question">
            <p>Q{index + 1}: {question.text}</p>
            <FaTrash onClick={() => handleDeleteQuestion(question.id)} className='float-end text-danger'/>
            <div className="d-flex">
              <p>Type: {question.type}</p>
            </div>
            <p>Points: {question.points}</p>
            <button className='btn btn-secondary mb-3' onClick={() => handleEditQuestion(question.id)}>Edit</button>
          </div>
        ))
      )}
    </div>
  );
};
