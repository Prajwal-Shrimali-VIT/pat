import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
    return (
        <>
            <table>
            <thead>
                <td>Name</td>
                <td>Register Number</td>
                <td>CGPA</td>
                <td>Graduation Status</td>
                <td>Placement Status</td>
            </thead>
            <tbody>
                <td>{props.Name}</td>
                <td>{props.RegistrationNumber}</td>
                <td>{props.Cgpa}</td>
                <td>{props.graduationStatus}</td>
                <td>{props.placementStatus}</td>
            </tbody>
            </table>
        </>
    )
}

Table.propTypes = {
    Name: PropTypes.string.isRequired,
    RegistrationNumber: PropTypes.string.isRequired,
    Cgpa: PropTypes.number.isRequired,
    graduationStatus: PropTypes.string.isRequired,
    placementStatus: PropTypes.string.isRequired,
};

Table.defaultProps = {
    Name: 'Hari',
    RegistrationNumber: '22BRSXXXX',
    Cgpa: 8.5,
    graduationStatus: 'Not Graduated',
    placementStatus: 'Not Placed'
}

export default Table;