import { ActionRenderer } from "../utils/StatusRenderer";

export var filterParams = {
  suppressAndOrCondition: true,
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    var dateAsString = new Date(cellValue).toLocaleDateString("en-IN");
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split("/");
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    console.log(cellValue, "ddd", cellDate, "ddd", filterLocalDateAtMidnight);
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
  buttons: ["reset"],
};

export const Months = [
  { id: 1, Name: "January" },
  { id: 2, Name: "February" },
  { id: 3, Name: "March" },
  { id: 4, Name: "April" },
  { id: 5, Name: "May" },
  { id: 6, Name: "June" },
  { id: 7, Name: "July" },
  { id: 8, Name: "August" },
  { id: 9, Name: "September" },
  { id: 10, Name: "October" },
  { id: 11, Name: "November" },
  { id: 12, Name: "December" },
];
export const AgentsColumn = [
  {
    field: "id",
    headerName: "ID",
    resizable: true,
    sortable: true,
  },
  {
    field: "Name",
    headerName: "Name",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "group.Name",
    headerName: "Group",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "Email",
    headerName: "E-mail",
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "Contact_Number_1",
    headerName: "Contact Number 1",
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "Contact_Number_2",
    headerName: "Contact Number 2",
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "Contact_Number_3",
    headerName: "Contact Number 3",
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "assigned_telecaller.username",
    headerName: "Assigned to",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
];
export const DNFcustomersColumn = [
  {
    field: "id",
    headerName: "ID",
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: "NameOfBride",
    headerName: "Name Of Bride",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "Contact_Number_1",
    headerName: "Contact Number 1",
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "NameOfFather",
    headerName: "Name of Father",
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
    // width : "auto"
  },
  {
    field: "NameOfMother",
    headerName: "Name of Mother",
    sortable: true,
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "tele_caller_contact.Name",
    headerName: "Agent",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "Address.locality.Name",
    headerName: "Locality",
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
];
export const customersColumn = [
  {
    field: "id",
    headerName: "ID",
    checkboxSelection: true,
    width: 100,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "NameOfBride",
    headerName: "Name Of Bride",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "MarriageDate",
    headerName: "Marriage Date",
    minWidth: 120,
    resizable: true,
    sortable: true,
    filter: "agDateColumnFilter",
    filterParams: filterParams,
  },
  {
    field: "MarriageMonth",
    headerName: "Marriage Month",
    minWidth: 120,
    resizable: true,
    sortable: true,
    cellRenderer : monthRenderer
    // filter: "agDateColumnFilter",
    // filterParams: filterParams,
  },
  {
    field: "Address.HouseName",
    headerName: "House name",
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
    // width : "auto"
  },
  {
    field: "Address.Landmark",
    headerName: "Landmark",
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
    // width : "auto"
  },
  {
    field: "Address.post_office.Name",
    headerName: "Post office",
    sortable: true,
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
    cellRenderer: fullNameGetter,
  },
  {
    field: "Address.locality.Name",
    headerName: "Locality",
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "tele_caller_contact.Name",
    headerName: "Agent",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
];

export const enquiriesColumn = [
  {
    field: "id",
    headerName: "ID",
    checkboxSelection: true,
    width: 100,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "Name",
    headerName: "Name",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "MarriageDate",
    headerName: "Marriage Date",
    minWidth: 120,
    resizable: true,
    sortable: true,
    filter: "agDateColumnFilter",
    filterParams: filterParams,
  },
  {
    field: "PhoneNumber",
    headerName: "Phone Number",
    minWidth: 120,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "HouseName",
    headerName: "House name",
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
    // width : "auto"
  },
  {
    field: "Landmark",
    headerName: "Landmark",
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
    // width : "auto"
  },
  {
    field: "PostOfficeNumber",
    headerName: "Post office",
    sortable: true,
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
    // cellRenderer: fullNameGetter,
  },
  {
    field: "isWeddingPurchase",
    headerName: "isWeddingPurchase",
    minWidth: 150,
    resizable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
  {
    field: "QtyOfGold",
    headerName: "QtyOfGold",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
];
function monthRenderer(params) {
  switch (params.data.MarriageMonth) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
}
function fullNameGetter(params) {
  let value =
    params.data.Address?.post_office?.Name +
    " " +
    params.data.Address?.post_office?.Pincode;
  if (value != "undefined undefined") {
    return value;
  } else return "No data";
}
export const customerColumnsWithKpCaller = [
  ...customersColumn,
  {
    field: "kp_caller_assigned.username",
    headerName: "KP Caller",
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
      buttons: ["reset"],
    },
  },
];
export function dateConverter(date) {
  return new Date(date);
}
