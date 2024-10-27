import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading ? <Loader /> : <ContactList />}
      <ToastContainer position='top-right' autoClose={3000} />
    </div>
  );
};

export default App;
