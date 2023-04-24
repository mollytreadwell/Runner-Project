import React from "react";
import runner from "../img/trailrun.jpg"

export default function About(){
    return (
        <div className="Page-header">
        <h1>About</h1>
        <img src={runner} height="400" width="530" alt="profile"/>
        <br/><br/>
        <p className="content">
        <p className="intro">This site is in its infancy!
        <br/>
        BUT... what we want it to grow into is a strong database for races and racers as well as a safe, fun place for runners to connect.
        </p>
        A little about me... the creator of this little baby page. 
        <br/>
        I'm Molly, I grew up in a family of elevation-craving wild people and have been running in races since my pre-teen days on my school's cross-country team.
        <br/>
        It wasn't until my first <i>real</i> race (Mount Washington Auto Road, woop woop!) that I fell in love with the rhythm of training, lining up with hundreds of people at the start, stratigically ticking off all of the weaklings who started too fast, and then having a happy beer with all of them at the end.
        <br/>
        I love running alone early in the mornings, but I also love exploring trails and dirt roads with others. I find the running community to be extremely friendly and a great way to enter a new community. 
        <br/><br/><br/>

        <p className="intro">Favorite Local Runs:</p> Pemi Loop, Wapack Trail<br/>
        <p className="intro">Favorite Races:</p> Valtellina Wine Trail<br/>
        <p className="intro">Favorite Post-Run Treat:</p>Coffee or beer
        
        </p>
        </div>
    )
}