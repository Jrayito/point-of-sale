import { Avatar } from "../Avatar.js";

export const SideBarHeader = ({ isCollpase }) => {
  return (
    <div className="d-flex align-items-center p-4">
      <div className="flex-shrink-0">
        <Avatar
          path={
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          }
          size={30}
        />
      </div>
      <div className="flex-grow-1 ms-3">
        {!isCollpase ? <small> J. Raymundo Hernández Zapata</small> : ""}
      </div>
    </div>
  );
};
