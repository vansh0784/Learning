import React from "react";
import ReactDom from "react-dom/client";


const root=ReactDom.createRoot(document.querySelector("#root"));
const fetchData=async()=>{
    try{
        const response=await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=28.66500&lng=77.44770');
        if(!response.ok) throw new Error("API call failed");
        const data=await response.json();
        return data;
        conso
    }
    catch(e){
        console.log(e);
    }
}
fetchData();
 /**
 App Layout
 ----------
 Header
    -Logo
    -Nav Items
    -Cart
 Body
    -Search Bar
    -Restaurant list
        -image
        -name
        -cuisines
        -price/distance
 Footer
    -links
    -Copyright

  */
///-------- Raw data using for api -----------------
// const rItems={
//     "Url":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_340382.JPG",
//     "Name":"Food_Item",
//     "Cuisines":["Pizza","Dosa","Idli"],
//     "Price":"120 Each/--"

// }
const Card=({cloudinaryImageId,name,cuisines,avgRating})=>{
    // this will be destructuring of passing argument
    return(
        <div className="cards">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Item1_image"></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h3>{avgRating} Stars</h3>
        </div>
    )
}

const Header=()=>{
    return(
        <>
            <div className="header">
                <img src="https://img.freepik.com/free-vector/hand-drawn-spicy-logo-design_23-2149667267.jpg?t=st=1728015384~exp=1728018984~hmac=9c3964fac5681f838b7a37cffb2879952a37250a8e3eb9bf2ec4876f9c755e96&w=740" alt="Logo"></img>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </>
    )
}
const Body=()=>{
    return(
        <>
            <div className="Search-Box">
                <input type="text" placeholder="Enter Search" id="Search-bar"/>
                <i className="fa fa-search" id="btn"></i>
            </div>
            <div className="Card-container">
                {
                    restaurantList.map(rest=>{
                        return <Card {...rest.info}/>
                    })
                }
            </div>
        </>

    )
}
const App=()=>{
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
}
root.render(<App/>);