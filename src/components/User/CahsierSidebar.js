

import React from 'react';
import "./CashierSidebar.css";
import { Link } from 'react-router-dom';
import { ChevronRight, Dashboard, ExpandMore } from '@mui/icons-material';
import { TreeItem, TreeView } from '@mui/x-tree-view';

const CahsierSidebar = () => {
    return (
        <div className='sidebar'>
        <Link to="/" className='flex justify-center items-center gap-2'>
            {/* <img src={logo} alt="Log" /> <p className='text-4xl font-bold text-primary'> Book Share </p> */}
        </Link>
        <Link to="/admin/dashboard">
            <p> <Dashboard /> Dashboard</p>
        </Link>
        <Link>
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}

            >
                <TreeItem nodeId="1" label="Books">
                    <Link to="/admin/product/new">
                        <TreeItem nodeId="2" label="Add Book" />
                    </Link>
                    <Link to="/admin/books">
                        <TreeItem nodeId="3" label="All Books" />
                    </Link>
                </TreeItem>
        
            </TreeView>
        </Link>


    </div>
    );
};

export default CahsierSidebar;