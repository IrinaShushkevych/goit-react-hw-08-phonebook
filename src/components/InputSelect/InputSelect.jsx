import { useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useGetGroupsQuery } from "../../redux/Groups/groups-api";
import s from "./InputSelect.module.css";

export default function InputSelect({ setIdValue, idValue }) {
  const { data, error, isFetching } = useGetGroupsQuery();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const onOpen = (e) => {
    if (!e.target.closest("#select")) {
      setOpen(true);
    }
  };

  const onClose = (e) => {
    setValue(e.target.innerText);
    setIdValue(e.target.dataset.id);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      ref.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!idValue) {
      setValue("");
    }
  }, [idValue]);

  return (
    <>
      {data?.data && (
        <div className={s.block}>
          <label className={s.label} onClick={onOpen}>
            Group
            <input
              className={s.select}
              variant="standard"
              value={value}
              onFocus={onOpen}
              readOnly
            />
            <ArrowDropDownIcon className={s.icon} />
          </label>
          {open && (
            <ul
              id="select"
              className={s.selectOption}
              onClick={onClose}
              tabIndex="1"
              ref={ref}
            >
              <li className={s.selectItem} key="null" value={null} tabIndex="1">
                {" "}
              </li>
              {data?.data &&
                data.data.map((el) => {
                  return (
                    <li
                      className={s.selectItem}
                      key={el._id}
                      data-id={el._id}
                      tabIndex="3"
                    >
                      {el.name}
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
