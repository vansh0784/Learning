// this component is all about class based component
import Avatar from "../assets/avatar/6961.jpg"
import React from "react";
class Profile extends React.Component{
    constructor(props){
        // super props is for call constructor of parent class
        super(props);
        this.state={
            name:"Vansh Singh",
            profile:"Frontend Developer",
            skills:["JavaScript","HTML & CSS","React Js"],
        }
        this.setState={
            name:"XYZ",
        }
    }
    componentDidMount(){
        //
    }
    componentDidUpdate
    render(){
        return(
            <>
                <div className="profile-contain">
                    <img  id="avatar"src={Avatar} alt="Profile Img" />
                    <h1>Name: {this.state.name}</h1>
                    <h2>Role: {this.state.profile}</h2>
                    <h3>Skills:</h3>
                    <ul>
                        {this.state.skills.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>

                </div>
            </>
        )
    };

};
// 1--> constructor --> render ---> componentDidMount
export default Profile;