import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
const originData = [];



originData.push({
    key: 1,
    name: 'Michael',
    Monday: '9:00-5:00',
    Tuesday: '9:00-5:00',
    Wednesday: 'OFF',
    Thursday: 'OFF',
    Friday: '9:00-5:00',
    Saturday: 'OFF',
    Sunday: 'OFF'
},{
    key: 2,
    name: 'Michael',
    Monday: '9:00-5:00',
    Tuesday: '9:00-5:00',
    Wednesday: 'OFF',
    Thursday: 'OFF',
    Friday: '9:00-5:00',
    Saturday: 'OFF',
    Sunday: 'OFF'
},


)

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Table2 = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      Monday: '',
      Tuesday: '',
      Wednesday: '',
      Thursday: '',
      Friday: '',
      Saturday: '',
      Sunday: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  
    const del = (record)=>{
        setEditingKey(record)
        setData('')
    }

    const findId= (data,id)=>{
        data.forEach((item,index,data)=>{
        if(item.id==id){
            data.splice(index, 1)
        }else{
            findId(item.children,id)
        }
    })
        return data;
    }

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: "10%",
      editable: true,
    },
    {
      title: 'Monday',
      dataIndex: 'Monday',
      width: '10%',
      editable: true,
    },
    {
      title: 'Tuesday',
      dataIndex: 'Tuesday',
      width: '10%',
      editable: true,
    },
    {
        title: 'Wednesday',
        dataIndex: 'Wednesday',
        width: '10%',
        editable: true,
      },
      {
        title: 'Thursday',
        dataIndex: 'Thursday',
        width: '10%',
        editable: true,
      },
      {
        title: 'Friday',
        dataIndex: 'Friday',
        width: '10%',
        editable: true,
      },
      {
        title: 'Saturday',
        dataIndex: 'Saturday',
        width: '10%',
        editable: true,
      },
      {
        title: 'Sunday',
        dataIndex: 'Sunday',
        width: '15%',
        editable: true,
      },
    {
      title: '',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
    {
        title: '',
        dataIndex: 'delete',
        key: "delete",
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <a
                href="javascript:;"
                onClick={() => save(record.key)}
                style={{
                  marginRight: 8,
                }}
              >
                Save
              </a>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link disabled={editingKey !== ''} onClick={() => del(record)}>
              Delete
            </Typography.Link>
          );
        },
      },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default Table2