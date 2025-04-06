import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/users/login', { username, password });
            console.log(response.data);
            toast.success('Logged in successfully');
            navigate('/dashboard');
        } catch (error) {
            handleErrors(error);
            setIsLoading(false); // Set isLoading to false in case of error
        } finally {
            setIsLoading(false); // Also set isLoading to false here for consistency
        }
    };

    function handleErrors(error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response?.data);
            toast.error('Invalid credentials or not an admin.');
        } else {
            console.error(error);
            toast.error('An unexpected error occurred.');
        }
        setIsLoading(false); // Ensure isLoading is set to false after showing an error toast
    }

    return (
        <>

            <div className="lg:flex">
                <div className="lg:w-1/2 xl:max-w-screen-sm bg-indigo-100">
                    <div className="py-12  lg:bg-indigo-100 flex justify-center lg:justify-start lg:px-12">
                        <div className="cursor-pointer bg-indigo-100 flex items-center">

                            <div className="text-2xl text-indigo-800 bg-indigo-100 tracking-wide ml-2 font-semibold">MyEconics</div>
                        </div>
                    </div>
                    <div className="mt-10 px-12 bg-indigo-100 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                        <h2 className="text-center text-4xl text-indigo-900 bg-indigo-100 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in</h2>
                        <div className="mt-12 bg-indigo-100">
                            <form>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">Username</div>
                                    <input className="w-full text-lg py-2 border-b bg-indigo-100 border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Enter your Name" required value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700  tracking-wide">
                                            Password
                                        </div>

                                    </div>
                                    <input className="w-full text-lg py-2 border-b bg-indigo-100 border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password" required value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mt-10">
                                    <button className="bg-indigo-500 text-gray-100 py-6 px-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg" onClick={handleSubmit}>Log In</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex items-center justify-center bg-white-300 flex-1 h-screen    ">
                    <div className="max-w-xs transform duration-200 hover:scale-150 cursor-pointer">

                        <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-human-intelligence-technology-chip-ai-picture-white-png-image_9017935.png" alt="logo" height={1600} width={2000} />
                    </div>
                </div>
            </div>



        </>

    );
}







