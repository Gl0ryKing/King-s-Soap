import CreateAccount from "../components/CreateAccountElement";
import { Link } from "react-router-dom";
const Login = () => {
  return (
  <div style={{ width: "100%", height: "100%" }}>
    {/*<h1 className="text-4xl text-[#FFFFFF] font-[Inria_Serif] pl-11 pt-8">CreateAccount</h1>*/}

    <CreateAccount /> {/*Load the CreateAccount with the background image*/}

  </div>
    
  );
};

export default CreateAccount;