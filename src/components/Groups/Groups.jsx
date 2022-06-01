import { useEffect } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditOffRoundedIcon from "@mui/icons-material/EditOffRounded";

import {
  useDeleteGroupMutation,
  useGetGroupsQuery,
} from "../../redux/Groups/groups-api";
import Loader from "../Loader/Loader";
import { onError } from "../../utilits/messages";
import s from "./Groups.module.css";

export default function Groups() {
  const { data, error, isFetching } = useGetGroupsQuery();
  const [deleteGroup, { error: errorDelete }] = useDeleteGroupMutation();

  useEffect(() => {
    if (error) onError(`${error.status} ${error.data}`);
  }, [error]);

  useEffect(() => {
    if (errorDelete) onError(`${errorDelete.status} ${errorDelete.data.msg}`);
  }, [errorDelete]);
  console.log(data);
  return (
    <>
      {isFetching && <Loader />}
      <table width="100%">
        <thead>
          <tr className={[s.rowHead]}>
            <th className={s.cell}>Name</th>
            <th className={s.cell}>Color</th>
            <th className={s.cell}></th>
          </tr>
        </thead>
        <tbody>
          {data?.data &&
            data?.data
              // .sort((a, b) =>
              //   a.name.toLowerCase().localeCompare(b.name.toLowerCase())
              // )
              .map((el) => (
                <tr key={el._id} className={s.row} data-id={el._id}>
                  <td className={s.cell}>
                    <span className={s.itemText}>{el.name}</span>
                  </td>
                  <td className={s.cell}>
                    <span
                      className={s.itemColor}
                      style={{ backgroundColor: el.color }}
                    ></span>
                  </td>
                  <td className={s.cell}>
                    <button type="button" className={s.button}>
                      <EditOffRoundedIcon fontSize="small" />
                    </button>

                    <button
                      type="button"
                      className={s.button}
                      onClick={() => {
                        deleteGroup(el._id);
                      }}
                    >
                      <DeleteForeverRoundedIcon fontSize="small" />
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}
