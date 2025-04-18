function LeaveForm({ leave, getInput, submitData, leaveId, error }) {
    return (
        <form className="leave-form" onSubmit={(e) => submitData(e)}>
            <div className="form-row">
                <label>Employee Name</label>
                <input
                    type="text"
                    name='name'
                    placeholder='Enter Name'
                    onChange={getInput}
                    value={leave.name || ""}
                />
            </div>
            <div className="form-row">
                <label>Leave Date</label>
                <input
                    type="date"
                    name='date'
                    onChange={getInput}
                    value={leave.date || ""}
                />
            </div>
            <div className="form-row">
                <label>Reason</label>
                <input
                    type="text"
                    name='reason'
                    maxLength={100}
                    placeholder='Leave Reason (max 100 chars)'
                    onChange={getInput}
                    value={leave.reason || ""}
                />
                <small>{leave.reason?.length || 0}/100</small>
            </div>
            {error && <p className="error-text">{error}</p>}
            <button type="submit">{leaveId ? "Update" : "Apply"}</button>
        </form>
    );
}

export default LeaveForm;