import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Link className="pr-6" to={'/'}>Home</Link>
            <Link className="pr-6" to={'/addCoffee'}>Add Coffee</Link>
            <Link className="pr-6" to={'/updateCoffee'}>Update Coffee</Link>
            <Link className="pr-6" to={'/singup'}>Sing Up</Link>
            <Link className="pr-6" to={'/users'}>Users</Link>
            <Link to={'/singin'}>Login</Link>
        </div>
    );
};

export default Header;