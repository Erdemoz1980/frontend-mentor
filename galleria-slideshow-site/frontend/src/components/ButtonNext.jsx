
const ButtonNext = ({ navigateNext, disabled }) => {
  return (
    <button className="btn" onClick={navigateNext} disabled={disabled}>
        <svg className='icon-nav' width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke={`${disabled ? '#A8A8A8' : '#000'}`} fill="none" fillRule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" strokeWidth="2" /><path fill='none' d="M24.708.5h1v22.775h-1z" /></g></svg>
    </button>
 
  )
};

export default ButtonNext