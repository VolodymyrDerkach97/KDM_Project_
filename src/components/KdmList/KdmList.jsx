import { KdmItem } from "components/KdmItem";
import { WrapperList } from "./KdmList.styled";

export const KdmList = ({ list }) => {
  return (
    <WrapperList>
      {list.length <= 0 ? (
        <div>
          Наразі ключі у яких закінчується термін придатності відсутні :{")"}
        </div>
      ) : (
        list.map((kdm) => (
          <li key={kdm._id}>
            <KdmItem {...kdm} />
          </li>
        ))
      )}
    </WrapperList>
  );
};

export default KdmList;
