function LeaveTable({ leaveList, deleteLeave, editLeave, updateStatus, userRole }) {
    return (
        <div className="leave-table-wrapper">
            <table className="leave-table">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {leaveList.length === 0 ? (
                        <tr><td colSpan={6} className="empty-row">No Leave Requests</td></tr>
                    ) : (
                        leaveList.map((v, i) => (
                            <tr key={v.id}>
                                <td>{i + 1}</td>
                                <td>{v.name}</td>
                                <td>{v.date}</td>
                                <td>{v.reason}</td>
                                <td>{v.status}</td>
                                <td>
                                    <button className="btn" onClick={() => editLeave(v.id)}>Edit</button>
                                    <button className="btn" onClick={() => deleteLeave(v.id)}>Delete</button>
                                    {userRole === "admin" && v.status === "Pending" && (
                                        <>
                                            <button className="btn" onClick={() => updateStatus(v.id, "Approved")}>Approve</button>
                                            <button className="btn" onClick={() => updateStatus(v.id, "Rejected")}>Reject</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default LeaveTable;
