const DownArrow = ({ size = 40, color = "var(--color-secondary)" }) => {
  const animationStyle = {
    animation: "bounceDown 1.5s ease-in-out infinite",
  };


  return (
    <>
      <style>
        {`
          @keyframes bounceDown {
            0%, 10% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(5px);
            }
          }
        `}
      </style>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={animationStyle}
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    </>
  );
};

export default DownArrow;