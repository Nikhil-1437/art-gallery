
import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';
import Spinner from '../components/Spinner';
import AnimatedPage from '../components/AnimatedPage';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', mobile: '', address: '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await api.get('/auth/me');
        setUser(response.data);
        setForm({
          name: response.data.name,
          email: response.data.email,
          mobile: response.data.mobile || '',
          address: response.data.address || ''
        });
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const handleEdit = () => {
    setEditing(true);
    setError('');
  };

  const handleCancel = () => {
    setEditing(false);
    setForm({ name: user.name, email: user.email });
    setError('');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      // You may need to adjust the endpoint and payload to match your backend
      const response = await api.put('/auth/me', {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        address: form.address
      });
      setUser(response.data);
      setEditing(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Spinner />;
  if (!user) return <AnimatedPage><p>User profile not found.</p></AnimatedPage>;

  return (
    <AnimatedPage>
      <div className="min-h-[80vh] w-full flex items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-indigo-300 py-10 px-2">
        <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-10 border border-indigo-300 flex flex-col items-center animate-fade-in">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full h-28 w-28 flex items-center justify-center text-white text-5xl font-bold mb-4 shadow-2xl border-4 border-white/50 hover:scale-110 transition-transform duration-300">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2 tracking-wide drop-shadow-lg" style={{ fontFamily: 'Inter, serif' }}>{user.name}</h1>
            <span className="text-lg text-gray-600 font-semibold bg-indigo-100 px-4 py-1 rounded-full">{user.role === 'ROLE_SELLER' ? '🎨 Artist' : '👤 Collector'}</span>
          </div>
          <div className="w-full space-y-6">
            {editing ? (
              <form onSubmit={handleSave} className="space-y-6">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2 flex items-center"><span className="mr-2">👤</span>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="px-4 py-3 border-2 border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 text-lg hover:bg-indigo-100 transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2 flex items-center"><span className="mr-2">📧</span>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="px-4 py-3 border-2 border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 text-lg hover:bg-indigo-100 transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2 flex items-center"><span className="mr-2">📱</span>Mobile Number</label>
                  <input
                    type="text"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    className="px-4 py-3 border-2 border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 text-lg hover:bg-indigo-100 transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2 flex items-center"><span className="mr-2">🏠</span>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="px-4 py-3 border-2 border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 text-lg hover:bg-indigo-100 transition-colors"
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex space-x-6 mt-8 justify-center">
                  <button type="submit" className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg" disabled={saving}>
                    {saving ? '💾 Saving...' : '💾 Save'}
                  </button>
                  <button type="button" className="px-10 py-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg" onClick={handleCancel} disabled={saving}>
                    ❌ Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="flex items-center justify-between py-4 border-b border-indigo-200 text-lg bg-gradient-to-r from-indigo-50 to-purple-50 px-4 rounded-lg mb-2">
                  <span className="text-gray-700 font-semibold flex items-center"><span className="mr-2">📧</span>Email:</span>
                  <span className="text-indigo-700 font-semibold">{user.email}</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-indigo-200 text-lg bg-gradient-to-r from-indigo-50 to-purple-50 px-4 rounded-lg mb-2">
                  <span className="text-gray-700 font-semibold flex items-center"><span className="mr-2">📱</span>Mobile Number:</span>
                  <span className="text-indigo-700 font-semibold">{user.mobile || 'Not Provided'}</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-indigo-200 text-lg bg-gradient-to-r from-indigo-50 to-purple-50 px-4 rounded-lg mb-2">
                  <span className="text-gray-700 font-semibold flex items-center"><span className="mr-2">🏠</span>Address:</span>
                  <span className="text-indigo-700 font-semibold">{user.address || 'Not Provided'}</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-indigo-200 text-lg bg-gradient-to-r from-indigo-50 to-purple-50 px-4 rounded-lg mb-2">
                  <span className="text-gray-700 font-semibold flex items-center"><span className="mr-2">👤</span>Role:</span>
                  <span className="text-indigo-700 font-semibold">{user.role === 'ROLE_SELLER' ? 'Artist' : 'Collector'}</span>
                </div>
                <div className="mt-12 flex justify-center">
                  <button className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg" onClick={handleEdit}>
                    ✏️ Edit Profile
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default UserProfile;
