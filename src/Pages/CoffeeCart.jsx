
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCart = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, photo } = coffee;


    const handleDelete = id => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== id)
                            setCoffees(remaining)
                        }
                    })

            }
        });


    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-4">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="grid grid-cols-2">
                    <div className="pl-4 w-full">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Taste: {taste}</p>
                    </div>
                    <div className="space-y-3 text-end">
                        <p><button className="btn btn-neutral px-6">View</button></p>
                        <Link to={`/updateCoffee/${_id}`}>
                            <p className="mt-3"><button className="btn btn-neutral px-7">Edit</button></p>
                        </Link>
                        <p><button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white px-9">X</button></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCart;