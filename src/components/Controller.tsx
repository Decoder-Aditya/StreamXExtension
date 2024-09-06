import Playlist from "@/Playlist";
import TogglePlay from "./ControlButtons/TogglePlay";
import MediaController from "./MediaController/MediaController";
import { MediaProps } from "@/App";
import ToggleFullScreen from "./ControlButtons/ToggleFullScreen";
import PlayNext from "./ControlButtons/PlayNext";
import PlayPrev from "./ControlButtons/PlayPrev";
import Speaker from "./ControlButtons/Speaker";
import PlaybackTime from "./ControlButtons/PlaybackTime";
import PictureInPictureButton from "./ControlButtons/PictureInPictureButton";
import SettingsButton from "./ControlButtons/SettingsButton";
import ToggleAutoPlay from "./ControlButtons/ToggleAutoPlay";
import MediaTimeline from "./ControlButtons/MediaTimeline";

interface ControllerProps {
  media: {
    mediaName: string;
    mediaUrl: string;
    mediaType: string;
  };
  autoPlay: boolean;
  playlist: MediaProps[];
  currentMediaIndex: number;
  mediaRef: React.RefObject<HTMLMediaElement>;
  setAutoPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentMediaIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Controller = ({
  media,
  mediaRef,
  playlist,
  autoPlay,
  setAutoPlay,
  currentMediaIndex,
  setCurrentMediaIndex,
}: ControllerProps) => {
  return (
    <MediaController>
      <div className="absolute left-0 top-0 flex items-center px-8 py-4 text-lg">
        <Playlist
          mediaFiles={playlist}
          currentMediaIndex={currentMediaIndex}
          setCurrentMediaIndex={setCurrentMediaIndex}
        />
        <span>{playlist[currentMediaIndex].mediaName}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mb-4 flex flex-col gap-2 px-8">
        <MediaTimeline media={media} mediaRef={mediaRef} />

        <div className="flex justify-between">
          <div className="flex">
            <PlayPrev
              currentMediaIndex={currentMediaIndex}
              setCurrentMediaIndex={setCurrentMediaIndex}
            />
            <TogglePlay mediaRef={mediaRef} />
            <PlayNext
              playlist={playlist}
              currentMediaIndex={currentMediaIndex}
              setCurrentMediaIndex={setCurrentMediaIndex}
            />
            <Speaker mediaRef={mediaRef} />
            <PlaybackTime mediaRef={mediaRef} />
          </div>

          <div className="flex">
            {playlist.length > 1 && (
              <ToggleAutoPlay autoPlay={autoPlay} setAutoPlay={setAutoPlay} />
            )}
            <SettingsButton />
            <PictureInPictureButton mediaRef={mediaRef} media={media} />
            <ToggleFullScreen />
          </div>
        </div>
      </div>
    </MediaController>
  );
};

export default Controller;
