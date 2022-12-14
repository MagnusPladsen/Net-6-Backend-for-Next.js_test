export default function ShowField({
  field,
  removeField,
}: {
  field: string;
  removeField: (field: string) => void;
}) {
  return (
    <div
      onClick={() => removeField(field)}
      className="py-2 px-4 mr-2 mb-2 border border-primary rounded hover:cursor-pointer group hover:border-secondary"
    >
      {field} <span className="group-hover:text-secondary float-right">X</span>
    </div>
  );
}
