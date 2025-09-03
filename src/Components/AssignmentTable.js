export default function AssignmentTable({ assignments, onDownload }) {
    return (
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Assignments Preview</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Employee</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Secret Child</th>
              <th className="border px-2 py-1">Email</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a, i) => (
              <tr key={i}>
                <td className="border px-2 py-1">{a.Employee_Name}</td>
                <td className="border px-2 py-1">{a.Employee_EmailID}</td>
                <td className="border px-2 py-1">{a.Secret_Child_Name}</td>
                <td className="border px-2 py-1">{a.Secret_Child_EmailID}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onDownload} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Download CSV
        </button>
      </div>
    );
  }
  