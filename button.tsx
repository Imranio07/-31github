"use client";

interface Props {
  type: string;
  state: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ type, state, onClick }) => {
  return (
    <button onClick={onClick}>
      button
    </button>
  )
}
