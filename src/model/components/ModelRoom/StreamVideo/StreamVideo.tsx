import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { userIdSelector } from "store/selectors/auth";

interface IStream {
  previousModelId: string;
  nextModelId: string;
}

export const StreamVideo: FunctionComponent<IStream> = ({
  previousModelId,
  nextModelId,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const userId = useSelector(userIdSelector);

  const [isMyRoom, setIsMyRoom] = useState(false);

  useEffect(() => {
    if (userId === params.id) {
      setIsMyRoom(true);
    } else {
      setIsMyRoom(false);
    }
  }, [params.id, userId]);

  const pushToPreviousModelRoom = () => {
    if (previousModelId) {
      navigate(`/modelRoom/${previousModelId}`);
    }
  };

  const pushToNextModelRoom = () => {
    if (nextModelId) {
      navigate(`/modelRoom/${nextModelId}`);
    }
  };

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
          <div className="d-flex justify-content-center">
            <Button
              variant="secondary"
              style={{ marginRight: "10px" }}
              onClick={streamCamVideo}
            >
              Start broadcast
            </Button>
            <Button variant="secondary" style={{ marginRight: "10px" }}>
              Pause
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <Button
              variant="secondary"
              style={{ marginRight: "10px" }}
              onClick={pushToPreviousModelRoom}
            >
              previous
            </Button>
            <div>
              <Button variant="secondary" style={{ marginRight: "10px" }}>
                Private
              </Button>
              <Button variant="secondary" style={{ marginRight: "10px" }}>
                Tip model
              </Button>
            </div>
            <Button
              variant="secondary"
              style={{ marginRight: "10px" }}
              onClick={pushToNextModelRoom}
            >
              next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
