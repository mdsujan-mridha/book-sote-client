import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import { TreeItem, TreeView } from '@mui/x-tree-view';
import { ChevronRight, Dashboard, ExpandMore } from '@mui/icons-material';

import "./Sidebar.css";
const Sidebar = () => {
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
                    <TreeItem nodeId="5" label="Request Book">

                        <Link to="/admin/allrequestbook">
                            <TreeItem nodeId="6" label="All Request" />
                        </Link>
                    </TreeItem>
                    <TreeItem nodeId="55" label="Exchange Books">

                        <Link to="/admin/exchangebook">
                            <TreeItem nodeId="56" label="All Exchange" />
                        </Link>
                    </TreeItem>

                    <TreeItem nodeId="25" label="User">
                        <Link to="/admin/users">
                            <TreeItem nodeId="23" label="Users" />
                        </Link>
                    </TreeItem>
                    <TreeItem nodeId="35" label="Orders">
                        <Link to="/admin/orders">
                            <TreeItem nodeId="36" label="All Orders" />
                        </Link>
                    </TreeItem>
                    <TreeItem nodeId="15" label="Blog">
                        <TreeItem nodeId="13" label="Add Blog" />
                        <TreeItem nodeId="16" label="All Blog" />
                    </TreeItem>
                </TreeView>
            </Link>


        </div>
    );
};

export default Sidebar;