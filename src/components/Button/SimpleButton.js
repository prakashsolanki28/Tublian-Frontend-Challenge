import "./SimpleButton.css";
const SimpleButton = ({ text = "Button" }) => {
  return (
    <>
      <button className="simple-button">{text}</button>
    </>
  );
};

export default SimpleButton;
