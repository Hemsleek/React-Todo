import React , {useState}  from 'react'

import './App.scss'


const CreatedAT =(stamp) =>{
    // const day =['Sun' , 'Mon' , 'Tue' , 'Wed' , 'Thu' ,'Fri' , 'Sat'];

    const month = ['Jan', 'Feb', 'March' , 'April' ,'May' , 'June' , 'July' , 'Aug' , 'Sep' ,'Nov' , 'Dec'];

    const now = new Date(stamp);

    return `${month[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()} at ${now.toLocaleTimeString()}`
}

const generateId = (length = 4) => Math.random().toString(36).substring(2, 2 + length);

const defaultTodos ={}
defaultTodos[generateId()] = {

     title:"How to withdraw Aishat Money with her been unaware",

    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione id explicabo distinctio quaerat non? Necessitatibus enim vel, ducimus perspiciatis debitis provident alias, aperiam aliquam placeat cumque tempora maxime dignissimos ipsa.",

    created:Date.now()
}
const Todos=({list,screenhandler}) => {
    
    return (  
        <div className="Todos">

    {Object.keys(list).map(todoId => {

        const todo = list[todoId];
        return(
            <div className="Todo" onClick={() => screenhandler(todo.title , todo.content)} key={todoId}>
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
const SearchBox =() =>(

    <div className="SearchBox">
        <img src="/vectors/search.svg" alt="search-icon"/>
        <input type="text" placeholder="Search" />
        <div className="SuggestionBox">
            <a href="/" className="option">
                How to read jnnfdnfndf
            </a>

            <a href="/" className="option">
                jamal jamal jamal
            </a>
            <a href="/" className="option">
                jamal jamal jamal
            </a>
            <a href="/" className="option">
                jamal jamal jamal
            </a>
           
        </div>
    </div>
)


const TodoWrapper = ({todo,screenHandle}) =>(
    <div className="TodoWrapper">

        <h3>
            CV Notes
        </h3>
        <SearchBox />
        <Todos  list ={todo} screenhandler={screenHandle} />        
    </div>
)

// MAin-content
const AddTodo = ({set ,todos}) =>{

    const handleSubmit =(ev) =>{
        ev.preventDefault()

        const [title , content]=ev.target;

            const newNote ={};

            newNote[generateId()] = {
                title:title.value,
                content:content.value,
                created:Date.now()
        }       
        set({
            ...todos,
            ...newNote
        })
        title.value="";
        content.value="";
    
    }
    
    return(
        
        <div className="AddTodo">
            <form id="my-form" onSubmit={handleSubmit}>

                <input type="text" placeholder="Title" name="title" />
                <textarea placeholder="Type your note" name="content"></textarea>
            </form>

        <div className="DesignSubmit">

            <div className="Colors">
                <img src="/vectors/teal.svg" alt="teal" />
                <img src="/vectors/purple.svg" alt="yellow" />
                <img src="/vectors/yellow.svg" alt="yellow" />
            </div>
            <button type="submit" form="my-form">
            <img src="/vectors/tick.svg" alt="tick" />
            </button>
        </div>
    </div>
)

}
const MainContent =({set ,todos,screen}) =>{
    
    

   
    return(
    <div  className="MainContent">
        <AddTodo  set={set} todos={todos} />
        <div className="Screen">
        
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

export default() => {

    const [todos , setTodos] = useState(defaultTodos); 
    const [screen ,setScreen] = useState({title:'',content:''});

    const handleScreen =(title ,content) => {
        setScreen(
         {
             ...screen,
             title,
             content
         }
        )
    }

    return(     
        <div  className="App">
            <TodoWrapper todo={todos} screenHandle={handleScreen}/>
            <MainContent set={setTodos} todos={todos} screen={screen} />
        </div>
    )
    
}