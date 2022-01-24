import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { roleSelector, userIdSelector } from "store/selectors/auth";

export const StreamVideo: FunctionComponent = () => {
  const userRole = useSelector(roleSelector);
  const params = useParams();
  const userId = useSelector(userIdSelector);

  const [isMyRoom, setIsMyRoom] = useState(false);

  useEffect(() => {
    if (userId === params.id) {
      setIsMyRoom(true);
    } else {
      setIsMyRoom(false);
    }
  }, [params.id, userId]);

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
      <div>
        {isMyRoom ? (
          <Button
            variant="secondary"
            // className="mt-1"
            onClick={streamCamVideo}
            // style={{ marginBottom: "80px" }}
          >
            Start broadcast
          </Button>
        ) : null}
        {userRole === "USER" ? (
          <div className="d-flex justify-content-center">
            <Button variant="secondary" style={{ marginRight: "10px" }}>
              Private
            </Button>
            <Button variant="secondary" style={{ marginRight: "10px" }}>
              Tip model
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};