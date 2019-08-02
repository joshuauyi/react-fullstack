import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as mutations from '../store/mutations'

const TaskDetail = ({id, comments, task, isComplete, groups, setTaskCompletion, setTaskName, setTaskGroup}) => (
    <div>
        <div><input type="text" value={task.name} onChange={setTaskName}/></div>
        <div>
            <button onClick={() => setTaskCompletion(id, !isComplete)}>{isComplete ? 'Reopen' : 'Close'}</button>
        </div>
        <div>
            <select name="" id="" onChange={setTaskGroup} value={task.group}>
                {groups.map(group => (
                    <option value={group.id} key={group.id}>{group.name}</option>
                ))}
            </select>
        </div>
        <Link to="/dashboard">
            <button>Done</button>
        </Link>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;

    return {
        id,
        task,
        groups,
        isComplete: task.isComplete
    }
};

const mapDisplatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;

    return {
        setTaskCompletion(id, isComplete) {
            dispatch(mutations.setTaskCompletion(id, isComplete));
        },
        setTaskGroup(e){
            dispatch(mutations.setTaskGroup(id, e.target.value));
        },
        setTaskName(e){
            dispatch(mutations.setTaskName(id, e.target.value));
        }
    }
};

export const ConnectTaskDetail = connect(mapStateToProps, mapDisplatchToProps)(TaskDetail);


