import { Composition, registerRoot } from "remotion";
import { GymVisionWalkthrough, walkthroughSchema, walkthroughDuration } from "./Walkthrough";

// Remotion entry point. Single composition for now: a 60-second
// silent product walkthrough that animates through the 7 captured
// screenshots with overlay text + smooth crossfades.
//
// Render:   pnpm remotion render Walkthrough out/gymvision-walkthrough.mp4
// Preview:  pnpm remotion studio

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Walkthrough"
      component={GymVisionWalkthrough}
      durationInFrames={walkthroughDuration}
      fps={30}
      width={1920}
      height={1080}
      schema={walkthroughSchema}
      defaultProps={{}}
    />
  );
};

registerRoot(RemotionRoot);
