import { Contact } from "../Contact/Contact";

export const ContactList = ({ items, onDelete }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <Contact
            key={item.id}
            item={item}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </ul>
    </>
  );
};
