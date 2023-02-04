import { Link } from "react-router-dom";

 function ProductCard({
    brand,
    category,
    price,
    id
})

{
    return (
        <tr data-testid="item" key={id}>
            <td>{id}</td>
         <Link to={`/products/${id}`} data-testid="brand">
            {brand}</Link>   
            <td data-testid="category">
            {category}
            </td>          
            <td data-testid="price"> {price}
            </td>
                    </tr>
    )
}

export default ProductCard