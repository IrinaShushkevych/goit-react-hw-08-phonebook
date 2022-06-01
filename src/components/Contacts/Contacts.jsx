//created by Irina Shushkevych
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useGetContactsQuery } from "../../redux/Contacts/contacts-api";
import { getFilter } from "../../redux/Filter/filter-selectors";
import ContactItem from "../ContactItem/ContactItem";
import Loader from "../Loader/Loader";
import { onError } from "../../utilits/messages";
import s from "./Contacts.module.css";

export default function Contacts() {
  const { data, error, isFetching } = useGetContactsQuery();

  useEffect(() => {
    if (error) onError(`${error.status} ${error.data}`);
  }, [error]);

  const filter = useSelector(getFilter);

  return (
    <>
      {isFetching && <Loader />}
      <table width="100%">
        <thead>
          <tr className={[s.rowHead]}>
            <th className={s.cell}>Name</th>
            <th className={s.cell}>Phone</th>
            <th className={s.cell}></th>
          </tr>
        </thead>
        <tbody>
          {data?.data &&
            data?.data
              .filter((el) =>
                el?.name.toUpperCase().includes(filter.toUpperCase())
              )
              .sort((a, b) =>
                a.name.toLowerCase().localeCompare(b.name.toLowerCase())
              )
              .map((el) => {
                console.log(el);
                return (
                  <tr key={el._id} className={s.row}>
                    <ContactItem
                      id={el._id}
                      nameContact={el.name}
                      numberContact={el.phone_mob2}
                    />
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
}
