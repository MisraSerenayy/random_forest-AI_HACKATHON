import React from "react";
import { Group } from "../../components/Group";
import "./style.css";
// Import the image if it's local to the 'Group' folder
import ICON05 from "../../components/Group/image/ICONS-05 (1).png";
import ICON06 from "../../components/Group/image/ICONS-06 (1).png";
import ICON08 from "../../components/Group/image/ICONS-08.svg";
import ICON09 from "../../components/Group/image/ICONsS-08 1.png";


export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="overlap-2">
          <div className="rectangle" />

          <img
            className="ICONS-2"
            alt="Icons"
            src="https://c.animaapp.com/S6ZzFu8i/img/icons-07-1@2x.png"
          />
          <img 
            className="your-image-classname" 
                
            id="234"
            src={ICON05}
          />
          <img 
            className="your-image-classname2" 
                
            id="235"
            src={ICON06}
          />
          <img 
            className="your-image-classname3" 
                
            id="236"
            src={ICON08}
          />
          <img 
            className="your-image-classname4" 
                
            id="237"
            src={ICON09}
          />
        </div>

        <div className="overlap-3">
          <div className="text-wrapper-6">RANDOM FOREST</div>

          <div className="text-wrapper-7">for architects</div>
        </div>

        <div className="text-wrapper-8">DECISION TREES</div>

        <div className="text-wrapper-9">RANDOM FOREST</div>

        <div className="text-wrapper-10">what is it ?</div>

        <div className="text-wrapper-11">what is it ?</div>

        <div className="how-it-works">how&nbsp;&nbsp;It works?</div>

        <div className="how-it-works-2">how&nbsp;&nbsp;It works?</div>

        <div className="text-wrapper-12">why use it?</div>

        <div className="text-wrapper-13">why use it?</div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="text-wrapper-14">ROOT NODE</div>
          </div>
        </div>

        <div className="overlap-4">
          <div className="overlap-wrapper">
            <div className="overlap-5">
              <div className="rectangle-4" />

              <div className="rectangle-5" />

              <p className="p">let’s delve into the tools</p>
                
            </div>
          </div>

          <div className="rectangle-6" />

          <div className="rectangle-7" />

          <div className="rectangle-8" />
        </div>

        <div className="overlap-6">
          <div className="div-wrapper">
            <div className="overlap-7">
              <div className="rectangle-9" />

              <div className="rectangle-10" />

              <p className="text-wrapper-15">
                let’s put in practice your learning
              </p>
            </div>
          </div>

          <div className="rectangle-11" />

          <div className="rectangle-12" />

          <div className="rectangle-13" />
        </div>

        <div className="group-2">
          <div className="overlap-group-2">
            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="text-wrapper-14">ROBUSTNESS</div>
          </div>
        </div>

        <div className="rectangle-14" />

        <div className="rectangle-15" />

        <div className="rectangle-16" />

        <div className="rectangle-17" />

        <div className="rectangle-18" />

        <div className="rectangle-19" />

        <div className="rectangle-20" />

        <div className="rectangle-21" />

        <div className="group-3">
          <div className="overlap-group-2">
            
            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="text-wrapper-16">SPLITTING</div>
          </div>
        </div>

        <div className="group-4">
          <div className="overlap-group-2">
            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="text-wrapper-16">ACCURACY</div>
          </div>
        </div>

        <div className="group-5">
          <div className="overlap-group-2">
            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="text-wrapper-14">DECISION NODES</div>
          </div>
        </div>

        <div className="group-6">
          <div className="overlap-8">
            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="text-wrapper-17">FEATURE IMPORTANCE</div>
          </div>
        </div>

        <div className="group-7">
          <div className="overlap-group-2">
            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="text-wrapper-14">LEAF NODES</div>
          </div>
        </div>

        <div className="text-wrapper-18">Take your decisions wisely</div>

        <p className="imagine-you-have-one">
          <span className="span">
            Imagine you have one lead architect calling all the shots—that’s a{" "}
          </span>

          <span className="text-wrapper-19">
            Decision Tree! <br />a machine learning algorithm that plots out
            choices step by step.
          </span>

          <span className="span">
            {" "}
            <br />
            <br />
            But gather a dream team of architects, engineers, and designers,
            each proposing a blueprint and then  voting on the best one—
          </span>

          <span className="text-wrapper-19">that’s your Random Forest</span>

          <span className="span">
            , giving you a well-rounded, rock-solid design.
          </span>
        </p>

        <div className="group-8">
          <div className="overlap-9">
            <img
              className="line-7"
              alt="Line"
              src="https://c.animaapp.com/S6ZzFu8i/img/line-12-1.svg"
            />

            <img
              className="line-8"
              alt="Line"
              src="https://c.animaapp.com/S6ZzFu8i/img/line-17.svg"
            />

            <img
              className="line-9"
              alt="Line"
              src="https://c.animaapp.com/S6ZzFu8i/img/line-17.svg"
            />

            <Group className="group-21" />
          </div>
        </div>

        <p className="text-wrapper-20">
          Data is divided into subsets based on a feature that provides the best
          separation.
        </p>

        <p className="by-aggregating">
          By aggregating results,
          <br /> it often outperforms <br />a single decision tree
        </p>

        <p className="text-wrapper-21">
          Represents the entire dataset and a decision based on the most
          significant feature.
        </p>

        <p className="averages-or-votes">
          {" "}
          averages or votes across multiple trees
        </p>

        <p className="text-wrapper-22">
          Intermediate nodes represent decisions based on feature values.
        </p>

        <p className="text-wrapper-23">
          It ranks the significance of variables, aiding in feature selection.
        </p>

        <p className="these-are-the">
          These are the endpoints of the tree where predictions are made
          <br />
          (ex. roof material)
        </p>

        <div className="rectangle-22" />

        <div className="rectangle-23" />

        <div className="rectangle-24" />

        <p className="text-wrapper-24">
          visual tool guiding decisions step by step, perfect for organizing
          complex ideas
        </p>

        <p className="text-wrapper-25">
          machine learning algorithm using multiple decision trees to make more
          accurate and robust predictions
        </p>

        <p className="text-wrapper-26">
          start with a question, follow branches based on criteria and reach an
          outcome!
        </p>

        <p className="text-wrapper-27">
          creating multiple decision trees, each trained on random subsets of
          data, and combining their outputs to improve accuracy and reduce
          overfitting
        </p>

        <div className="text-wrapper-28">filters and simplifies decisions</div>

        <p className="text-wrapper-29">
          combines multiple decision trees to enhance predictive accuracy and
          reduce overfitting
        </p>

        <img
          className="group-9"
          alt="Group"
          src="https://c.animaapp.com/S6ZzFu8i/img/group-30@2x.png"
        />

        <img
          className="group-10"
          alt="Group"
          src="https://c.animaapp.com/S6ZzFu8i/img/group-31@2x.png"
        />

        <div className="group-11">
          <div className="rectangle-25" />

          <div className="rectangle-26" />

          <div className="rectangle-27" />

          <div className="rectangle-28" />

          <div className="rectangle-29" />
        </div>

        <div className="group-12">
          <div className="rectangle-25" />

          <div className="rectangle-26" />

          <div className="rectangle-27" />

          <div className="rectangle-28" />

          <div className="rectangle-29" />
        </div>

        <div className="group-13">
          <div className="rectangle-25" />

          <div className="rectangle-26" />

          <div className="rectangle-27" />

          <div className="rectangle-28" />

          <div className="rectangle-29" />
        </div>

        <div className="group-14">
          <div className="rectangle-25" />

          <div className="rectangle-26" />

          <div className="rectangle-27" />

          <div className="rectangle-28" />

          <div className="rectangle-29" />
        </div>

        <div className="group-15">
          <div className="rectangle-25" />

          <div className="rectangle-26" />

          <div className="rectangle-27" />

          <div className="rectangle-28" />

          <div className="rectangle-29" />
        </div>

        <div className="group-16">
          <div className="rectangle-25" />

          <div className="rectangle-26" />

          <div className="rectangle-27" />

          <div className="rectangle-28" />

          <div className="rectangle-29" />
        </div>

        <div className="rectangle-30" />
        <p className="text-wrapper-30">
          Samarth Pachchigar, Lena Ntagkouli, Misra Ozgok Genc, Virgilio Diaz,
          Nouhaila Elmalouli
        </p>
        <div className="overlap-10">
          <div className="PLAY-GROUND">
            PLAY
            <br />
            GROUND
          </div>

        <div className="text-wrapper-31">for architects</div>
        <div className="text-wrapper-32">Here's How It Works!</div>
        <div className="text-wrapper-33">You’ve got a client with land in an urban settlement, and your job is to design their house.
          <br /> 
        There are four key constraints to consider, and we’ll break it down using Random Forest decision trees
          <br /> 
        to help you nail the algorithm.</div>
          {/* Add the embedded game */}
        <div className="game-container">
          <iframe
            src="https://zupe.app/randomforestforarchitects"
            title="Game"
            className="game-iframe"
            allow="fullscreen"
          ></iframe>
        </div>
        </div>
      </div>
    </div>
  );
};