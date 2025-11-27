import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';
import Spinner from '../components/Spinner';
import AnimatedPage from '../components/AnimatedPage';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await api.get('/orders/my-history');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <Spinner />;

  return (
    <AnimatedPage>
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">My Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-xl shadow p-6 border border-indigo-100">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-indigo-600">Order #{order.id}</span>
                <span className="text-gray-500">{new Date(order.date).toLocaleDateString()}</span>
              </div>
              <div>
                <span className="font-medium">Items:</span>
                <ul className="list-disc ml-6">
                  {order.items.map(item => (
                    <li key={item.id}>{item.name} x {item.quantity}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 text-right font-bold text-indigo-700">Total: ${order.total}</div>
            </div>
          ))}
        </div>
      )}
    </AnimatedPage>
  );
};

export default Orders;
