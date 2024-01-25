import { Contact } from "../Contact/Contact";

export const ContactList = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
