import classNames from "classnames";
export default function Table({ headers, data }) {
  return (
    <div className="tw-w-full">
      <div className="tw-mt-8 tw-flex tw-flex-col tw-w-full">
        <div className="tw--my-2 tw--mx-4 tw-overflow-x-auto sm:tw--mx-6 lg:tw--mx-8">
          <div className="tw-inline-block tw-min-w-full tw-py-2 tw-align-middle md:tw-px-6 lg:tw-px-8">
            <div className="tw-overflow-hidden tw-shadow ring-1 tw-ring-black tw-ring-opacity-5 md:tw-rounded-lg">
              <table className="tw-min-w-full tw-divide-y tw-divide-gray-300">
                <thead className="tw-bg-gray-50">
                  <tr>
                    {headers.map((header, i) => (
                      <th
                        key={header}
                        scope="col"
                        className={classNames(
                          "tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-900",
                          "even:tw-text-center"
                        )}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="tw-bg-white">
                  {data.map((row, i) => (
                    <tr
                      key={`datarow${i}`}
                      className={classNames(
                        i % 2 === 0 ? undefined : "bg-gray-50"
                      )}
                    >
                      {row.map((d, k) => (
                        <td
                          key={`dataCell${i}${k}`}
                          className={classNames(
                            "tw-whitespace-nowrap tw-py-4 tw-pl-4 tw-pr-3 tw-text-sm tw-text-gray-900",
                            "even:tw-text-center tw-align-middle"
                          )}
                        >
                          {d}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
