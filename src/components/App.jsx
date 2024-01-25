import "./App.css";
import { useState } from "react";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";

function App() {
  const [contactFilter, setContactFilter] = useState("");
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox value={contactFilter} onChange={setContactFilter} />
      <ContactList items={filteredContacts} />
    </div>
  );
}

export default App;
