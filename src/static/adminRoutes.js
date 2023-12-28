import CreateProduct from "../router/admin/create-product/CreateProduct";
import ManageProduct from "../router/admin/managa-product/ManageProduct";
import CreateBlog from "../router/admin/create-blog/CreateBlog";
import ManageBlog from "../router/admin/manage-blog/ManageBlog";

export const ADMIN_ROUTES = [
    {
        title: "Create Product",
        link: "create-product",
        element: <CreateProduct/>
    },
    {
        title: "Manage Product",
        link: "manage-product",
        element: <ManageProduct/>
    },
    {
        title: "Create Blog",
        link: "create-blog",
        element: <CreateBlog/>
    },
    {
        title: "Manage Blog",
        link: "manage-blog",
        element: <ManageBlog/>
    },
]