import { Search,ShoppingCart,Heart } from 'lucide-react'

const Header = () => {
    return (
        <header className='text-gray-800'>
            <div className='border-b text-sm border-gray-300 flex justify-between items-center lg:px-10 py-3'>
                <p>Get Up to 50% off new season styles, limited time only</p>
                <div className='flex gap-5 items-center'>
                    <span className='hover:text-red-500 cursor-pointer'>Help Center</span>
                    <span className='hover:text-red-500 cursor-pointer'>Order Tracking</span>
                   
                </div>
            </div>
            <div className='border-b border-gray-300 flex justify-between items-center text-sm lg:px-10 py-3'>
                <div>
                    <img src="./logo.png" alt="Quick Shop Logo" className='w-44' />
                </div>
                <div className='bg-gray-200 flex items-center p-2 rounded-lg max-w-sm w-full'>
                    <input type="text" placeholder='Search for products..' className='w-full pl-2 bg-transparent outline-none' />
                    <Search className='text-gray-800' />
                </div>
                <div className='flex items-center gap-4'>
                    <button>Login</button>
                    <button>Register</button>
                    <button>
                        <Heart size={18}/>
                       
                    </button>
                    <button>
                    <ShoppingCart size={18}/>
                    </button>
                </div>
            </div>


        </header>
    )
}

export default Header