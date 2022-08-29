import { useState, useEffect} from 'react';


function App() {
  const [userData, setUserData] = useState([])
  const [postData, setPostData] = useState([])
  const [commentData, setCommentData] = useState([])
  const [renderUserData, setRenderUserData] = useState("")
  const [colorGiver, setColorGiver] = useState("")






  const fetchItems = async(url, setdata)=>{
    const response = await fetch(url)
    const listItems = await response.json()
    setdata(listItems)
  }
  

 

  function renderUsers(){
    const renderElements = userData.map(data =>{
      return (
      <div key={data.id} className="list-div1">
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div>{data.username}</div>
        <div>{JSON.stringify(data.address)}</div>
        <div>{JSON.stringify(data.company)}</div>
        <div>{data.phone}</div>
        <div>{data.website}</div>
        <div>{data.email}</div>
      </div>)
      
    })
    setRenderUserData(renderElements)
    setColorGiver(1)
  }

  function renderUsers1(){
    const renderElements = postData.map(data =>{
      return <div key={data.id} className="list-div">
                  <div>{data.id}</div>
                  <div>{data.body}</div>
                  <div>{data.title}</div>
              </div>
    })
    setColorGiver(2)
    setRenderUserData(renderElements)
  }

  function renderUsers2(){
    const renderElements = commentData.map(data =>{
      return <div key={data.id} className="list-div">
      <div>{data.id}</div>
      <div>{data.body}</div>
      <div>{data.email}</div></div>
    })
    setColorGiver(3)
    setRenderUserData(renderElements)
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
      <div className='userData'>{renderUserData}</div>
    </div>
  );
}

export default App;
