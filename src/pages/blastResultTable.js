export default function BlastResultTable({
  dataList,
  addItemToDownload,
  removeItemFromDownload,
  downloadList,
}) {
    function addValue(event, dataIdx){
        console.log('adding value: ', dataIdx)
        addItemToDownload(dataIdx);
      }
      function removeValue(event, dataIdx){
        console.log('removing value: ', dataIdx)
        removeItemFromDownload(dataIdx);
      }
  return (
    <div className="flex flex-col mt-5">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Serial no.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Accession
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Length
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Bit Score
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Score
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    E Value
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Identity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Positive
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Query From
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Query To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hit From
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hit To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Align Length
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Gaps
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    QSeq
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    HSeq
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Midline
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataList.map((data, dataIdx) => (
                  <tr
                    key={data.geneSymbol}
                    className={dataIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        onClick={(event) =>
                          downloadList.includes(data)
                            ? removeValue(event, dataIdx)
                            : addValue(event, dataIdx)
                        }
                      />
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {dataIdx + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data?.species_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data?.host}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data?.symbol}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data?.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href={data?.publication_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        {data?.publication_link}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
