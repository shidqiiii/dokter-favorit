import React, { useEffect } from 'react'
import { BaseApi } from './API/BaseApi';
import { getDepartments } from './Redux/Action/Department_action';
import { connect } from "react-redux";
import Routing from "./Routes/Routing";

function App(props) {
  const handleAllDepartments = async () => {
    const data = await BaseApi.GetAllDepartments();
    if (data.status === "SUCCESS") {
      props.dispatch(getDepartments(data.data));
    }
  };

  useEffect(() => {
    handleAllDepartments();
  }, [])



  return (
    <div className="App">
      <Routing />
    </div>
  );
}

const mapStateToProps = state => ({
  departmentsReducer: state.departmentsReducer
});


export default connect(mapStateToProps)(App);