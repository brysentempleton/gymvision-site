import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  spring,
} from "remotion";
import { z } from "zod";

// 60-second silent product walkthrough for getgymvision.com hero.
// 6 screen sequences × 8 seconds = 48s · plus 6s intro + 6s outro = 60s @ 30fps.
//
// Each screen sequence: 0.5s fade-in → 6s hold with subtle zoom → 1.5s fade-out.
// Overlay text appears in the upper-left corner (eyebrow + title + 1-line).
// Background is solid black (matches the marketing site).
//
// All screenshots are loaded via staticFile() from public/screenshots/.

export const walkthroughSchema = z.object({});

const FPS = 30;
const SCENE_FRAMES = 8 * FPS; // 240 frames per scene
const INTRO_FRAMES = 6 * FPS; // 180 frames for intro
const OUTRO_FRAMES = 6 * FPS; // 180 frames for outro

const SCENES = [
  {
    screenshot: "screenshots/admin-my-day.png",
    eyebrow: "Operator inbox",
    title: "An action queue, not a dashboard",
    sub: "Failed payments, leads to call, members through this week. Only what needs you.",
  },
  {
    screenshot: "screenshots/admin-schedule.png",
    eyebrow: "Class scheduling",
    title: "Your whole week at a glance",
    sub: "Calendar view for visual editing. List view for bulk ops. Today highlighted.",
  },
  {
    screenshot: "screenshots/desk-home.png",
    eyebrow: "Front desk",
    title: "Built for the counter",
    sub: "Photo-grid check-in. Walk-in lead capture in 30 seconds. Counter payments.",
  },
  {
    screenshot: "screenshots/admin-billing.png",
    eyebrow: "Billing",
    title: "Stripe at-cost — zero markup",
    sub: "We never touch the money. At $20k/mo that's $4,800/yr back in your pocket.",
  },
  {
    screenshot: "screenshots/admin-comms.png",
    eyebrow: "Comms",
    title: "Two-way SMS, AI-drafted",
    sub: "Inbound threads per-member. Outbound broadcasts with AI assist. Templates included.",
  },
  {
    screenshot: "screenshots/portal-home.png",
    eyebrow: "Member portal",
    title: "Your brand, not someone else's",
    sub: "Members install your gym as a PWA. Book, log, message, manage billing — offline-capable.",
  },
];

export const walkthroughDuration =
  INTRO_FRAMES + SCENES.length * SCENE_FRAMES + OUTRO_FRAMES;

// ─── Intro card ───────────────────────────────────────────────────────────────

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 30, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
  });
  const opacity = Math.min(fadeIn, fadeOut);
  const titleY = spring({ frame, fps: FPS, config: { damping: 18 } });
  return (
    <AbsoluteFill
      style={{
        background: "#0a0a0a",
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <div
        style={{
          color: "#e63329",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 24,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        GymVision
      </div>
      <h1
        style={{
          color: "white",
          fontSize: 112,
          fontWeight: 900,
          letterSpacing: "-0.02em",
          textAlign: "center",
          margin: 0,
          lineHeight: 0.95,
          transform: `translateY(${(1 - titleY) * 40}px)`,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        The gym OS that<br />
        <span style={{ color: "#e63329" }}>thinks ahead.</span>
      </h1>
      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: 28,
          marginTop: 32,
          maxWidth: 900,
          textAlign: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        Built by operators, for operators.
      </p>
    </AbsoluteFill>
  );
};

// ─── Scene template ──────────────────────────────────────────────────────────

const Scene: React.FC<{
  screenshot: string;
  eyebrow: string;
  title: string;
  sub: string;
}> = ({ screenshot, eyebrow, title, sub }) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [SCENE_FRAMES - 45, SCENE_FRAMES], [1, 0], {
    extrapolateLeft: "clamp",
  });
  const opacity = Math.min(fadeIn, fadeOut);
  // Subtle Ken-Burns zoom (1.0 → 1.04 over the scene)
  const scale = interpolate(frame, [0, SCENE_FRAMES], [1.0, 1.04]);

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", opacity }}>
      {/* Background grid */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial glow */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(230,51,41,0.12), transparent)",
        }}
      />

      {/* Screenshot in faux browser */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            width: 1280,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.02)",
            padding: 8,
            boxShadow: "0 30px 80px -10px rgba(230,51,41,0.15)",
          }}
        >
          {/* Faux chrome */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 14px",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: 5, background: "rgba(255,255,255,0.15)" }} />
            <span style={{ width: 10, height: 10, borderRadius: 5, background: "rgba(255,255,255,0.15)" }} />
            <span style={{ width: 10, height: 10, borderRadius: 5, background: "rgba(255,255,255,0.15)" }} />
            <span
              style={{
                marginLeft: 12,
                fontSize: 11,
                fontFamily: "ui-monospace, monospace",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.04em",
              }}
            >
              yourgym.gymvision.co
            </span>
          </div>
          <Img
            src={staticFile(screenshot)}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "0 0 12px 12px",
              display: "block",
            }}
          />
        </div>
      </AbsoluteFill>

      {/* Overlay text — bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 80,
          maxWidth: 680,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            color: "#e63329",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {eyebrow}
        </div>
        <h2
          style={{
            color: "white",
            fontSize: 44,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.05,
            marginBottom: 12,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 18,
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {sub}
        </p>
      </div>

      {/* Watermark — bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 80,
          fontSize: 14,
          fontWeight: 900,
          letterSpacing: "-0.01em",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        getgymvision.com
      </div>
    </AbsoluteFill>
  );
};

// ─── Outro card ───────────────────────────────────────────────────────────────

const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 30, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
  });
  const opacity = Math.min(fadeIn, fadeOut);
  return (
    <AbsoluteFill
      style={{
        background: "#0a0a0a",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Radial glow */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(230,51,41,0.2), transparent)",
        }}
      />
      <div
        style={{
          color: "#e63329",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 24,
          position: "relative",
        }}
      >
        Founding gyms
      </div>
      <h1
        style={{
          color: "white",
          fontSize: 80,
          fontWeight: 900,
          letterSpacing: "-0.02em",
          textAlign: "center",
          margin: 0,
          lineHeight: 0.95,
          position: "relative",
        }}
      >
        Replace your gym OS<br />
        <span style={{ color: "#e63329" }}>in one afternoon.</span>
      </h1>
      <div
        style={{
          marginTop: 60,
          padding: "16px 36px",
          borderRadius: 9999,
          background: "#e63329",
          color: "white",
          fontSize: 24,
          fontWeight: 700,
          position: "relative",
        }}
      >
        getgymvision.com
      </div>
    </AbsoluteFill>
  );
};

// ─── Root composition ─────────────────────────────────────────────────────────

export const GymVisionWalkthrough: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      <Sequence durationInFrames={INTRO_FRAMES}>
        <Intro />
      </Sequence>
      {SCENES.map((scene, i) => (
        <Sequence
          key={scene.screenshot}
          from={INTRO_FRAMES + i * SCENE_FRAMES}
          durationInFrames={SCENE_FRAMES}
        >
          <Scene {...scene} />
        </Sequence>
      ))}
      <Sequence
        from={INTRO_FRAMES + SCENES.length * SCENE_FRAMES}
        durationInFrames={OUTRO_FRAMES}
      >
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
