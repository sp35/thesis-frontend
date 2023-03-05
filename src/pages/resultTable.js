/* This example requires Tailwind CSS v2.0+ */

  
  export default function ResultTable({dataList}) {
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
                      Plant Species
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gene Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Host Species
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gene Symbol
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Link
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataList.map((data, dataIdx) => (
                    <tr key={data.geneSymbol} className={dataIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data?.species?.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data?.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data?.host}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data?.symbol}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data?.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href={data?.publication_link} target = "_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-900">
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
    )
  }
//   {
//   "id": 5,
//   "species": {
//     "id": 3,
//     "name": "Sorghum bicolor"
//   },
//   "name": "SbMyb60",
//   "host": "Sorghum",
//   "transcription_factor": "MYB Transcription Factor",
//   "symbol": "SbMyb60",
//   "description": "MYB Transcription Factor",
//   "family": "MYB Transcription Factor",
//   "accession_number": "Sobic.004G273800",
//   "function": "Lignin biosynthesis and deposition, cell wall biosynthesis",
//   "pathway_category": "Cell Wall Biosynthesis",
//   "phenotype": "Ectopic lignification in leaf midribs and elevated concentrations of soluble phenolic compounds in biomass",
//   "experimental_method": "Overexpression",
//   "references": "Scully et al, 2016:\nScully et al, 2018",
//   "year": "2016\n2018",
//   "publication_link": "https://pubmed.ncbi.nlm.nih.gov/28944535/\nhttps://pubmed.ncbi.nlm.nih.gov/26712107/",
//   "approved": true
// }