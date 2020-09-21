import React, { useState } from 'react'

import './App.scss'


const CreatedAT = (stamp) => {
    // const day =['Sun' , 'Mon' , 'Tue' , 'Wed' , 'Thu' ,'Fri' , 'Sat'];

    const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Nov', 'Dec'];

    const now = new Date(stamp);

    return `${month[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()} at ${now.toLocaleTimeString()}`
}

const generateId = (length = 4) => Math.random().toString(36).substring(2, 2 + length);

const defaultTodos = {}
defaultTodos[generateId()] = {

    title: "How to withdraw Aishat Money with her been unaware",

    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione id explicabo distinctio quaerat non? Necessitatibus enim vel, ducimus perspiciatis debitis provident alias, aperiam aliquam placeat cumque tempora maxime dignissimos ipsa.",

    created: Date.now(),
    color:{bg:"white" , text_color:'black'}

}
const Todos = ({ list, screenhandler }) => {

    return (
        <div className="Todos">

            {Object.keys(list).map(todoId => {

                const todo = list[todoId];
                return (
                    <div className="Todo" onClick={() => screenhandler(todo.title, todo.content , todo.color)} key={todoId}>
                        <p>
                            {todo.title}
                        </p>

                        <span className="Details">
                            {CreatedAT(todo.created)}
                        </span>

                    </div>
                )

            }

            )}

        </div>
    )
}

// Todos
const SearchBox = ({ onInput }) => {
    // Object.keys(todos).filter((item) => todos[item].title.startsWith(ev.target.value)?todos[item].title :false ).map((item,i) => <a href="/" className="option" key={i}>{item}</a>)


    return (

        <div className="SearchBox">
            <img src="/vectors/search.svg" alt="search-icon" />
            <input type="text" placeholder="Search" onChange={onInput} />
            
        </div>
    )
}


const TodoWrapper = ({ todo, screenHandle }) => {
    const [filter, setFilter] = useState('')

    const handleFilter = (ev) => {
        setFilter(ev.target.value)
    }

    const filteredTodo = (todo) => {

        const filtered ={}
        Object.keys(todo).forEach(id => {
            const note =todo[id]
            const regex =new RegExp(filter,'ig') ;
            if(regex.test(note.title) || (regex.test(note.content))){

                filtered[id]=note
            }
        })
        console.log(todo)

        return filtered;

    }
    return (
        <div className="TodoWrapper">
            <h3>
                CV Notes
            </h3>
            <SearchBox onInput={handleFilter} />
            <Todos list={filter ? filteredTodo(todo) : todo} screenhandler={screenHandle} />
        </div>
    )
}

// MAin-content
const AddTodo = ({ set, todos }) => {
    const[color , setColor] = useState({ "bg":"white" , "text_color":'black'    
        })

    const handleColor = (ev) => {

        Array.from(ev.target.parentNode.childNodes).map(element => element.classList.remove('active'))
       
        ev.target.classList.add('active')
        
        setColor(JSON.parse(ev.target.getAttribute("name")))
    }
    
    const handleSubmit = (ev) => {

        ev.preventDefault()

        const [title, content] = ev.target;

        const newNote = {};

        newNote[generateId()] = {
            title: title.value,
            content: content.value,
            created: Date.now(),
            color
        }
        set({
            ...todos,
            ...newNote
        })

        title.value = "";
        content.value = "";
        
    

    }

    return (

        <div className="AddTodo">
            <form id="my-form" onSubmit={handleSubmit}>

                <input type="text" placeholder="Title" name="title" required/>
                <textarea placeholder="Type your note" name="content" required />
            </form>

            <div className="DesignSubmit">

                <div className="Colors">
                    <span className="active" style={{background:"white"}} name={{bg:"white" , text_color:'black',toString:function(){return JSON.stringify(this)}} } onClick={handleColor} >
                        
                    </span>
                   
                    <span  style={{background:"#42EADDFF"}}  name={{bg:"#42EADDFF" , text_color:'#CDB599FF',toString:function(){return JSON.stringify(this)}}} onClick={handleColor} >
                    </span>

                    <span  style={{background:"#ED2B33FF"}} name={{bg:"#ED2B33FF" , text_color:'#D85A7FFF',toString:function(){return JSON.stringify(this)}}} onClick={handleColor} >
                    </span>

                    <span style={{background:"#FEE715FF"}} name={{bg:"#FEE715FF" , text_color:'#101820FF',toString:function(){return JSON.stringify(this)}}} onClick={handleColor} >
                    </span>
                </div>
                <button type="submit" form="my-form">
                    <img src="/vectors/tick.svg" alt="tick" />
                </button>
            </div>
        </div>
    )

}
const MainContent = ({ set, todos, screen }) => {




    return (
        <div className="MainContent">
            <AddTodo set={set} todos={todos} />
            <div className="Screen" style={{background : screen.color.bg, color:screen.color.text_color}}>

                <h3 className="Title">
                    {screen.title}
                </h3>
                <p>
                    {screen.content}
                </p>
            </div>
        </div>
    )
}

export default () => {

    const [todos, setTodos] = useState(defaultTodos);
    const [screen, setScreen] = useState({ title: '', content: '' , color:'white' });

    const handleScreen = (title, content,color) => {
        setScreen(
            {
                ...screen,
                title,
                content,
                color
            }
        )
    }

    return (
        <div className="App">
            <TodoWrapper todo={todos} screenHandle={handleScreen} />
            <MainContent set={setTodos} todos={todos} screen={screen} />
        </div>
    )

}