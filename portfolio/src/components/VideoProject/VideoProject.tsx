/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactPlayer from "react-player";
interface Props {
  video: string;
}
const VideoComponent: React.FC<Props> = ({ video }) => {
  return (
    <div className="w-full lg:w-1/2 h-60 xl:h-[32rem]">
      <ReactPlayer url={video} width="100%" height="100%" controls={true} />
    </div>
  );
};

export default VideoComponent;
