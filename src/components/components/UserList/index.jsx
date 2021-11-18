import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../actions";

const UserList = (props) => {
    
    const {users, deleteUserAction, isAuth} = props;
    
    const mapUser = ({id, emailUser, passwordUser, isAuth}, index) => {
        const del = () => {
            deleteUserAction(id);
        }
        return(
            <li key={id}>
                ID {id} . email: {emailUser} password: {passwordUser}
                <button onClick={del}>Delete user</button>
            </li>
        );
    };

    return <div>
         {isAuth === false ? <div>Load</div> : <ul>{users.map(mapUser)}</ul>}
    </div>
}

const mapStateToProps = (state) => state.userReducerStates;

const mapDispatchToProps = (dispatch) => {
    return{
        deleteUserAction: id => {
            dispatch(deleteUser(id));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);