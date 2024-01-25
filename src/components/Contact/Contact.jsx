import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export const Contact = ({ item: { name, number } }) => {
  return (
    <>
      <div className={css.contactCard}>
        <div className={css.contactInfo}>
          <p>
            <BsFillPersonFill />
            {name}
          </p>
          <p>
            <BsFillTelephoneFill />
            {number}
          </p>
        </div>
        <button className={css.btnDelete}>Delete</button>
      </div>
    </>
  );
};
