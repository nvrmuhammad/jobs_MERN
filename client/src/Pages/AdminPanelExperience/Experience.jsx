import { useState } from 'react'
import './Experience.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { VscEdit } from 'react-icons/vsc'

const Experience = ({ data, handleDeleteCategory, handleUpdateCategory }) => {
  const [disable, setDisable] = useState(true)
  const [value, setValue] = useState(data.name)
  const deleteCategory = () => {
    handleDeleteCategory(data._id)
  }
  const updateCategory = () => {
    setDisable(false)
    handleUpdateCategory(data._id, value)
  }
  const saveCategory = () => {
    setDisable(true)
    handleUpdateCategory(data._id, value)
  }

  return (
    <div className='list__of__categories'>
      <div className='category'>
        <input
          className='name__category'
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disable}
        />
        <button
          onClick={disable ? updateCategory : saveCategory}
          id='category__action__btn'
        >
          <VscEdit />
        </button>
        <button onClick={deleteCategory} id='category__action__btn'>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  )
}
export default Experience
