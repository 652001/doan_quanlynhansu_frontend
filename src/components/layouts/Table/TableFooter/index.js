import React, { useEffect } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

function TableFooter({ range, setPage, page, slice }) {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return (
        <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center">
            <Button
                variant="light"
                className="mx-2"
                onClick={() => setPage(page - 1)}
                disabled={page <= 1 ? true : false}
            >
                <i className="mdi mdi-arrow-left"></i>
            </Button>
            <ButtonGroup>
                {range.map((el, index) => {
                    return (
                        <Button
                            key={index}
                            variant={page === el ? 'primary' : 'outline-primary'}
                            onClick={() => setPage(el)}
                        >
                            {el}
                        </Button>
                    );
                })}
            </ButtonGroup>
            <Button
                variant="light"
                className="mx-2"
                onClick={() => setPage(page + 1)}
                disabled={page >= range.length ? true : false}
            >
                <i className="mdi mdi-arrow-right"></i>
            </Button>
        </ButtonToolbar>
    );
}

export default TableFooter;
