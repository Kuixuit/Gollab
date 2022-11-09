import React from "react";
import List from "../components/List"
import Video from "../components/Video"

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <List/>
                <Video/>
            </div>
        </div>
    )
};

export default Home;