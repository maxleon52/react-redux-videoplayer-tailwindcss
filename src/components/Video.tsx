import ReactPlayer from "react-player";

import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";

export default function Video() {
  const dispatch = useAppDispatch();
  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  const { currentLesson } = useCurrentLesson();

  function handlePlayNext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
        <div className="h-full flex items-center justify-center">
          <Loader className="h-6 w-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          onEnded={handlePlayNext}
        />
      )}
    </div>
  );
}
