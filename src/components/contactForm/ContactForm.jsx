import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addContactsThunk } from "../../redux/contacts/operations.js";

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = uuidv4();
  const numberId = uuidv4();

  const handleSumbit = (values, actions) => {
    const newContact = {
      ...values,
      id: uuidv4(),
      name: values.name.trim(),
    };

    dispatch(addContactsThunk(newContact));

    actions.resetForm();
  };

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required(),
    number: Yup.string()
      .trim()
      .min(1, "Too Short!")
      .max(20, "Too Long!")
      .required(),
  });

  return (
    <>
      <h1 className="phone-book-text">Phonebook</h1>

      <div className="container-contact-form">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSumbit}
          validationSchema={FormSchema}
        >
          <Form className="contact-form">
            <label htmlFor={nameId}>Name:</label>
            <Field
              type="text"
              name="name"
              id={nameId}
              className="form-input"
              placeholder="Name"
            />
            <ErrorMessage
              className="error-message-form"
              name="name"
              component="p"
            />
            <label htmlFor={numberId}>Number:</label>
            <Field
              type="number"
              name="number"
              id={numberId}
              className="form-input"
              placeholder="Number"
            />
            <ErrorMessage
              className="error-message-form"
              name="number"
              component="p"
            />

            <button type="submit" className="button-add-contact">
              Add contant
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
