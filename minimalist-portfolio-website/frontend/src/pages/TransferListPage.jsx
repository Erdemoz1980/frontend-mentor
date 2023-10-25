import { useState } from 'react';
import TransferListCardLeft from "../components/TransferListCardLeft";
import TransferListCardRight from "../components/TransferListCardLeft";
import ChevronRight from '../components/ChevronRight';
import ChevronLeft from '../components/ChevronLeft';

const TransferListPage = () => {
  const checklist = [
    {id:1000, type:'checkbox', label:1},
    {id:2000, type:'checkbox', label:2},
    {id:3000, type:'checkbox', label:3},
    {id:4000, type:'checkbox', label:4},
  ]
  const [activeSelectionLeft, setActiveSelectionLeft] = useState(checklist);
  const [activeSelectionRight, setActiveSelectionRight] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);


  const onChangeHandler = (e) => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.find(prevSelectedItem => prevSelectedItem.id === Number(e.target.id))
        ? prevSelectedItems.filter(prevSelectedItem => prevSelectedItem.id !== Number(e.target.id))
        : [...prevSelectedItems, { name: e.target.name, id: Number(e.target.id), type:'radio' }]
    )
  };

  const handleMove = {
    right: () => {
      selectedItems.forEach(selectedItem => {
        setActiveSelectionLeft(prevActiveList =>
          prevActiveList.filter(prevActiveItem => prevActiveItem.id !== selectedItem.id));
        
        const newItem = checklist.find(checkListItem => checkListItem.id === selectedItem.id)
        setActiveSelectionRight(prevActiveList => {
          if (prevActiveList.find(prevActiveItem => prevActiveItem.id === newItem.id)) {
            return [...prevActiveList]
          } else {
            return [...prevActiveList, {id:newItem.id, name:'right', type:newItem.type, label:newItem.label}]
          }
        })
      });
      setSelectedItems([])
    },
    left: () => {
      selectedItems.forEach(selectedItem => {
        setActiveSelectionRight(prevActiveList =>
          prevActiveList.filter(prevActiveItem => prevActiveItem.id !== selectedItem.id));
        
        const newItem = checklist.find(checkListItem => checkListItem.id === selectedItem.id)
        setActiveSelectionLeft(prevActiveList => {
          if (prevActiveList.find(prevActiveItem => prevActiveItem.id === newItem.id)) {
            return [...prevActiveList]
          } else {
            return  [...prevActiveList, {id:newItem.id, name:'left', type:newItem.type, label:newItem.label}]
          }
        }
        )
      });
      setSelectedItems([])
    }
  };

  return (
    <main className="container transfer-list-wrapper">
  
      <section className="transfer-list-card">
        {
          activeSelectionLeft.map(listItem => (
            <TransferListCardLeft key={listItem.id} listItem={listItem} selectedItems={selectedItems}
              onChangeHandler={onChangeHandler} />
          ))
        }
      </section>
      
      <section className='action-buttons-wrapper'>

        <div className="buttons-container">
          <button className='move-btn' onClick={handleMove.right}
            disabled={!selectedItems.find(item=>item.name==='left')}>
          <ChevronRight />
        </button>
          <button className='move-btn' onClick={handleMove.left}
          disabled={!selectedItems.find(item=>item.name==='right')}
          >
          <ChevronLeft />
          </button>
          </div>
      </section>
      <section className="transfer-list-card">
        {
          activeSelectionRight.map(listItem => (
            <TransferListCardRight key={listItem.id} listItem={listItem} selectedItems={selectedItems}
            onChangeHandler={onChangeHandler}
            />
          ))
        }
      </section>
    </main>
  )
}

export default TransferListPage