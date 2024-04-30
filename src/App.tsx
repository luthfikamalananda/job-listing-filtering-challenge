import "./App.css";
import dataJob from "../src/utils/data.json";
import { useState } from "react";

function App() {
  const [searchLanguage, setsearchLanguage] = useState<string[]>([]);
  const [filteredCompany, setFilteredCompany] = useState(dataJob);
  

  const handleClick = (lang: string) => {
    const arrSearch: string[] = [...searchLanguage];
    if (arrSearch.includes(lang)) {
      return
    } else {
      arrSearch.push(lang);
      setsearchLanguage(arrSearch);
    }
    handleSortData(arrSearch);
  };

  const handleSortData = (arrSearch:any) => {
      const arrNew = [...dataJob]
      const filtered_data = arrNew.filter(item => 
        arrSearch.every((filterLang: string) => item.languages.includes(filterLang))
      )
      console.log("filtered data",filtered_data);
      
      setFilteredCompany(filtered_data)
  } 

  return (
    <>
      <img src="../images/bg-header-desktop.svg" alt="" />

      <main className="bg-[#effafa]">
        <div className="relative w-full flex flex-col justify-center items-center">
          <div className="bg-white drop-shadow-xl shadow-black border-black-700 border absolute -top-10 h-[80px] w-[80%] p-4 flex items-center justify-between">
            <div>
              {searchLanguage.map((lang, index) => 
              <>
                <span className="text-base bg-[#e2f9ff] p-4 rounded-lg">{lang}</span>
                <button className="text-sm bg-[#a7cbd4] mr-5 p-4 rounded-r-lg hover:bg-[#2c3a3a] hover:text-white" 
                onClick={() => {
                  const arrSearch = [...searchLanguage];
                  arrSearch.splice(index, 1)
                  setsearchLanguage(arrSearch)
                  handleSortData(arrSearch);
                }}
                >X</button>
              </>
              )}
            </div>
            <button className="text-end" onClick={() => {
              setsearchLanguage([])
              handleSortData([])
            }}>Clear</button>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center flex-col py-4">
          {filteredCompany.map((data, i) => (
            <div
              id="card"
              className="flex justify-start items-center mt-6 lg:w-[80%] shadow-xl w-[90%]"
              key={i}
            >
              <div id="image" className="p-4">
                <img src={`${data.logo}`} alt="" />
              </div>

              <div id="content" className="flex flex-col text-start basis-[20%] gap-1">
                <div id="company-name" className="flex">
                  <h2 className="text-[#639d99] font-bold">{data.company}</h2>
                  {data.new && <span className="ml-2 bg-[#58a09f] text-xs font-bold text-white py-1 px-2 rounded-xl">{data.new && "NEW"}</span>}
                  {data.featured && <span className="ml-2 bg-[#2c3a3a] text-xs font-bold text-white py-1 px-2 rounded-xl">{data.featured && "FEATURED"}</span>}
                </div>
                <h2 className="font-bold hover:text-[#639d99] hover:cursor-pointer">{data.position}</h2>
                <div id="company-desc" className="flex justify-between text-[#9ba19f]">
                  <p>{data.postedAt}</p>
                  <p>{data.contract}</p>
                  <p>{data.location}</p>
                </div>
              </div>

              <div id="job-filter" className="text-end grow p-4">
                {data.languages.map((lang, i) => (
                  <button
                    key={i}
                    className="ml-2 p-2 bg-[#d5f9f7] rounded-lg text-[#5aa3a2] font-bold hover:text-white hover:bg-[#5aa3a2]"
                    onClick={(e) => {
                      handleClick(lang)
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
