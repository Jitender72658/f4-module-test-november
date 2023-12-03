import React from 'react'

const History = () => {
  let historyItems =[{ title: "hey"},{ title: "hi"},{ title: "hello"},{ title: "hola"}];
  return (
    <div>
       <h3>Search History</h3>
      { historyItems.length>0 && <ul>
          {historyItems.map((item,index)=> <li key={index}><a href="#">{item.title}</a></li>)}
       </ul>
      }
    </div>
  )
}

export default History