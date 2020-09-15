import React  from 'react'

import './App.scss'

// const generateId = (length = 4) => Math.random().toString(36).substring(2, 2 + length);

const Todos=() =>{
    // const defaultTodo ={}
    //  defaultTodo[generateId()] = {
    //     // title:
    // }
    return(
    <div className="Todos">
        <h2>
          Title   
        </h2>
        
   </div>
    )
}

const SearchBox =() =>(
    <div className="SearchBox">
        <img src="/vectors/search.png" alt="search-icon"/>
        <input type="text" />
    </div>
)


const TodoWrapper = () =>(
    <div className="TodoWrapper">

        <h3>
            CV Notes
        </h3>
        <SearchBox />
        <Todos />
        
    </div>
)
const AddTodo = () =>(
    <div className="AddTodo">
        <input type="text" placeholder="" />
        <textarea ></textarea>
    </div>
)

const MainContent =() =>(
    <div  className="MainConent">
        <AddTodo />
        <div>
            
        </div>
    </div>
)

export default() => (
    <div  className="App">
      <TodoWrapper />
      <MainContent />
    </div>
)