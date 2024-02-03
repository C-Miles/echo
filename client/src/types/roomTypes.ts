import { RefObject } from "react";

export type RoomProps = {
  localVideoRef: RefObject<HTMLVideoElement>;
  remoteVideoRef: RefObject<HTMLVideoElement>;
  remoteStream: MediaStream | null;
  roomId: string | undefined;
  toggleVideo: () => void;
  username: string | undefined;
  videoEnabled: boolean;
};
