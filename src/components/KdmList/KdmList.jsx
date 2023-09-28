import PropTypes from "prop-types";

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

KdmList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      createdAt: PropTypes.string.isRequired,
      hall: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      timeEnd: PropTypes.string.isRequired,
      timeStart: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ),
};
