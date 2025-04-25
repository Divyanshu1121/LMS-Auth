<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Leave Management System</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #1e90ff;
    }
    code {
      background: #eee;
      padding: 2px 6px;
      border-radius: 4px;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
      overflow-x: auto;
      border-left: 3px solid #1e90ff;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1em;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 10px;
      text-align: left;
    }
    ul {
      margin-left: 20px;
    }
  </style>
</head>
<body>

  <h1>🚀 Leave Management System</h1>

  <p>A modern, responsive Leave Management System built with <strong>React</strong> and <strong>Firebase</strong>. This app supports secure <strong>authentication</strong>, <strong>role-based access (admin/employee)</strong>, <strong>CRUD operations</strong>, <strong>leave filtering/sorting</strong>, and <strong>theme switching</strong>.</p>

  <h2>📌 Features</h2>

  <h3>✅ Core Functionalities</h3>
  <ul>
    <li>Apply, Edit, and Delete leave requests</li>
    <li>Filter leaves by month, name, or reason</li>
    <li>Sort leaves by name, date, or status</li>
    <li>Paginated table view of leave requests</li>
  </ul>

  <h3>🔐 Authentication</h3>
  <ul>
    <li>Email & Password login/signup (via Firebase)</li>
    <li>Persistent login using Firebase Auth state</li>
    <li>Secure dashboard access (unauthenticated users are redirected)</li>
  </ul>

  <h3>🔒 Role-Based Access</h3>
  <ul>
    <li><strong>Admin</strong>: View all requests, Approve/Reject</li>
    <li><strong>Employee</strong>: Apply/Edit/Delete personal leave only</li>
  </ul>

  <h3>🌗 Theming</h3>
  <ul>
    <li>Toggle between Light/Dark modes</li>
    <li>Theme preference saved in localStorage</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <table>
    <tr><th>Tech</th><th>Description</th></tr>
    <tr><td>React</td><td>Frontend framework</td></tr>
    <tr><td>Firebase</td><td>Authentication & Firestore Database</td></tr>
    <tr><td>React Router</td><td>Navigation and route protection</td></tr>
    <tr><td>React Toastify</td><td>Feedback alerts</td></tr>
    <tr><td>LocalStorage</td><td>Store theme & draft leave data</td></tr>
  </table>

  <h2>📁 Folder Structure</h2>
  <pre>
src/
│
├── components/
│   ├── LeaveManager.jsx
│   ├── LeaveForm.jsx
│   ├── LeaveTable.jsx
│   ├── Login.jsx
│   └── Signup.jsx
│
├── firebase.jsx
├── App.jsx
└── App.css
  </pre>

  <h2>⚙️ Installation & Setup</h2>

  <ol>
    <li><strong>Clone the Repo</strong>
      <pre>git clone https://github.com/Divyanshu1121/LMS-Auth.git
cd LMS-Auth</pre>
    </li>

    <li><strong>Install Dependencies</strong>
      <pre>npm install</pre>
    </li>

    <li><strong>Set Up Firebase</strong>
      <ul>
        <li>Create project in <a href="https://console.firebase.google.com" target="_blank">Firebase Console</a></li>
        <li>Enable <strong>Email/Password</strong> sign-in</li>
        <li>Create a Firestore database</li>
        <li>Paste config into <code>firebase.jsx</code>:</li>
      </ul>
      <pre>
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
      </pre>
    </li>

    <li><strong>Run the App</strong>
      <pre>npm run dev</pre>
    </li>
  </ol>

  <h2>🔐 How Authentication Works</h2>
  <ul>
    <li>Users signup and select a role (<code>admin</code> or <code>employee</code>)</li>
    <li>Role is stored in Firestore in a <code>Users</code> collection</li>
    <li>On login, role is fetched and passed to the dashboard</li>
    <li>Routes are protected using <code>React Router</code> and conditional rendering</li>
  </ul>

  <h2>🔄 Example Accounts (For Testing)</h2>
  <table>
    <tr><th>Email</th><th>Password</th><th>Role</th></tr>
    <tr><td>j@gmail.com</td><td>100604</td><td>admin</td></tr>
    <tr><td>divu114@gmail.com</td><td>110604</td><td>employee</td></tr>
  </table>

  <h2>💡 Future Enhancements</h2>
  <ul>
    <li>Email notifications for leave status updates</li>
    <li>Analytics dashboard for admins</li>
    <li>Super admin user with user/role management</li>
    <li>CSV/PDF export for leave reports</li>
  </ul>

  <h2>🙌 Credits</h2>
  <p>Made with ❤️ using React + Firebase<br>
     Designed and developed by <strong>Divyanshu .M. Patel</strong></p>

  <h2>📄 License</h2>
  <p>This project is licensed under the <strong>MIT License</strong></p>

</body>
</html>
