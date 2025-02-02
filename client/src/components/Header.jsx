import { Search,ShoppingCart,Heart } from 'lucide-react'

const Header = () => {
    return (
        <header className='border-b shadow-xl'>
            <div className='container mx-auto flex justify-between items-center px-3 py-3'>
                <div>
                    <img src="./logo.png" alt="Quick Shop Logo" className='w-44' />
                </div>
                <div className='bg-gray-200 flex items-center p-2 rounded-lg max-w-sm w-full'>
                    <input type="text" placeholder='Search for products..' className='w-full pl-2 bg-transparent outline-none' />
                    <Search className='text-gray-800' />
                </div>
                <div className='flex items-center gap-2'>
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