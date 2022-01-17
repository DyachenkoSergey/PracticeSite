import { FunctionComponent } from "react";

export const StreamVideo: FunctionComponent = () => {
  const streamCamVideo = () => {
    const constraints = {
      audio: true,
      video: true,
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector("video");
        if (video) {
          video.srcObject = mediaStream;
          video.onloadedmetadata = (e) => {
            video.play();
          };
        }
      })
      .catch((error) => {
        console.log(error.name + ": " + error.message);
      });
  };
  return (
    <div>
      <div id="container">
        <video
          autoPlay={true}
          id="videoElement"
          controls
          style={{ width: "100%", height: "405px" }}
        ></video>
      </div>
      <br />
      <button onClick={streamCamVideo}>Start streaming</button>
    </div>
  );
};
