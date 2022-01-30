import React, {useState, useEffect} from 'react'
import ItemHeader from './ItemHeader';
import './items.css'
import Popup from './Popup';


function Items() {
    let [menu, setMenu] = useState([]);
    let [loading, setLoading] = useState(true);
    let [query, setQuery] = useState("chicken");
    let [showPopup, setShowPopup] = useState(false);
    let [itemName, setItemName] = useState("")
   

 async function getMenu(){
        const API_URL = `https://api.edamam.com/search?q=${query}&app_id=23e3ad08&app_key=1091a03fe31f7d9aafcb4de46d8e014b`
       let response = await fetch(API_URL)
       let data = await response.json()
       setMenu(data.hits)
       setLoading(false)
 }
    useEffect(()=>{
          getMenu()
       
    },[])

    console.log(menu);

      const popup = () => setShowPopup(true)
      const closePopup = () => setShowPopup(false)

      let maxImages= 8;
    let menuImages = menu.map((item, index)=>{
      
        
        if(index < maxImages){
        
            return (
            
                <div className="items-img" >
    
                    <img src={item.recipe.image} alt="" onClick={popup}/>
                    <h3>{item.recipe.label}</h3>
                  
                </div>
                
            )
        }
      
    })

    const onChange= (e)=>{
        setQuery(e.target.value);
    }
    
    const onSubmit = e => {
        e.preventDefault();
        getMenu();
    }

    return (
        <div>
            {showPopup && <Popup menu = {menu}  close={closePopup}/> }
          
            { !loading ? 
                (<div className="section-item">
                <h1>DISHES</h1>
                <ItemHeader itemName = {query}/>
                <div className="search-container">
                    <form className="search-section" onSubmit={onSubmit}>
                        <input type="text" placeholder="chicken" autoComplete="off" onChange={onChange}/>
                        <input type="submit" value="search" className="search"/>
                    </form>
                </div>
                <div className="item-section">
                    {menuImages}  
                   
                </div>
            </div>
                ) : (
                    <div className="loading">
                 <h3>
                     Loading
                     </h3> 

                    </div>
                )
    
            }
        </div>
       
    )
}

export default Items
