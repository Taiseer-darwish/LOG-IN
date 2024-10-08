import React, { useState } from 'react';

const LoginPage = () => {
  // إعداد الحقول الافتراضية لحالة المدخلات
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // دالة تسجيل الدخول
  const handleLogin = (e) => {
    e.preventDefault();
    
    // التحقق من تعبئة جميع الحقول
    if (username === '' || password === '') {
      setError('Please fill in both fields.');
    } else {
      // يمكن إرسال البيانات إذا كانت المدخلات صحيحة
      setError(''); // إعادة تعيين رسالة الخطأ
      console.log('Logging in with:', { username, password });
      // هنا يمكنك تنفيذ أي منطق إضافي مثل استدعاء API أو إعادة التوجيه
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {/* اسم المستخدم */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* كلمة المرور */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* رسالة الخطأ */}
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

          {/* زر تسجيل الدخول */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

