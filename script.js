// script.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // منع إعادة تحميل الصفحة

    // الحصول على القيم المدخلة من قبل المستخدم
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // يمكنك إضافة الكود هنا لإرسال البيانات إلى الخادم أو تخزينها في LocalStorage

    console.log('اسم المستخدم:', name);
    console.log('البريد الإلكتروني:', email);
    console.log('كلمة المرور:', password);

    // تخزين البيانات في LocalStorage (اختياري، يمكنك استخدامها للرجوع إليها لاحقاً)
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);

    // عرض رسالة تأكيد (اختياري)
    alert('تم إنشاء الحساب بنجاح!');

    // تحويل المستخدم إلى الصفحة الرئيسية
    window.location.href = 'home.html';  // تغيير "home.html" إلى اسم الصفحة الرئيسية التي تريد التوجيه إليها
});
