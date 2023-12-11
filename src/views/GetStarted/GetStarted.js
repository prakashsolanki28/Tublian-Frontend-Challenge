import InputField from "../../components/Input/InputField";
import SimpleButton from "../../components/Button/SimpleButton";
import "./GetStarted.css";
import GetStartedImage from "../../assets/images/image-container.svg";
import Logo from "../../assets/images/logo.svg";

const GetStarted = () => {
  return (
    <>
      <div className="row m-0 onboarding">
        <div className="col-12 col-md-6 p-0 d-none d-md-block position-relative">
          <img
            className="w-100 position-absolute bottom-0"
            alt=""
            src={GetStartedImage}
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="container">
            <div className="frame row pt-5">
              <div className="logo-div mb-2 mb-xl-0 col-12 col-xl-2 d-flex justify-content-start align-items-center">
                <img className="logo" src={Logo} alt="Tublian-logo" />
                Tublian
              </div>
              <div className="col-12 col-xl-10 ps-xl-5">
                <div className="row">
                  <div className="col col-xl-2 mb-2 text-wrapper">
                    1: Get Started
                  </div>
                  <div className="col col-xl-2 mb-2 div">2: Create Account</div>
                  <div className="col col-xl-2 mb-2 div">3: Account Setup</div>
                  <div className="col col-xl-2 mb-2 div">4: Payment</div>
                </div>
              </div>
              <div className="get-started">Get Started</div>
              <div className="mt-3">
                Start recruiting streetcred developers, Today!!
              </div>
              <div className="input-fields mt-3">
                <div>
                  <InputField inputLabel="First Name" />
                </div>
                <div className="mt-2">
                  <InputField inputLabel="Last Name" />
                </div>
              </div>
              <div className="mt-4">
                <SimpleButton text="Proceed" />
              </div>
              <div className="mt-4">
                <div className="already-have-an-container">
                  <span>{`Already have an account? `}</span>
                  <b className="log-in">Log in</b>
                </div>
              </div>
            </div>
            <div className="privacy-policy-parent">
              <div className="privacy-policy">Privacy Policy</div>
              <div className="privacy-policy">Terms</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
