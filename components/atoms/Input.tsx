type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function Input({ value, onChange }: Props) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border p-2 rounded-lg"
    />
  );
}
