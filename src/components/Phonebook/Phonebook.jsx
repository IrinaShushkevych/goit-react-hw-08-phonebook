//created by Irina Shushkevych
import { useEffect, useState } from "react";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../redux/Contacts/contacts-api";
import { onError, onWarning } from "../../utilits/messages";
import ButtonPathClose from "../ButtonPathClose";
import Input from "../Input";
import Select from "../InputSelect";
import s from "./Phonebook.module.css";

export default function Phonebook() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneMob1, setPhoneMob1] = useState("");
  const [phoneMob2, setPhoneMob2] = useState("");
  const [phoneHome, setPhoneHome] = useState("");
  const [phoneWork, setPhoneWork] = useState("");
  const [group, setGroup] = useState("");
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { error }] = useAddContactMutation();

  useEffect(() => {
    if (error) onError(`${error.status} ${error.data.msg}`);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name,
      email: email ? email : undefined,
      phone_mob1: phoneMob1 ? phoneMob1 : undefined,
      phone_home: phoneHome ? phoneHome : undefined,
      phone_mob2: phoneMob2 ? phoneMob2 : undefined,
      phone_work: phoneWork ? phoneWork : undefined,
      group: group ? group : undefined,
    };
    if (
      contacts &&
      contacts.data.filter((el) => el.name.toLowerCase() === name.toLowerCase())
        .length !== 0
    ) {
      onWarning(`Contacts ${name} already exist`);
    } else {
      addContact(contact);
      setName("");
      setEmail("");
      setPhoneMob1("");
      setPhoneMob2("");
      setPhoneWork("");
      setPhoneHome("");
      setGroup("");
    }
  };

  return (
    <>
      <ButtonPathClose />
      <form className={s.mainForm} onSubmit={handleSubmit}>
        <Input
          title="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          error="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required={true}
          setValue={setName}
        />

        <Input
          title="E-mail"
          type="email"
          name="email"
          pattern="^((([0-9A-Za-z\.]{1}[-0-9A-z\.]{1,}))@([-0-9A-z]{1,}\.){1,2}[A-Za-z]{2,})$"
          value={email}
          error="Email"
          setValue={setEmail}
        />

        <Input
          title="Phone mobile"
          type="tel"
          name="phone_mob1"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={phoneMob1}
          error="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          setValue={setPhoneMob1}
        />

        <Input
          title="Phone mobile"
          type="tel"
          name="phone_mob2"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={phoneMob2}
          error="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          setValue={setPhoneMob2}
        />
        <Input
          title="Phone home"
          type="tel"
          name="phone_home"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={phoneHome}
          error="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          setValue={setPhoneHome}
        />
        <Input
          title="Phone work"
          type="tel"
          name="phone_work"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={phoneWork}
          error="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          setValue={setPhoneWork}
        />
        <Select setIdValue={setGroup} idValue={group} />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
