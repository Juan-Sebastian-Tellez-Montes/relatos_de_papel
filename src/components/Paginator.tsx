import React from 'react';
import {PaginatorProps} from "../interfaces/PaginatorProps.ts";

const Paginator: React.FC<PaginatorProps> = ({currentPage, totalPages, onPageChange}) => {
    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePageClick(currentPage - 1)}
                    >
                        Anterior
                    </button>
                </li>
                {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                    <li
                        key={page}
                        className={`page-item ${currentPage === page ? 'active' : ''}`}
                    >
                        <button
                            className="page-link"
                            onClick={() => handlePageClick(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePageClick(currentPage + 1)}
                    >
                        Siguiente
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Paginator;
