import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
};
const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  type,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      disabled={isLoading}
    >
      {isLoading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ marginRight: 4 }}
          width="16px"
          height="16px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx={50}
            cy={50}
            fill="none"
            stroke="#dadada"
            strokeWidth={10}
            r={35}
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            />
          </circle>
        </svg>
      )}

      <span>{children}</span>
    </button>
  );
};

export default Button;
