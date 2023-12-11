import "./InputField.css";
const InputField = ({ inputLabel }) => {
  return (
    <div className="typeinput-fieldstatedefault">
      <input className="typeinput-field" placeholder={inputLabel} />
    </div>
  );
};

export default InputField;
