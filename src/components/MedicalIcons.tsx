import React from "react";

interface MedicalIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const MedicalCross: React.FC<MedicalIconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
  >
    <path d="M19 8h-2V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" />
  </svg>
);

export const Stethoscope: React.FC<MedicalIconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    className={className}
    strokeWidth="2"
  >
    <path d="M11 2v6" />
    <path d="M5 2v6" />
    <path d="M5 8a7 7 0 0 0 6 7 7 7 0 0 0 6-7" />
    <path d="M8 15v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

export const HeartMonitor: React.FC<MedicalIconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    className={className}
    strokeWidth="2"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const Hospital: React.FC<MedicalIconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
  >
    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.06.21 2.94.21 4 0 5.16-1 9-5.45 9-11V7l-10-5z" />
    <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.5" />
  </svg>
);

export const Ambulance: React.FC<MedicalIconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    className={className}
    strokeWidth="2"
  >
    <path d="M10 10H8V8h2v2ZM16 10h-2V8h2v2ZM10 14H8v-2h2v2ZM16 14h-2v-2h2v2Z" />
    <path d="M5 12V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5M5 12l-2 5h18l-2-5M5 12h14" />
    <circle cx="8" cy="19" r="2" />
    <circle cx="16" cy="19" r="2" />
  </svg>
);

export const MedicinePill: React.FC<MedicalIconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
  >
    <path d="M10.5 20.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
    <path d="m8.5 8.5 4 4" />
    <path d="m12.5 8.5-4 4" />
  </svg>
);
