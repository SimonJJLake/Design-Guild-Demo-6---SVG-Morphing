export const Keyhole: React.FC<{ isKeyhole: boolean }> = ({ isKeyhole }) => {
  const keyholePath =
    "M 155.82 171.46 C 154.74 146.68 146.26 130.11 136.43 119.1 C 145.104 108.365 150.566 95.3964 152.184 81.6903 C 153.802 67.9842 151.511 54.1 145.575 41.6405 C 139.639 29.1811 130.3 18.6545 118.637 11.2761 C 106.973 3.8977 93.461 -0.0317 79.6597 -0.0583 C 65.8585 -0.085 52.3312 3.7922 40.6394 11.1255 C 28.9477 18.4589 19.5683 28.9494 13.5843 41.3858 C 7.6002 53.8223 5.2554 67.6976 6.8206 81.4098 C 8.3858 95.122 13.7972 108.112 22.43 118.88 C 12.43 129.88 3.77 146.56 2.84 171.46 C 1.55 204.6 0.09 230.82 0 232.41 L 1.7 234.21 H 156.91 L 158.61 232.41 C 158.53 230.82 157.26 204.59 155.82 171.46 Z";
  const rectanglePath =
    "M 158 172 C 158 147 158 136 158 119 C 158 105 158 96 158 82 C 158 68 158 54 158 40 C 158 26 158 20 158 0 C 107 0 93.461 -0.0317 79.6597 -0.0583 C 65.8585 -0.085 52 0 0 0 C 0 19 0 29 0 39 C 0 55 0 67 0 82 C 0 95 0 105 0 118 C 0 130 0 146 0 172 C 0 205 0 233 0 234 L 1.7 234.21 H 157 L 158 234 C 158 231 158 205 158 172 Z";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 158 234"
      height="100%"
      width="100%"
      preserveAspectRatio="none"
    >
      <path
        style={{ transition: "all 1s" }}
        d={isKeyhole ? keyholePath : rectanglePath}
        fill="#000000"
      />
    </svg>
  );
};
