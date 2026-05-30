import { useId } from 'react';

interface EnvelopePostmarkProps {
  label: string;
}

const CENTER = 50;
const TEXT_RADIUS = 30;
const OUTER_RADIUS = 46;
const INNER_RADIUS = 24;
const TEXT_PATH_START_ANGLE = 110;

function polarToCartesian(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;

  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function buildTextPath(radius: number, startAngleDeg: number) {
  const start = polarToCartesian(startAngleDeg, radius);
  const opposite = polarToCartesian(startAngleDeg + 180, radius);
  const dx1 = opposite.x - start.x;
  const dy1 = opposite.y - start.y;
  const dx2 = start.x - opposite.x;
  const dy2 = start.y - opposite.y;

  return `M ${start.x.toFixed(3)},${start.y.toFixed(
    3,
  )} a ${radius},${radius} 0 1,1 ${dx1.toFixed(3)},${dy1.toFixed(
    3,
  )} a ${radius},${radius} 0 1,1 ${dx2.toFixed(3)},${dy2.toFixed(3)}`;
}

export function EnvelopePostmark({ label }: EnvelopePostmarkProps) {
  const pathId = useId();
  const textPath = buildTextPath(TEXT_RADIUS, TEXT_PATH_START_ANGLE);

  return (
    <svg
      className="envelope-postmark"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <path id={pathId} d={textPath} />
      </defs>

      <circle
        className="envelope-postmark-ring envelope-postmark-ring--outer"
        cx={CENTER}
        cy={CENTER}
        r={OUTER_RADIUS}
        fill="none"
        stroke="currentColor"
      />

      <circle
        className="envelope-postmark-ring envelope-postmark-ring--inner"
        cx={CENTER}
        cy={CENTER}
        r={INNER_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />

      <text className="envelope-postmark-text">
        <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
          {label}
        </textPath>
      </text>
    </svg>
  );
}
