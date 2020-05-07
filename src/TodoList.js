import React from 'react';
import { connect } from 'react-redux'
const TodoList = (props) => {
  let { inputValue, inputChange, handleClickAdd, list } = props
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={inputChange}
        />
        <button onClick={handleClickAdd}>Add</button>
      </div>
      <ol>
        {
          list.map((item, index) => {
            return <li key={index}>{item.content}</li>
          })
        }
      </ol>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchActionToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: 'changeInput',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClickAdd() {
      let action = {
        type: 'clickAdd'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, dispatchActionToProps)(TodoList);
