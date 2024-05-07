import { useDispatch } from "react-redux";
import { removeContactsThunk } from "../../redux/contacts/operation.js";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    dispatch(removeContactsThunk(id));
  };
  return (
    <div className="contact-container">
      <li className="contacts">
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button
          className="contact-delete"
          onClick={() => handleOnDelete(contact.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
