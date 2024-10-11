import { img_Url } from "../Constants";
const Card=({cloudinaryImageId,name,cuisines,avgRating})=>{
    // this will be destructuring of passing argument
    return(
        <div className="cards">
            <img src={img_Url+cloudinaryImageId} alt="Item1_image"></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h3>{avgRating}⭐ </h3>
        </div>
    )
}
export default Card;
