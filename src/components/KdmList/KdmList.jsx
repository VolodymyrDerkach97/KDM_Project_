import KdmItem from "components/KdmItem";
import { WrapperList } from "./KdmList.styled";

const KdmList = ({ list }) => {
  return (
    <WrapperList>
      {list.map((kdm) => (
        <li key={kdm._id}>
          <KdmItem {...kdm} />
        </li>
      ))}
    </WrapperList>
  );
};

export default KdmList;
