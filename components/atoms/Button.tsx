type Props = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
    >
      {label}
    </button>
  );
}
