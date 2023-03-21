import React,{ useState } from 'react'
import './App.css'
import ColorTable from './ColorTable'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/de';
import dayjs from 'dayjs';

function App() {
  // const daysEN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [dateChoice, setdateChoice] = useState('1')
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
    <div className="App">
      <div className="header">
        <h1>สี มง คล</h1>
        <div>             
        </div>
        <form>
          <label>
            <select onChange={(e)=> setdateChoice(e.target.value)}>
              <option value="1">วันนี้</option>
              <option value="2">พรุ่งนี้</option>
              <option value="3">ตั้งเอง</option>
            </select>
          </label>
        </form>          
      </div>     
      <br></br>
      <ColorTable showMode={dateChoice}/>
      </div>
      </LocalizationProvider>
  );
}

export default App;
