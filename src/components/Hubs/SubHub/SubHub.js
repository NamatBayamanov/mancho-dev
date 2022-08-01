import classes from "./SubHub.module.scss";
import { useParams } from "react-router-dom";
import { getHub } from "../../../data/hubs";
import { useEffect, useState } from "react";
import axios from "axios";
function SubHub() {

  const params = useParams();
  console.log(params);

  const hub = getHub(params.hubId);

  console.log(hub);




  

  
  return ( 
    <div className={classes.SubHub}>
      <div className={classes.background_1}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2>
              {hub.title}
            </h2>
            <p>
              {hub.description}
            </p>
          </div>
        </div>
      </div>

      <div className={classes.background_2}>
        <div className={classes.container}>
          <div className={classes.content}>
            <ul className={classes.list}>
              <h2>
                {hub.personality}
              </h2>
              <li>
                {hub.firstText}
              </li>
              <li>
                {hub.secondText}
              </li>
              <li>
                {hub.thirdText}
              </li>
              <li>
                {hub.fourthText}
              </li>
              <h2>
                {hub.personality_2}
              </h2>
              <li>
                {hub.fivthText}
              </li>
              <li>
                {hub.sixthText}
              </li>
              <li className={classes.color}>
                {hub.seventhText}<a href={hub.link_1}>{hub.link_1}</a>
              </li>
              <li>
                {hub.eighthText}
              </li>
              <li>
                {hub.ninthText}
              </li>

              <li className={classes.first__links}>
              {hub.tenthText}<a href={hub.link_2}>{hub.link_2}</a>
            </li>

            <li className={classes.first__links}>
              {hub.eleventh}<a href={hub.link_3}>{hub.link_3}</a>
            </li>

            <li className={classes.first__links}>
              {hub.twelvth}<a href={hub.link_4}>{hub.link_4}</a>
            </li>

            <li className={classes.first__links}>
              {hub.thiteenth}<a href={hub.link_5}>{hub.link_5}</a>
            </li>

            <li className={classes.first__links}>
              {hub.fouteenth}<a href={hub.link_6}>{hub.link_6}</a>
            </li>

            <li className={classes.we}>
              {hub.fifteenth}
            </li>

              <li className={classes.second__links}>
                {hub.sixteenth}
              </li>
              <li className={classes.second__links}>
                {hub.seventeenth}<a href={hub.link_7}>{hub.link_7}</a>
              </li>

              <li className={classes.second__links}>
                {hub.eighteenth}
              </li>

              <h2 className={classes.papers}>
                {hub.personality_3}
              </h2>

              <li className={classes.third__links}>
                {hub.ninteenth}<a href={hub.link_8}>{hub.link_8}</a>
              </li>
              <li className={classes.third__links}>
                {hub.twentieth}<a href={hub.link_9}>{hub.link_9}</a>
              </li>

              <li className={classes.third__links}>
                {hub.twenty_first}<a href={hub.link_10}>{hub.link_10}</a>
              </li>

              <li className={classes.third__links}>
                {hub.twenty_second}<a href={hub.link_11}>{hub.link_11}</a>
              </li>

              <h2>
                {hub.personality_4}
              </h2>

              <li>
                {hub.twenty_third}
              </li>

              
              <li className={classes.end}>
                {hub.twenty_fourth}
              </li>

              
              <li className={classes.end}>
                {hub.twenty_fivth}
              </li>

              <li className={classes.end}>
                {hub.twenty_sixth}
              </li>

            </ul>
            <ol>
              <li>
                {hub.list_1}
              </li>
              <li>
                {hub.list_2}
              </li>
              <li>
                {hub.list_3}
              </li>
              <li>
                {hub.list_4}
              </li>
            </ol>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHub;