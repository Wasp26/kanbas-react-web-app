export default function BlanksOptions({
    question,
    attemptDetails,
    setAttemptDetails,
  }: {
    question: any;
    attemptDetails: any;
    setAttemptDetails: (attempt: any) => void;
  }) {
    const blanks = question.blanks;
    const handleCLick = (event: any) =>{
        
    }

    return(
        <div className="ms-3 mb-3 me-3">
        {blanks.map((blank:any) => (
            <div className="form-blank mb-1" key={blank.id}>
                <label htmlFor={blank.id}>{blank.id}</label>
            <input type="text"
            id={blank.id}
            name = "answer"
            className="form-blank-input mb-3 ms-3 p-2"
            />
            </div>
        ))}
        </div>
    )
   
  }
  