import { useState } from 'react'
import './TopNav.css';
const TopNav = () => {
    const [list, setList] = useState('list');
    const handleClick=()=>{
        if(list == 'list'){
            setList('resList')
        }else{
            setList('list')
        }
    }
    const handleClose=()=>{
        if(list == 'resList'){
            setList('list')
        }else{
            setList('resList')
        }
    }
  return (
    <div>
        <nav style={{
            width : "100vw",
            height : '75px',
            backgroundColor : "black",
            padding : "5px 20px",
            display : "flex",
            justifyContent : "space-between",
            alignItems : "center",
            color : "white"
        }}>
            <h4>Logo</h4>
            <button onClick={handleClick} className='openList'>Open</button>
            <div className={list}>
                <button onClick={handleClose} className='closeList'>Close</button>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </div>
        </nav>
    </div>
  )
}

export default TopNav