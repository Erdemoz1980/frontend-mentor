import { useContext } from 'react';
import { Context } from '../Context';

const KeywordTablet = ({ keyword }) => {
  const { setKeywords } = useContext(Context);
 
  function onClickHandler() {
    setKeywords(prevState => {
      if (prevState.includes(keyword)) {
        return prevState
      } else {
        return [...prevState, keyword]
      }
    }
    )
  }


  return (
    <div className="tab keyword" onClick={onClickHandler}>
      {keyword}
    </div>
  )
};

export default KeywordTablet