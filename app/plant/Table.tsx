import { useAppSelector } from "@/redux/hook";

const Table = () => {
  const colTitle = [
    {
      name: "日期",
      icon: <></>,
    },
    {
      name: "股票代號",
      icon: (
        <a href="#">
          <svg
            className="w-3 h-3 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
          </svg>
        </a>
      ),
    },
    {
      name: "類型",
      icon: (
        <a href="#">
          <svg
            className="w-3 h-3 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
          </svg>
        </a>
      ),
    },
    {
      name: "參考價",
      icon: (
        <a href="#">
          <svg
            className="w-3 h-3 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
          </svg>
        </a>
      ),
    },
    {
      name: "停損價",
      icon: (
        <a href="#">
          <svg
            className="w-3 h-3 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
          </svg>
        </a>
      ),
    },
    {
      name: "目標價",
      icon: (
        <a href="#">
          <svg
            className="w-3 h-3 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
          </svg>
        </a>
      ),
    },
    {
      name: "筆記",
      icon: <></>,
    },
    {
      name: "",
      icon: <></>,
    },

    // {
    //   name: "",
    //   icon: <></>,
    // },
  ];

  const data = [
    {
      date: "2023-12-12",
      code: "2330",
      type: "存股",
      referencePrice: "600",
      stopPrice: "500",
      targetPrice: "700",
      note: "",
    },
    // {
    //   date: "",
    //   code: "",
    //   type: "",
    //   referencePrice: "",
    //   stopPrice: "",
    //   targetPrice: "",
    //   note: "",
    // },
  ];
  const planData = useAppSelector((state) => state.plan.planData);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg xl:mx-4 mx-0 text-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {colTitle.map((title, index) => {
              return (
                <th scope="col" className="px-6 py-3" key={`title-${index}`}>
                  <div className="flex items-center">
                    {title.name}
                    {title.icon}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {planData.map((data, index) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={`data-${index}`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.date}
                </th>
                <td className="px-6 py-4">{data.code}</td>
                <td className="px-6 py-4">{data.type}</td>
                <td className="px-6 py-4">{data.referencePrice}</td>
                <td className="px-6 py-4">{data.stopPrice}</td>
                <td className="px-6 py-4">{data.targetPrice}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline whitespace-nowrap"
                  >
                    查看
                  </a>
                </td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
          {planData.length === 0 && (
            <tr>
              <td className="text-center py-3" colSpan={7}>
                目前無資料
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
