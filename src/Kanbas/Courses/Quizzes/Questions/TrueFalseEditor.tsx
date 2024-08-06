
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Editor from 'react-simple-wysiwyg'; 
import { addQuestion } from './reducer';

const initialState = {
    title : '',
    points: 0,
    question: '',
    answer: false,
}

export default function TrueFalseEditor() {
    const {cid, id} = useParams();
    const [formState, setFormState] = useState(initialState);
    const dispatch = useDispatch();

  const navigate = useNavigate(); 

  const handleSave = () => {
   const questionData = {
    id: id,
    type: 'true-false',
    title: formState.title,
    points: formState.points,
    text: formState.question,
    answer: formState.answer
   }

   dispatch(addQuestion(questionData))
   navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/create/Questions`); 
  };

  const handleFieldChange = (field: any, value: any) => {
        setFormState(prevState =>({
            ...prevState,
            [field]: value
        }))
  }

  const handleAnswer = (checked: any) =>{
        setFormState(prevState =>({
            ...prevState,
            answer : checked
        }))
  }


  return (
    <div>
      <h2>True/False Question Editor</h2>
      <div>
        <label>
          Title
          <input 
            type="text" 
            className='form-control'
            value={formState.title} 
            onChange={(e) => handleFieldChange('title', e.target.value)} 
            placeholder="Enter question title..."
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Points
          <input 
            type="number" 
            className='form-control'
            value={formState.points} 
            onChange={(e) => handleFieldChange('points', Number(e.target.value))} 
            placeholder="Enter points..."
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Question
          <Editor 
            value={formState.question} 
            onChange={(e) => handleFieldChange('question',e.target.value)} 
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Correct Answer
          <div className='form-check'>
            <input 
              type="radio" 
              id="trueOption" 
              name="answer" 
              checked={formState.answer} 
              onChange={() => handleAnswer(true)} 
              className='form-check-input'
            />
            <label htmlFor="trueOption" className='form-check-label'>
              True
            </label>
          </div>
          <div className='form-check'>
            <input 
              type="radio" 
              id="falseOption" 
              name="answer" 
              checked={!formState.answer} 
              onChange={() => handleAnswer(false)} 
              className='form-check-input'
            />
            <label htmlFor="falseOption" className='form-check-label'>
              False
            </label>
          </div>
        </label>
      </div>
      <hr />
      <div>
        <button className='btn btn-danger me-3' onClick={handleSave}>Save/Update Question</button>
        <Link className='btn btn-secondary'  to={`/Kanbas/Courses/${cid}/Quizzes/Editor/create/Questions`}>Cancel</Link>
      </div>
    </div>
  );
}
