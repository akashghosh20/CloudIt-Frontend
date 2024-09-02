import HomeChart from "./HomeChart";

const ChartCard = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    return (
        <div className="flex flex-col gap-5 m-2 p-5 shadow-lg rounded-xl">
            <div className="flex flex-row gap-3 justify-center items-center">

                <label htmlFor="months" className="text-pretty">Month</label>
                <select  id="months" name="months" className="border-4 border-blue-800 rounded-lg">
                    {months.map((month, index) => (
                        <option key={index} value={month}>{month}</option>
                    ))}
                </select>

            </div>

            <div>
                <HomeChart></HomeChart>
            </div>
        </div>

    );
};

export default ChartCard;