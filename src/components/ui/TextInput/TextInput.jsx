import { useState } from "react";
import * as yup from "yup";
import "./TextInput.css";

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
});

function TextInput() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });


  const handleChange = async (event) => {
    const { name, value } = event.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field
    try {
      await yup.reach(userSchema, name).validate(value);
      setErrors({
        ...errors,
        [name]: "",
      });
    } catch (error) {
      setErrors({
        ...errors,
        [name]: error.message,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate all fields on submit
    try {
      await userSchema.validate(formData, { abortEarly: false });
      setErrors({});

      window.location.href = "https://app.loch.one/welcome";
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={`signUp__input--field ${errors.email ? 'error' : ''}`}
        type="text"
        placeholder="Your email address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <div className="error-message">{errors.email}</div>}

      <input type="submit" value="Get Started" className="signUp__input--submit" />
    </form>
  )
}

export default TextInput;