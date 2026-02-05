type Props = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
    >
      {label}
    </button>
  );
}
