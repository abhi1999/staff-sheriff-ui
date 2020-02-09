import React, { Component } from 'react';
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

interface ITableViewProps{
    data:any[],
    columnDefs:any[]
}

export default class TableView extends Component<ITableViewProps, any> {
    gridApi:any={};
    gridColumnApi:any={};
    public constructor(props:ITableViewProps){
        super(props);
        this.state ={
            modules: AllCommunityModules,
            columnDefs:props.columnDefs,
            defaultColDef: {
                editable: true,
                sortable: true,
                filter: true
              },
              rowData:props.data,
              getRowNodeId: function(data:any) {
                return data.id;
              }
        }
    }
    public render(){
        return (<div style={{ height: "calc(100vh - 25px)" }}>
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            modules={this.state.modules}
            columnDefs={this.props.columnDefs}
            rowData={this.props.data}
            defaultColDef={this.state.defaultColDef}
            animateRows={true}
            getRowNodeId={this.state.getRowNodeId}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
        )
    }
    private  onGridReady =(params:any)=> {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
}

