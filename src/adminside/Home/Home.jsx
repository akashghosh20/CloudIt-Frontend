import Card from "./Card.jsx";
import MiniCard from "./MiniCard.jsx";
import ChartCard from "./ChartCard.jsx";

const Home = () => {
    const cartItems = [
        { id: 1, name: 'Total sale', number: 500 },
        { id: 2, name: 'Total client', number: 550 },
        { id: 3, name: 'Package Sold', number: 40 },
        { id: 4, name: 'Total Earning', number: 30 },
        { id: 5, name: 'Current Projects', number: 1500 },
        { id: 6, name: 'Total sale', number: 6415 },
    ];

    const miniCardItems = [
        { id: 1, name: 'Total sale', number: 500 },
        { id: 2, name: 'Total client', number: 550 },
    ];
    return (
        <div className="flex flex-col lg:flex-row">

            <div className="w-full p-5 flex flex-col justify-start gap-5">
                <div className="flex flex-col lg:flex-row justify-between ">
                    {
                        cartItems.map(cartItem => <Card key={cartItem.id} cartItem={cartItem}></Card>)
                    }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 justify-between items-center">
                    <div className="col-span-1 h-full flex flex-col gap-5">
                        {
                            miniCardItems.map(miniCardItem => <MiniCard key={miniCardItem.id} miniCardItem={miniCardItem}></MiniCard>)
                        }
                    </div>

                    <div className="w-full col-span-3 flex mx-auto items-center">
                            <ChartCard></ChartCard>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;