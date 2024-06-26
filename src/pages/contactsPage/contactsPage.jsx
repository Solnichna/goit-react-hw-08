import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactForm } from "../../components/contactForm/ContactForm.jsx";
import { SearchBox } from "../../components/searchBox/SearchBox.jsx";
import { ContactList } from "../../components/contactList/ContactList.jsx";

import { Error } from "../../components/error/Error.jsx";

import { fetchContactsThunk } from "../../redux/contacts/operations.js";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  const { loading, error, items } = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && <p>load</p>}
      {error && <Error />}
      {items && <ContactList />}
    </>
  );
};

export default ContactsPage;
