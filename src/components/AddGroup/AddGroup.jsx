import { useEffect, useState } from "react";
import { HuePicker } from "react-color";
import Input from "../Input";
import { useAddGroupMutation } from "../../redux/Groups/groups-api";
import { onError } from "../../utilits/messages";
import s from "./AddGroup.module.css";

export default function AddGroup() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#0800ff");
  const [addGroup, { error }] = useAddGroupMutation();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeColor = (color) => {
    setColor(color.hex);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addGroup({ name, color });
    setName("");
    setColor("#0800ff");
  };

  useEffect(() => {
    if (error) onError(`${error.status} ${error.data}`);
  }, [error]);

  return (
    <form onSubmit={onSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="groupName"
          className={s.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          error="Group's name may contain only letters, apostrophe, dash and spaces. For example Work, Familly, My parents"
          required
          onChange={onChangeName}
        />
      </label>
      <label className={s.label}>
        Color
        <HuePicker className={s.input} color={color} onChange={onChangeColor} />
      </label>
      <button type="submit" className={s.button}>
        Add group
      </button>
    </form>
  );
}
