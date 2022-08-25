import { Link } from "react-router-dom";

export const DocketCard = ({ singleDocket }) => {
  return (
    <>
      <div>
        <Link to={`/dockets/detail/${singleDocket.id}`}>
          <h3>{singleDocket.fullName}</h3>
        </Link>
        <p>{singleDocket.clients[0]?.address}</p>
        <div></div>
      </div>
    </>
  );
};