import FileSaver from 'file-saver'
import XLSX from 'xlsx'
const excel =(id='#table',name='data.xlsx')=> {
         var wb = XLSX.utils.table_to_book(document.querySelector(id))
         var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
         try {
             FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), name)
         } catch (e) {
             console.log(e, wbout)
         }
         return wbout
}

export {excel}
