import {useState} from 'react';

export default function ShowHidePassword({ name }) {
    const [isVisible, setVisible] = useState(false);
  
    const toggle = () => {
      setVisible(!isVisible);
    };
  
    return (
      <div className="formHide">
        <input type={!isVisible ? "password" : "text"} placeholder={name}  />
        <span className="icon" onClick={toggle}>
        {isVisible ? <i className="icon-eye"></i> : <i className="icon-eye-off"></i>}
        </span>
      </div>
    );
  }