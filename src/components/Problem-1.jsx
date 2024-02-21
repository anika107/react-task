import React, { useEffect, useState } from 'react';

const Problem1 = () => {
    const emptyItem = {
        name: "",
        status: ""
    }

    const [show, setShow] = useState('all');
    const [itemList, setItemList] = useState([]);
    const [itemObj, setItemObj] = useState(emptyItem);
    const [showItemList, setShowItemList] = useState([]);

    function compareByStatus (itemA, itemB) {
        const statusOrder = { "active": 1, "completed": 2, "pending": 3, "archive": 4};
        return statusOrder[itemA.status] - statusOrder[itemB.status];
    }

    const updateShowList = (list, show) => {
        const d = list.sort(compareByStatus);
        console.log({ d })
        const newItemList = !["active", "completed"].includes(show) ? list.sort(compareByStatus) : list.filter((item) => item.status === show);
        
        setShowItemList(newItemList)
    }

    const handleClick = (val) => {
        setShow(val);
        updateShowList(itemList, val);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { name, status } = itemObj;
        if (!name || !status)
            return;
        itemList.push(itemObj)
        setItemObj(emptyItem)
        setItemList(itemList)
        updateShowList(itemList, show)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setItemObj((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // useEffect(() => {
    //     const newItemList = show === "all" ? itemList.sort(compareByStatus) : itemList.filter((item) => item.status === show);
    //     setShowItemList(newItemList)
    // }, [itemList, show])

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleOnSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name="name" value={itemObj.name} onChange={handleOnChange} className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name="status" value={itemObj.status} onChange={handleOnChange} className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showItemList.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;