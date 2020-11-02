// import { forEach } from "core-js/fn/array";
import Vue from "vue";
import Vuex from "vuex";
import XLSX from "xlsx";

// import { parseExcelToRowObject } from "../functions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [{
      "Vendor Name": "Total ",
      "Sales$ (000's)": 6309936.85799994,
      "Sales $ Growth%": 0.120240797535977,
      "Basket Growth": 0.013700801760109,
      "Cost$ (000's)": 3924660.88252268,
      "REC vs LY": 0.0846269837933753,
      "Retail Inv$ (000's)": 2728442.26624869,
      "Inv Growth": -0.104366722287704,
      "Aged Inv 180+ (000s)": 200080.584332001,
      "Inv Days": 78.6963462966853,
      "Turn Growth": 0.27253615225729,
      "Shrink $ @Retail (000's)": -164401.7410414,
      "Damage $ @cost (000's)": 17099.38337,
      "DMG Rate": 0.00435690722888878,
      "DMG ALW Rate": 0.00311153613095117,
      "Damage GAP (000's)": 18014.2472402556,
      "OI Disc": 0.0888698664135568,
      "OI % Growth": 0.0805594347272192,
      "Trade Funds (000's)": 181672.0369903,
      "Trade Fund Rate": 0.0462898687117969,
      "Trade Fund Growth": 0.0596696744788139,
      "Net Margin$ (000's)": 2314309.10034037,
      "Net$ Margin Growth": 0.216416810717387,
      "Net Margin Rate": 0.366772148822097,
      "NET GMROI": 1.42395690153347,
      "IMU%": 0.388900214499369,
      "IMU% Growth": 0.013443742024229,
      "DC Service Level": 0.418161554701466,
      "% in Stock": 0.886183840519851,
      "POG UTIL%": 1,
      "Lost Basic Sales": 703871.347061111,
    }],
  },
  mutations: {
    updateStore: (state, payload) => {
      //    console.log({state,payload})
        // console.log(...payload)
      state.data =  [...payload] ;
    },
  },
  actions: {
    addFileToStore: ({ commit }, payload) => {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(payload);
      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = XLSX.read(data, { type: "binary" });
        let rowObject = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[workbook.SheetNames[0]]
        );
            // console.log(rowObject)
          rowObject.forEach(item => {

                Object.keys(item).forEach( objProp => {
                  // if(item["Vendor Name"] === "Candy Land") {console.log(objProp)}

                  // item = each row of/in rowObject
                  // objProp = each property(column name) of one row(rowObject)
                  // console.log(item["Rank"])
                  // if(item["Rank"] === 50) {console.log(objProp)}
                  // console.log(item[objProp].name.includes("↵"))
                  // if(objProp.includes("/\r?\n|\r/g")) {
                      // console.log(objProp)
                  if(objProp != "Vendor Name")  {let newPropName = objProp.replace(/\r?\n|\r/g, " ")
                    // if( item["Rank"] === 50) {console.log({objProp,newPropName,item})}
                    item[newPropName] = item[objProp]

                    delete item[objProp]
                  }

                  // if(item["Rank"] === 50) {console.log(objProp)}

                } )
              })

                // console.log(rowObject)
        commit("updateStore", rowObject);
      };
    },
  },
  getters: {
    getData: (state) => state.data,
  },
});
