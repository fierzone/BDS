// login.js

// Hiển thị modal đăng nhập/đăng ký nếu chưa đăng nhập
window.onload = function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
        document.getElementById("modal").style.display = "block";
    }
}

// Hàm đóng modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Chuyển đổi giữa form đăng nhập và đăng ký
function toggleForms() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

// Xử lý đăng ký
function handleSignup() {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    // Lưu thông tin tài khoản vào localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Đăng ký thành công! Bạn có thể đăng nhập.");
    toggleForms();  // Chuyển về form đăng nhập
}

// Xử lý đăng nhập
function handleLogin() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Lấy thông tin đăng ký từ localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Đăng nhập thành công!");
        localStorage.setItem("isLoggedIn", "true");
        closeModal();  // Đóng modal sau khi đăng nhập
        window.location.reload();  // Tải lại trang để áp dụng trạng thái đăng nhập
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}
