import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Utils/UserContext.jsx";


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {setUsername} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length < 10) {
      setErrorMessage("Name must be at least 10 characters long.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (formData.phone.length < 10) {
      setErrorMessage("Phone number must be at least 10 digits.");
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setErrorMessage(""); // Clear errors if all validations pass
    navigate("/home");
    setUsername(formData.name)

  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
    setErrorMessage(""); // Clear error message on reset
  };

  return (
    <div>
      <section>
        <h3>Form Validation</h3>
        <div className="form-fields">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name-field">Name</label>
            <input
              type="text"
              id="name-field"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <label htmlFor="email-field">Email</label>
            <input
              type="email"
              id="email-field"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <label htmlFor="phone-field">Phone</label>
            <input
              type="number"
              id="phone-field"
              placeholder="Enter your phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <label htmlFor="password-field">Password</label>
            <input
              type="password"
              id="password-field"
              placeholder="******"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            {<p className="error">{errorMessage}</p>}

            <div className="btns">
              <button type="submit">Submit</button>
              <button type="button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
