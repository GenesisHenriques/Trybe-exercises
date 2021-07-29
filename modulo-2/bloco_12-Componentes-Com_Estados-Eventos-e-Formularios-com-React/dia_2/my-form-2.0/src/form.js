import React from 'react';
import PersonalData from './personalData';
import LastJobData from './lastJobData';

export default class form extends React.Component {
  render() {
    return(
      <>
      <PersonalData />
      <LastJobData />
      </>
    )
  }
}