/** Redux  */
import {connect} from 'react-redux';
import { NotificationActions, LookupActions } from './../../actions';
import {IApplicationState} from "./../../reducers"
import {INotifyOptions} from "./../../common";
import TableView from "./TableView";

const mapStateToProps = (state: IApplicationState, ownProps?:any) => ({
    data:state.lookupCollection.jobsites?state.lookupCollection.jobsites:[],
    columnDefs:[{
        headerName: "Name",
        field: "name"
      },{
        headerName: "Id",
        field: "_id"
      },{
        headerName: "Created On",
        field: "createDate"
      },{
        headerName: "Last Update",
        field: "lastUpdate"
      }],
    numberCollection: state.numberCollection,
    ...ownProps
});

  
const mapDispatchToProps = (dispatch: any)  => ({
  NotifyError: (notification:INotifyOptions) => dispatch(NotificationActions.NotifyError(notification)),
  NotifySuccess: (notification:INotifyOptions) => dispatch(NotificationActions.NotifySuccess(notification)),
  onLoginComplete:()=>{
    dispatch(NotificationActions.NotifySuccess({message:'Login Complete.  Loading the data'}));
    dispatch(LookupActions.getAllLookupAction());
    // start initializing the state
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TableView);
