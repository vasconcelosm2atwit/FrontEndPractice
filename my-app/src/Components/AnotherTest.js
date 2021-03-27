import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

function AnotherTest() {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
        maxColumns: 6,
      });

    return (
        <div style={{ height: 400, width: '100%' }}>
            
            <DataGrid
                columns={[
                    { field: 'Name' , width: 200},
                    { field: 'Monday' ,width: 200}, 
                    { field: 'Tuesday',width: 200 }, 
                    { field: 'Wednesday',width: 200 },
                    { field: 'Thursday',width: 200 },
                    { field: 'Friday',width: 200 },
                    { field: 'Saturday',width: 200 },
                    { field: 'Sunday',width: 200 },
                    { field: 'Test',type: 'time', width: 200 }
                
                
                
                ]}
                rows={[
                {   
                    id: 1,
                    Name : "Michael",
                    Monday: '9:00-2:00',
                    Tuesday: "OFF",
                    Wednesday: "OFF",
                    Thursday: "9:00-2:00",
                    Friday: "OFF",
                    Saturday: "9:00-2:00",
                    Sunday: "OFF",
                    Test: '9:00'
                
                },
            ]}
          />
            
            
            
        </div>
    )
}

export default AnotherTest
