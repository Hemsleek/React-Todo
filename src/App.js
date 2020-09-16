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
        <p>
        How to withdraw Aishat Money and with been unaware
        </p>
        <span className="Details"> 

        </span>
        
   </div>
    )
}
// Todos
const SearchBox =() =>(
    <div className="SearchBox">
        <img src="/vectors/search.svg" alt="search-icon"/>
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
// MAin-content
const AddTodo = () =>(
    <div className="AddTodo">
        <input type="text" placeholder="Title" />
        <textarea placeholder="Type your note"></textarea>

        <div className="DesignSubmit">

            <div className="Colors">
                <img src="/vectors/teal.svg" alt="teal" />
                <img src="/vectors/purple.svg" alt="yellow" />
                <img src="/vectors/yellow.svg" alt="yellow" />
            </div>
            <img src="/vectors/tick.svg" alt="tick" />
        </div>
    </div>
)

const MainContent =() =>(
    <div  className="MainContent">
        <AddTodo />
        <div className="Screen">
            <h3 className="Title">
                How to withdraw Aishat Money with her been unaware
            </h3>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione id explicabo distinctio quaerat non? Necessitatibus enim vel, ducimus perspiciatis debitis provident alias, aperiam aliquam placeat cumque tempora maxime dignissimos ipsa.
            </p>
        </div>
    </div>
)

export default() => (
    <div  className="App">
      <TodoWrapper />
      <MainContent />
    </div>
)