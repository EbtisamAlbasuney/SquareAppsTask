import React from "react";
import { Table } from 'antd';


function TableCom({feilds}) {
 
    const columns = [
      //   {
      //       title: 'Id',
      //       dataIndex: 'id',
      //       key: 'id',
      //       width: 30,
      //       sorter: (a, b) => a.id - b.id,
      //     },
      // {
      //   title: 'Name',
      //   dataIndex: 'name',
      //   key: 'name',
      //   width: 50,
        
      //   filters: [
      //     {
      //       text: 'Joe',
      //       value: 'Joe',
      //     }
      //   ],
      //   onFilter: (value, record) => record.name.indexOf(value) === 0,
      // },
      {
        title: 'Feilds',
        children: [
          {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            width: 30,
            sorter: (a, b) => a.id - b.id,
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 50,
            
            filters: [
              {
                text: 'Joe',
                value: 'Joe',
              },
            ],
            onFilter: (value, record) => record.name.indexOf(value) === 0,
          },
          {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width: 30,
          },
          {
            title: 'Is Mandatory',
            dataIndex: 'is_mandatory',
            key: 'is_mandatory',
            width: 30,
          },
          // {
          //   title: 'Options',
          //   children: [
             
          //       {
          //           title: 'Id',
          //           dataIndex: 'id',
          //           key: 'id',
          //           width: 30,
          //           sorter: (a, b) => a.id - b.id,
          //         },
          //         {
          //           title: 'Name',
          //           dataIndex: 'name',
          //           key: 'name',
          //           width: 50,
                   
          //           filters: [
          //             {
          //               text: 'Joe',
          //               value: 'Joe',
          //             },
                      
          //           ],
          //           onFilter: (value, record) => record.name.indexOf(value) === 0,
          //         },
          //         {
          //           title: 'Has Comment',
          //           dataIndex: 'has comment',
          //           key: 'has comment',
          //           width: 50,
                    
          //         },
          //   ],
          // },
        ],
      },
     
    ];
    
    const data = [];
    for (let i = 0; i < feilds?.length; i++) {
      data.push({
        key: i,
        name: feilds[i]?.name,
        type:feilds[i]?.type,
        is_mandatory:feilds[i]?.is_mandatory?1:0,
        
        id: i + 1,
       
      });
    }
  console.log(feilds)
  return (
    <div>
       <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
    // scroll={{ x: 'calc(200px + 50%)', y: 240 }}
    // style={{width:"70%"}}
  />
    </div>
  );
  }
export default TableCom;
