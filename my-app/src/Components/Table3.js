import React, { useContext, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Input, Button, Popconfirm, Form, Select } from 'antd';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class Table3 extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
        isInEditMode: false,
     }

    this.columns = [
      {
        title: 'Name',
        dataIndex: 'Name',
        width: '10%',
        editable: true,
        
      },
      {
        title: 'Total',
        dataIndex: 'operator',
        width: '5%',
        render:Total => {
            
            return (
                <div>
                    {Total}
                </div>
            )
        }
      },
      {
        title: 'Monday',
        dataIndex: 'Monday',
        editable: true,
        type: 'number',
        children: 
        [
            {
                title: 'In',
                dataIndex: 'MondayIn',
                editable: true,
                render:(MondayIn)=> { 
                    return (
                        <div onDoubleClick>
                            <input value={MondayIn}></input>
                        </div>
                        
                    )
                }
            },
            {
                title: 'Out',
                dataIndex: 'MondayOut',
                editable: true,
            }
        ]
        
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
        width: '10%',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: 0,
          Name: 'Michael',
          TotalHours: props.total,
          Monday: "9-2",
          MondayIn: "9:00",
          MondayOut: "2:00",
          Tuesday: '9:00 - 2:00 pm',
          Wednesday: 'OFF',
          Thursday: '2:00 - 10:00 pm',
          Friday: 'OFF',
          Saturday: 'OFF',
          Sunday: this.time,
        },
        {
            key: 1,
            Name: 'Michelle',
            Monday: '9:00-2:00 pm',
            Tuesday: '9:00 - 2:00 pm',
            Wednesday: 'OFF',
            Thursday: '2:00 - 10:00 pm',
            Friday: 'OFF',
            Saturday: 'OFF',
            Sunday: 'OFF'
          },
          {
            key: '2',
            Name: 'Edward King 0',
            Monday: '9:00-2:00 pm',
            Tuesday: '9:00 - 2:00 pm',
            Wednesday: 'OFF',
            Thursday: '2:00 - 10:00 pm',
            Friday: 'OFF',
            Saturday: 'OFF',
            Sunday: "OFF"
          },
        
      ],
      count: 3,
    };
  }

  

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      Name: `Edward King ${count}`,
      Monday: '32',
      Tuesday: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };
  handleChildrenEdit(key,value){
      const newData = [...this.state.dataSource];

  }

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

export default Table3