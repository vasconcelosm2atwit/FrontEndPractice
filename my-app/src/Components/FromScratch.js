import React from 'react'
import ReactDOM from 'react-dom'
import Grid from '@material-ui/core/Grid';
import "./FromScratch.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function FromScratch() {

    let ref = React.useRef(null);
    const { useState, useEffect } = React;
    const [ postArray, setPostArray] = useState([]);

    const [value, setValue] = useState(),
        onInput = ({target:{value}}) => setValue(value),
        onFormSubmit = e => {
          e.preventDefault()
          console.log(value)
          setValue()
        }


    let all_data = [
        {
            "id":"1",
            "Name":"Michael",
            "Monday": "10:00 - 2:00",
            "Tuesday":"10:00 - 2:00",
            "Wednesday" : "10:00 - 2:00",
            "Thursday": "10:00 - 2:00",
            "Friday": "10:00 - 2:00",
            "Saturday": "10:00 - 2:00",
            "Sunday": "10:00 - 2:00"
        },
        {
            "id":"2",
            "Name":"Bebe",
            "Monday": "10:00 - 2:00",
            "Tuesday":"10:00 - 2:00",
            "Wednesday" : "10:00 - 2:00",
            "Thursday": "10:00 - 2:00",
            "Friday": "10:00 - 2:00",
            "Saturday": "10:00 - 2:00",
            "Sunday": "10:00 - 2:00"
        },
        {
            "id":"3",
            "Name":"Luna",
            "Monday": "10:00 - 2:00",
            "Tuesday":"10:00 - 2:00",
            "Wednesday" : "10:00 - 2:00",
            "Thursday": "10:00 - 2:00",
            "Friday": "OFF",
            "Saturday": "10:00 - 2:00",
            "Sunday": "OFF",
        },
        {
            "id":"4",
            "Name":"Iva",
            "Monday": "10:00 - 2:00",
            "Tuesday":"10:00 - 2:00",
            "Wednesday" : "10:00 - 2:00",
            "Thursday": "10:00 - 2:00",
            "Friday": "10:00 - 2:00",
            "Saturday": "10:00 - 2:00",
            "Sunday": "10:00 - 2:00"
        }
    ]

    const popOverForm = (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
            
        </Form>

    )


    const popover = (

      <Popover id="popover-basic">
        <Popover.Title as="h3">Update Hours</Popover.Title>
        <Popover.Content>
          <Form onSubmit = {onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="time" placeholder="9:00" 
                onChange={onInput}
                value = {value}
              />
              <Form.Text className="textFeedBack">
                Please Enter Shift Start Time.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>End Time</Form.Label>
              <Form.Control type="text" placeholder="5:00" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit"> 
              Submit
            </Button>
            <Button> Close</Button>
            
          </Form>
        </Popover.Content>
      </Popover>
    );

    useEffect(() => {
        setPostArray(all_data)
      },[]);


    return (
      <div>
        <Grid item sx={12} className="container">
          <div>
            <Table striped bordered hover responsive="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                {postArray.map((item, index) => (
                  <tr>
                    <td>
                      <OverlayTrigger
                        ref={r => (ref = r)}
                        container={ref.current}
                        trigger="click"
                        rootClose
                        placement="auto"
                        overlay={popover}
                        
                      >
                        <Button variant="light">{item.Name}</Button>
                      </OverlayTrigger>
                    </td>
                    <td>
                      <OverlayTrigger
                        trigger="click"
                        placement="right"
                        rootClose
                        overlay={popover}
                      >
                        <Button variant="Secondary">{item.Monday}</Button>
                      </OverlayTrigger>
                    </td>
                    <td>
                      <OverlayTrigger
                        trigger="click"
                        placement="right"
                        rootClose
                        overlay={popover}
                      >
                        <Button variant="Secondary">{item.Tuesday}</Button>
                      </OverlayTrigger>
                    </td>
                    <td>
                      <OverlayTrigger
                        trigger="click"
                        placement="right"
                        rootClose
                        overlay={popover}
                      >
                        <Button variant="Secondary">{item.Wednesday}</Button>
                      </OverlayTrigger>
                    </td>
                    <td>
                      {
                        <OverlayTrigger
                          trigger="click"
                          placement="right"
                          rootClose
                          overlay={popover}
                        >
                          <Button variant="Secondary">{item.Thursday}</Button>
                        </OverlayTrigger>
                      }
                    </td>
                    <td>
                      <OverlayTrigger
                        trigger="click"
                        placement="right"
                        rootClose
                        overlay={popover}
                      >
                        <Button variant="Secondary">{item.Friday}</Button>
                      </OverlayTrigger>
                    </td>
                    <td>
                      <OverlayTrigger
                        trigger="click"
                        placement="right"
                        rootClose
                        overlay={popover}
                      >
                        <Button variant="Secondary">{item.Saturday}</Button>
                      </OverlayTrigger>
                    </td>
                    <td>
                      <OverlayTrigger
                        trigger="click"
                        placement="right"
                        rootClose
                        overlay={popover}
                      >
                        <Button variant="Secondary">{item.Sunday}</Button>
                      </OverlayTrigger>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Grid>
      </div>
    );
}
