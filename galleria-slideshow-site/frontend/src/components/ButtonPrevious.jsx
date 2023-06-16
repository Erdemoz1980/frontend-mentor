
const ButtonPrevious = ({ navigateBack, disabled }) => {
  return (
    <button className="btn" onClick={navigateBack}  disabled={disabled}>
      <svg className='icon-nav' width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke={`${disabled ? '#A8A8A8' : '#000'}`} fill='none' fillRule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" strokeWidth="2" /><path fill='none' d="M.986.5h-1v22.775h1z" /></g></svg>
    </button>
    
  )
}

export default ButtonPrevious