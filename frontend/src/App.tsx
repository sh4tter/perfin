
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import EnhancedDashboard from './components/dashboard/EnhancedDashboard';
import DashboardLayout from './components/layout/DashboardLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import StyleTest from './components/test/StyleTest';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/test-styles" element={<StyleTest />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<EnhancedDashboard />} />
              <Route path="transactions" element={<div className="p-6 text-center text-gray-500">Transactions feature coming soon...</div>} />
              <Route path="analytics" element={<div className="p-6 text-center text-gray-500">Analytics feature coming soon...</div>} />
              <Route path="reports" element={<div className="p-6 text-center text-gray-500">Reports feature coming soon...</div>} />
              <Route path="settings" element={<div className="p-6 text-center text-gray-500">Settings feature coming soon...</div>} />
              <Route path="" element={<Navigate to="/dashboard" replace />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
