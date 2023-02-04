import React from 'react';

function Pagination({page,totalpage,nextpage,prevpage}) {
    return (
        <div>
            
            <button disabled={page==1?true:false} onClick={prevpage}>Previous</button>
            <p>{page}</p>
            <button disabled={page==totalpage?true:false} onClick={nextpage}>Next</button>
        </div>
    );
}

export default Pagination;