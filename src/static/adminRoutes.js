import CreateProduct from "../router/admin/create-product/CreateProduct";
import ManageProduct from "../router/admin/managa-product/ManageProduct";

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
]