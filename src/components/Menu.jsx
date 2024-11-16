import { img_Url } from "../Constants";
const Menu=({menu})=>{
    console.log(menu);
    return(
        <>
        <div className="menu">
        <div className="menu-section">
            <div id="left">
                <p>{menu[0]?.card?.info?.name}</p>
                <p>{menu[0]?.card?.info?.defaultPrice/100}</p>
                <p>{menu[0]?.card?.info?.description}</p>
            </div>
            <div id="right">
                <img src={img_Url+menu[0]?.card?.info?.imageId} alt=""/>
            </div>
            {/* <h1>{menu[0]?.card?.info?.name}</h1> */}
        </div>
        </div>
        </>
    );

};
export default Menu;