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
          <div className="bg-[#effafa] drop-shadow-xl shadow-black border-black-700 border absolute -top-10 h-[80px] w-[80%] p-4 flex items-center">
            {searchLanguage.map((lang, index) => 
            <>
              <span className="text-base bg-[#e2f9ff] p-4 rounded-lg">{lang}</span>
              <button className="text-sm bg-[#a7cbd4] mr-5 p-4 rounded-r-lg" 
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
        </div>

        <div className="mt-10 flex justify-center items-center flex-col py-4">
          {filteredCompany.map((data, i) => (
            <div
              className="flex justify-start items-center mt-6 w-[80%]  shadow-xl"
              key={i}
            >
              <div id="image" className="p-4">
                <img src={`${data.logo}`} alt="" />
              </div>
              <div id="content" className="flex flex-col text-start">
                <div id="company-name" className="flex">
                  <h2>{data.company}</h2>{" "}
                  <span className="pl-2">{data.new && "NEW"}</span>{" "}
                  <span className="pl-2">{data.featured && "FEATURED"}</span>
                </div>
                <h2 className="font-bold">{data.position}</h2>
              </div>
              <div id="job-filter" className="text-end grow p-4">
                {data.languages.map((lang, i) => (
                  <button
                    key={i}
                    className="pl-6"
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
