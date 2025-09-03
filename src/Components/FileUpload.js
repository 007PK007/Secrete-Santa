export default function FileUpload({ label, onUpload }) {
    return (
      <div className="mb-4">
        <p className="font-medium mb-2">{label}</p>
        <input type="file" accept=".csv" onChange={onUpload} className="block" />
      </div>
    );
  }
  