import XLSX from "xlsx";

export const parseExcelToRowObject = (excelFile) => {
  let fileReader = new FileReader();
  fileReader.readAsBinaryString(excelFile);
  fileReader.onload = (event) => {
    let data = event.target.result;
    let workbook = XLSX.read(data, { type: "binary" });
    let rowObject = XLSX.utils.sheet_to_row_object_array(
      workbook.Sheets[workbook.SheetNames[0]]

    );
    console.log(rowObject)
  };

};
