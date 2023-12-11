import React, { useState } from "react";
import "./PlanToUse.css";
import Logo from "../../assets/images/logo.svg";
import TeamWorkRafiki1 from "../../assets/images/Team-work-rafiki-1.svg";
import PeopleSearchRafiki1 from "../../assets/images/People-search-rafiki1.svg";
import CollabRafiki1 from "../../assets/images/Collab-rafiki1.svg";
import CheckboxCard from "../../components/Card/CheckboxCard";
import SimpleButton from "../../components/Button/SimpleButton";
function PlanToUse() {
  const [selected, setSelected] = useState({
    team_projects: false,
    personal_projects: false,
    Recruiting: false,
  });

  const changeSelected = (name) => {
    setSelected({ ...selected, [name]: !selected[name] });
  };

  return (
    <div className="onboarding">
      <div className="container">
        <div className="row d-flex justify-content-between pt-5 pb-4">
          <div className="col-12 col-md-2 mb-3">
            <img className="logo me-3" src={Logo} alt="Tublian-logo" />
            Tublian
          </div>
          <div className="mynav col-12 col-md-10 mb-3">
            <div className="row">
              <div className="text-wrapper col mb-2">1: Get Started</div>
              <div className="text-wrapper col mb-2">2: Create Account</div>
              <div className="text-wrapper col mb-2">3: Account Setup</div>
              <div className=" col">4: Payment</div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3>How are you planning to use Tublian?</h3>
          <p>
            We will customize your experience based on <br />
            your option.
          </p>
        </div>
        <div className="text-center">
          <div className="row cards">
            <CheckboxCard
              selected={selected.team_projects}
              name="team_projects"
              image={TeamWorkRafiki1}
              heading="Team Projects"
              content="Hire developers for team projects."
              onclick={changeSelected}
            />
            <CheckboxCard
              selected={selected.personal_projects}
              name="personal_projects"
              image={PeopleSearchRafiki1}
              heading="Personal Projects"
              content="Hire developers for personal projects."
              onclick={changeSelected}
            />
            <CheckboxCard
              selected={selected.Recruiting}
              name="Recruiting"
              image={CollabRafiki1}
              heading="Recruiting"
              content="Recruit developers for outstanding companies."
              onclick={changeSelected}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center pt-4">
          <SimpleButton text="Next" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="privacy-policy-parent">
            <div className="privacy-policy">Privacy Policy</div>
            <div className="privacy-policy">Terms</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanToUse;
