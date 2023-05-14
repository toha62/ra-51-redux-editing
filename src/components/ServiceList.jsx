import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  return (
    <ul className="list-group ">
      {items.map(o => (
        <li key={o.id} className="list-group-item d-flex justify-content-between m-1">
          <div className="align-self-center">{o.name} {o.price}</div>  
          <div>
            <button className="material-icons p-1 mx-1" onClick={() => handleEdit(o.id)}>edit</button>
            <button className="material-icons p-1 mx-1" onClick={() => handleRemove(o.id)}>close</button>
          </div>          
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
