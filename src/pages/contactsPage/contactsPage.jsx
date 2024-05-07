import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactForm } from "../../components/contactForm/contactForm.jsx";
import { SearchBox } from "../../components/searchBox/searchBox.jsx";
import { ContactList } from "../../components/contactList/contactList.jsx";
import { LoadingContacts } from "../../components/loading/loadingContacts.jsx";
import { Error } from "../../components/error/error.jsx";

import { fetchContactsThunk } from "../../redux/contacts/operations.js";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  const { loading, error, items } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && <LoadingContacts />}
      {error && <Error />}
      {items && <ContactList />}
    </>
  );
};

export default ContactsPage;