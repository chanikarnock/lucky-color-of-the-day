import { useEffect, useState } from 'react'
import colorChartData from '../data/db.json'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const ColorTable = ({showMode}: {showMode: string}) => {
    const daysTH = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
    const monthTH = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]

    var dateData = new Date();

    const [author, setAuthor] = useState(0)
    const [focusDate, setfocusDate] = useState(dateData)
    const [isSelectedDate, setIsSelectedDate] = useState(false)

    useEffect(() => {
        if(showMode == "1"){setfocusDate(dateData)}
        if(showMode == "2"){
            dateData.setDate(dateData.getDate() + 1);
            setfocusDate(dateData)
        };
      }, [showMode]);

    function setElmCololor(colorsList: any[]){
        return(<td>{colorsList.join(', \n')}</td>)
    }

    return ( 
        <div className="color-table-show">
            {showMode=="3"? <DatePicker 
            label="ระบุวันที่"
            format="DD - MM - YYYY"
            value={dayjs(new Date())}
            onChange={(newValue) => setfocusDate(newValue!.toDate())}/>
            :<h2 className="day-label">ประจำวัน{daysTH[focusDate.getDay()]}ที่ {focusDate.getDate()} {monthTH[focusDate.getMonth()]}</h2>}                                 
            <br />
            <div className="fortuneteller-label">เลือกนักพยากรณ์🔮</div>
            <br />
            <select onChange={(e)=> {setAuthor(parseInt(e.target.value))}}>
            <br />
            {colorChartData.list.map((data, index) => (
                <option key={index} value={index}>{data.author}</option>
            ))}
            </select>
            <div className="table-container">
                <br />
                <table className="styled-table">               
                <tr><th className="thread-header" colSpan={colorChartData.list[author].days[focusDate.getDay()].buff_palettes.length}>✨ สีที่แนะนำ ✨</th></tr>
                    <tr>
                    {colorChartData.list[author].days[focusDate.getDay()].buff_palettes.map((row, index) => (
                        <th className='thread-header' key={index}>{row.aespect}</th>
                    ))}
                    </tr>
                    <tr>       
                    {colorChartData.list[author].days[focusDate.getDay()].buff_palettes.map((row, index) => (
                        setElmCololor(row.colors)                        
                    ))}
                        
                    </tr>                
                </table>
                
                <table className="omen-table">                
                <tbody>
                    <tr>
                        <th className="thread-header">สีที่ควรเลี่ยง</th>                    
                    </tr>                    
                    <tr>
                    {setElmCololor(colorChartData.list[author].days[focusDate.getDay()].debuff_palettes)}
                    </tr>                    
                </tbody>             
                </table>                
            </div>
            <br />
            <div className="source-container">
            <a href={colorChartData.list[author].source}>ℹ️ ที่มาข้อมูล</a>
            </div>
        </div>       
        
     );
} 
export default ColorTable;