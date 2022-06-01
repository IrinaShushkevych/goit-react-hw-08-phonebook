import s from "./Input.module.css";

export default function Input({
  name,
  value,
  setValue,
  type,
  pattern,
  error,
  required = false,
  title,
}) {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <label htmlFor={name} className={s.label}>
      {title}
      <input
        type={type}
        name={name}
        className={s.input}
        pattern={pattern}
        value={value}
        title={error}
        required={required}
        onChange={onChange}
      />
    </label>
  );
}
