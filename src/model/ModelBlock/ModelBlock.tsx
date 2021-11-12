import { FunctionComponent } from "react";

export const ModelBlock: FunctionComponent = () => {
  return (
    // <div className="ratio ratio-16x9 mt-4">
    //   <iframe
    //     src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
    //     title="YouTube video"
    //     allowFullScreen
    //   ></iframe>
    // </div>
    <iframe
      width="853"
      height="480"
      src="https://www.youtube.com/embed/ThbXM1-Wfyw?autoplay=1&mute=1&controls=0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
