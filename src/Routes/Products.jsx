import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../Components/Loader';
import Pagination from '../Components/Pagination';
import ProductsTable from '../Components/ProductsTable';

function Products() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState(0);
    const [sort, setSort] = useState("");
    useEffect(() => {
        if (sort)
            getdata(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&sort=price&order=${sort}`);
        else
            getdata(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12`)
    }, [page, sort])

    async function getdata(url) {
        let req = await fetch(url);
        let res = await req.json();
        setData(res.data);
        setTotalPage(res.totalPages);
    }
    function nextpage() {
        setData([]);
        setPage((prev) => prev + 1);
    }
    function prevpage() {
        setData([])
        setPage((prev) => prev - 1);
    }
    return (
        <div>

            <button onClick={() => setSort("desc")}>High to Low</button>
            <button onClick={() => setSort("asc")}>Low to High</button>
            <>
                {
                    data.length ? <ProductsTable data={data} /> : <Loader />
                }
            </>
            <Pagination page={page} totalpage={totalpage} nextpage={nextpage} prevpage={prevpage} />

        </div>
    );
}
export default Products;