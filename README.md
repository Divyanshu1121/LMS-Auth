# 🚀 Leave Management System (LMS)

A smart, modern, and intuitive **Leave Management System** built using **React.js** and **Firebase**. Designed for dynamic teams, educational institutions, or HR dashboards, this app offers seamless management of leave requests with real-time operations and a highly responsive UI.

---

## 🌟 Key Features

✅ **Leave Application & Form Validation**  
- A clean form with input validations and error handling.  
- Automatically limits reason input to 100 characters and shows a live character count.  
- Prevents form submission if required fields are empty.  

🔄 **Smart CRUD Operations**  
- Easily Apply, Update, and Delete leave applications.  
- All actions are synced with Firebase Firestore in real-time.  

📅 **Filter, Search & Sort**  
- Filter leave entries by month.  
- Search instantly by employee name or reason.  
- Sort leaves by Name, Date, or Status for smarter navigation.  

🎨 **Light & Dark Mode**  
- Fully implemented theme toggle (🌙/🌞).  
- Theme preference is saved using localStorage and persists across sessions.  

📦 **LocalStorage Enhancements**  
- Saves your in-progress leave form automatically.  
- Never lose form data — even if the page is accidentally refreshed!  

🔔 **Toast Notifications**  
- Interactive and user-friendly notifications using React Toastify.  
- For leave submission, approvals, rejections, and deletions.  

📊 **Paginated Leave Records**  
- Clean and simple pagination system.  
- Displays 3 records per page with dynamic navigation.  

---

## 🛠️ Tech Stack Used

- **React.js** – Frontend and UI framework  
- **Firebase Firestore** – Real-time cloud database  
- **React Toastify** – Toast notifications  
- **CSS3** – Fully customized responsive design  
- **LocalStorage** – Persistent theme and form state  

---

## 📂 Folder Structure

src/  
├── components/  
│   ├── LeaveForm.jsx – Input form for applying/updating leave  
│   ├── LeaveTable.jsx – Displays paginated leave requests  
│   └── LeaveManager.jsx – Manages all logic, filtering, sorting, and CRUD  
├── App.jsx – Renders LeaveManager  
├── App.css – Main styling including dark/light themes  
└── main.jsx – Application entry point  

---

## 🔧 How to Run This Project Locally

1. **Clone the Repository**

```
git clone https://github.com/your-username/leave-management-system.git
cd leave-management-system
```

2. **Install Dependencies**

```
npm install
```

3. **Set Up Firebase**

- Go to https://console.firebase.google.com  
- Create a new project and enable Firestore Database  
- Replace `firebase.js` with your Firebase config  
- Create a collection named `LeaveRequests` in Firestore  

4. **Run the App**

```
npm run dev
```

---

## 🚀 What Makes This App Special?

- Real-time sync with Firebase Firestore  
- Persistent theme and form drafts using LocalStorage  
- Search, filter, sort, and paginate data with ease  
- Clean modular code structure  
- Perfect for HR, Admins, or developer portfolios  

---

## 🙌 Ideal For

- HR & Admin Dashboards  
- Frontend + Firebase CRUD demo  
- Academic or portfolio projects  
- Beginners learning full-stack development  

---

## 🧡 Support & Contributions

If you liked this project, consider giving it a ⭐️ on GitHub.  
Issues, feedback, and pull requests are warmly welcome!

---

## 📄 License

This project is open-source and available under the MIT License.

---
