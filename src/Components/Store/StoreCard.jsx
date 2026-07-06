import React from 'react'

export default function StoreCard(props) {
  return (
    <div style={{backgroundImage:props.background,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',height:'480px',width:'420px',borderRadius:'18px',marginTop:'20px',position:'relative',flexShrink:0}}>
      <div style={{textAlign:'left',color:props.color,padding:'50px',position:'absolute'}}>
        <h2>{props.title}</h2>
        <p>{props.info}<br />{props.price}</p>
        
      </div>
    </div>
  )
}
