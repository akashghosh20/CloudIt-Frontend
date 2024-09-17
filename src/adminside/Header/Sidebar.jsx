import ListLink from "./ListLink";

const Sidebar = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/admin/home' },
        { id: 2, name: 'Projects', path: '/admin/projects' },
        { id: 3, name: 'Add Packages', path: '/admin/add-pack' },
        { id: 4, name: 'Package statistics', path: '/admin/pack-stat' },
        { id: 5, name: 'Employee list', path: '/admin/employeelist' },
        { id: 6, name: 'Client List', path: '/admin/client-ls' },
        { id: 7, name: 'Marketing', path: '/admin/marketing' },
        { id: 8, name: 'Acconts', path: '/admin/accounts' },
        { id: 9, name: 'FAQ', path: '/admin/faq' },
        { id: 10, name: 'Sell Coupons', path: '/admin/coupon' },
        { id: 11, name: 'Reviews', path: '/admin/reviews' },
        { id: 12, name: 'Admin List', path: '/admin/admin-ls' },
        { id: 13, name: 'Logout', path: '/admin/logout' },
    ];
    const clsList = 'btn bg-[#003070] text-white border-0 ';

    return (
        <>
            <div className=" bg-[#121445] rounded-xl">
                <ul className="flex flex-col p-3 gap-1  ">
                    {
                        routes.map(route => <ListLink key={route.id} route={route} listClass={clsList} ></ListLink>)
                    }
                </ul>

            </div>
        </>
    );
};

export default Sidebar;