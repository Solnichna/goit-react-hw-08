import { Contact } from "../contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice.js";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className="contact-list">
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>You don`t have a contacts</p>
      )}
    </ul>
  );
};