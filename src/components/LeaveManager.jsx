import { useEffect, useState } from 'react';
import { getFire } from '../../firebase';
import {
    getDocs,
    collection,
    deleteDoc,
    doc,
    addDoc,
    updateDoc
} from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import LeaveForm from './LeaveForm';
import LeaveTable from './LeaveTable';
import '../App.css';

function LeaveManager() {
    let [leave, setLeave] = useState(JSON.parse(localStorage.getItem("leaveDraft")) || {});
    let [leaveList, setLeaveList] = useState([]);
    let [leaveId, setLeaveId] = useState(0);
    let [filterMonth, setFilterMonth] = useState("");
    let [error, setError] = useState("");
    let [searchTerm, setSearchTerm] = useState("");
    let [sortBy, setSortBy] = useState("");
    let [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 3;

    let [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };


    useEffect(() => {
        getAllLeaves();
    }, []);

    useEffect(() => {
        localStorage.setItem("leaveDraft", JSON.stringify(leave));
    }, [leave]);

    let getAllLeaves = async () => {
        let allRecords = await getDocs(collection(getFire, "LeaveRequests"));
        let newArr = [];
        allRecords.forEach((doc) => {
            let obj = { ...doc.data(), ["id"]: doc.id };
            newArr.push(obj);
        });
        newArr.sort((a, b) => new Date(b.date) - new Date(a.date));
        setLeaveList(newArr);
    };

    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setLeave({ ...leave, [name]: value });
    };

    let submitData = async (e) => {
        e.preventDefault();
        if (!leave.name || !leave.date || !leave.reason) {
            setError("All fields are required.");
            return;
        }
        if (leave.reason.length > 100) {
            setError("Reason can't exceed 100 characters.");
            return;
        }
        setError("");

        if (leaveId) {
            await updateDoc(doc(getFire, "LeaveRequests", leaveId), leave);
        } else {
            await addDoc(collection(getFire, "LeaveRequests"), { ...leave, status: "Pending" });
        }

        setLeave({});
        localStorage.removeItem("leaveDraft");
        toast.success("Leave Applied")
        setLeaveId(0);
        getAllLeaves();
    };

    let editLeave = (id) => {
        let record = leaveList.find((v) => v.id === id);
        setLeave(record);
        setLeaveId(id);
    };

    let deleteLeave = async (id) => {
        await deleteDoc(doc(getFire, "LeaveRequests", id));
        toast.error("Leave Deleted")
        getAllLeaves();
    };

    let updateStatus = async (id, status) => {
        await updateDoc(doc(getFire, "LeaveRequests", id), { status });
        toast.success("Leave Granted")
        getAllLeaves();
    };

    let filteredLeaves = filterMonth
        ? leaveList.filter((l) => l.date && l.date.startsWith(filterMonth))
        : leaveList;

    let searchedLeaves = filteredLeaves.filter((l) =>
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.reason.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === "name") {
        searchedLeaves.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "status") {
        searchedLeaves.sort((a, b) => a.status.localeCompare(b.status));
    } else if (sortBy === "date") {
        searchedLeaves.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    let indexOfLastItem = currentPage * itemsPerPage;
    let indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = searchedLeaves.slice(indexOfFirstItem, indexOfLastItem);
    let totalPages = Math.ceil(searchedLeaves.length / itemsPerPage);

    return (
        <div className="leave-container">
            <div className="theme-toggle">
                <button onClick={toggleTheme} className="theme-btn" title="Toggle Theme">
                    {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>

            <h1 className="leave-title"> Leave Management System</h1>

            <LeaveForm
                leave={leave}
                getInput={getInput}
                submitData={submitData}
                leaveId={leaveId}
                error={error}
            />

            <div className="search-sort-bar">
                <input
                    type="text"
                    placeholder="Search by name or reason..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />

                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                    <option value="status">Status</option>
                </select>
            </div>

            <div className="leave-filter">
                <label>Select Month: </label>
                <input
                    type="month"
                    onChange={(e) => setFilterMonth(e.target.value)}
                    value={filterMonth}
                />
                <button onClick={() => setFilterMonth("")}>Clear Filter</button>
            </div>

            <LeaveTable
                leaveList={currentItems}
                deleteLeave={deleteLeave}
                editLeave={editLeave}
                updateStatus={updateStatus}
            />

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={currentPage === i + 1 ? "active" : ""}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
}

export default LeaveManager;
