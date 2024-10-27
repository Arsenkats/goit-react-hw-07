import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectFilters);

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(searchStr?.toLowerCase() || "")
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((item) => (
        <li key={item.id}>
          <Contact id={item.id} name={item.name} number={item.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
