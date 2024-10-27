import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.contactContainer}>
      <div className={css.personalInfo}>
        <p>
          <span className={css.icons}>
            <FontAwesomeIcon icon={faUser} />
          </span>

          {name}
        </p>
        <p>
          <span className={css.icons}>
            <FontAwesomeIcon icon={faPhone} />
          </span>

          {number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
