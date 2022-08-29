import { useState, useEffect} from 'react';


function App() {
  const [userData, setUserData] = useState([])
  const [postData, setPostData] = useState([])
  const [commentData, setCommentData] = useState([])
  const [renderUserData, setRenderUserData] = useState([])
  const [colorGiver, setColorGiver] = useState("")

  function renderUsersi(yourData){
    return(<table>{


    setRenderUserData( yourData.map(data=>{

        return( <tr key={data.id}>{


        Object.entries(data).map(([key, value]) => {
          return <td key={key}>{JSON.stringify(value)}</td>
        })



      }</tr>)




    }))


  }</table>)

  }


  const fetchItems = async(url, setdata)=>{
    const response = await fetch(url)
    const listItems = await response.json()
    setdata(listItems)
  }
  


  
  function renderUsers(){
    setColorGiver(1)
    renderUsersi(userData)
  }

  
  function renderUsers1(){
    setColorGiver(2)
    renderUsersi(postData)

  }

  function renderUsers2(){
    setColorGiver(3)
    renderUsersi(commentData)
  }





  useEffect( () =>{
    fetchItems("https://jsonplaceholder.typicode.com/users", setUserData)
  }, [])

  useEffect( () =>{
    fetchItems("https://jsonplaceholder.typicode.com/posts", setPostData)
  }, [])


  useEffect( () =>{
    fetchItems("https://jsonplaceholder.typicode.com/comments", setCommentData)
  }, [])


  return (
    <div>
      <div className="App">
        <button onClick={renderUsers} className={colorGiver===1?"selected":null}>users</button>
        <button onClick={renderUsers1} className={colorGiver===2?"selected":null}>posts</button>
        <button onClick={renderUsers2} className={colorGiver===3?"selected":null}>comments</button>
      </div>
      <br/>
      <br/>
      {renderUserData}
    </div>
  );
}

export default App;
