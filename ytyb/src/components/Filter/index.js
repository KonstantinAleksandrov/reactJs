import React from "react";
import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/Select/MySelect";

const Filter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder='Поиск...'
                onChange={(e) => { setFilter({...filter,query : e.target.value}) }}
            />
            <MySelect
             defaultOption='Сортировка' 
             value={filter.sort} 
             options={[{ value: 'title', name: 'По названию' }, { value: 'body', name: 'По описанию' }]} 
             onChange={selectedSort=>setFilter({...filter,sort : selectedSort})} />
        </div>
    )
}

export default Filter