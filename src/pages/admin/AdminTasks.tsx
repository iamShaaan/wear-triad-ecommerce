import React, { useEffect, useState } from 'react';
import { getTasks, addTask } from '@/lib/firestore'; // We created this in Step 3
import { Task } from '@/types';
import { CheckCircle, Clock, AlertCircle, Plus } from 'lucide-react';

export const AdminTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    // Fetch Tasks
    useEffect(() => {
        const loadTasks = async () => {
            const data = await getTasks() as Task[];
            setTasks(data);
            setLoading(false);
        };
        loadTasks();
    }, []);

    // Handle Create Task
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTaskTitle) return;

        const newTask: Task = {
            title: newTaskTitle,
            status: 'open',
            priority: 'medium',
            dueDate: new Date().toISOString()
        };

        try {
            await addTask(newTask);
            setTasks([...tasks, newTask]); // Optimistic update
            setNewTaskTitle('');
            setShowForm(false);
        } catch (err) {
            console.error("Failed to add task", err);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-heading text-gray-800 uppercase">System Tasks</h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded font-bold font-sans hover:bg-red-800 transition-colors"
                >
                    <Plus size={18} /> New Task
                </button>
            </div>

            {/* NEW TASK FORM */}
            {showForm && (
                <form onSubmit={handleCreate} className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-brand-primary">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Task Title</label>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-brand-primary"
                            placeholder="e.g., Update Spring Inventory..."
                        />
                        <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded font-bold hover:bg-gray-700">
                            Save
                        </button>
                    </div>
                </form>
            )}

            {/* TASK LIST */}
            <div className="space-y-4">
                {loading ? (
                    <p className="text-gray-500 font-sans">Syncing with Firestore...</p>
                ) : tasks.length === 0 ? (
                    <div className="text-center p-12 bg-white rounded-lg shadow text-gray-400">
                        No active tasks in the system.
                    </div>
                ) : (
                    tasks.map((task, index) => (
                        <div key={task.id || index} className="bg-white p-4 rounded-lg shadow flex items-center justify-between group hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                                {task.status === 'done' ? <CheckCircle className="text-green-500" /> : <Clock className="text-yellow-500" />}
                                <div>
                                    <h3 className="font-bold text-gray-800">{task.title}</h3>
                                    <span className="text-xs text-gray-500 font-sans uppercase tracking-wider">{task.priority} Priority</span>
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-600 uppercase">
                                {task.status}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
