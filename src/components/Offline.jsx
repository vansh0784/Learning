import notFound from "../assets/notfound/Not-found.jpg"
const Offline=()=>{
    return(
        <>
        <div className="offline">
            <img  id="not-found-img" src={notFound} alt="internet-lost" />
            <h1>Looks like, your internet gets off...!</h1>
            <ul>
                <li><h3>Check your Internet Connection</h3></li>
                <li><h3>Trouble-Shoot your Network </h3></li>
            </ul>
        </div>
        </>
    )
}
export default Offline;