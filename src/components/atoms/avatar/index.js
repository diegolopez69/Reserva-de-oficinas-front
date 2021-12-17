import { Avatar as MaterialAvatar } from "@material-ui/core";
import PropTypes from "prop-types";

import { IMAGES_REMOTE_SOURCE } from "../../../globals";

export const Avatar = ({ width, height, src, ...restProps }) => {
  const isFromS3 = !(src.startsWith("http") || src.startsWith("blob"));
  return (
    <MaterialAvatar
      className="user-avatar"
      alt="profile"
      src={
        isFromS3
          ? `${IMAGES_REMOTE_SOURCE}fit-in/${width}x${height}/${src}`
          : src
      }
      {...restProps}
    />
  );
};

Avatar.propsTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
};

Avatar.defaultProps = {
  width: 400,
  height: 400,
  src: "https://ui-avatars.com/api/?name=Jon+Snow&background=0D8ABC&color=fff&size=128",
};