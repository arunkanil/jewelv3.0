import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { Apollo, gql } from "apollo-angular";

const AgentsQuery = gql`
  query ($tele_caller_id: String, $condition: String) {
    teleCallerContacts(
      sort: $condition
      limit: 200
      where: { assigned_telecaller: $tele_caller_id }
    ) {
      id
      Name
      Contact_Number_1
      Contact_Number_2
      Contact_Number_3
      Place
      group {
        Name
        Description
      }
      Email
      assigned_telecaller {
        username
        email
      }
      telecaller_remarks {
        RemarksText
        CallHistory {
          event_date_time
          users_permissions_user {
            username
          }
        }
      }
      last_called_date_time
    }
  }
`;
const AgentsSearchQuery = gql`
# Write your query or mutation here
query($Name: String, $condition: String) {
  teleCallerContacts(
    sort: $condition
    where: {
      _or: [
        { Name_contains: $Name }
        { Contact_Number_1_contains: $Name }
        { Contact_Number_2_contains: $Name }
        { Contact_Number_3_contains: $Name }
      ]
    }
  ) {
    id
    Name
    Contact_Number_1
    Contact_Number_2
    Contact_Number_3
    Place
    group {
      Name
      Description
    }
    Email
    assigned_telecaller {
      username
      email
    }
    telecaller_remarks {
      RemarksText
      CallHistory {
        event_date_time
        users_permissions_user {
          username
        }
      }
    }
    last_called_date_time
  }
}
`;
const AgentsSingleQuery = gql`
  query ($id: ID!) {
    teleCallerContact(id: $id) {
      id
      Name
      Email
      Place
      group {
        Name
        Description
      }
      Contact_Number_1
      Contact_Number_2
      Contact_Number_3
      telecaller_remarks {
        RemarksText
        CallHistory {
          event_date_time
          users_permissions_user {
            username
          }
        }
      }
    }
  }
`;
const AddAgentMutation = gql`
  mutation (
    $name: String!
    $group: ID!
    $email: String!
    $phone1: Long!
    $phone2: Long!
    $phone3: Long!
  ) {
    createTeleCallerContact(
      input: {
        data: {
          Name: $name
          Email: $email
          Contact_Number_1: $phone1
          Contact_Number_2: $phone2
          Contact_Number_3: $phone3
          group: $group
        }
      }
    ) {
      teleCallerContact {
        id
        Name
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        group {
          Name
          Description
        }
        Email
      }
    }
  }
`;
const GroupsQuery = gql`
  query GroupsQuery {
    groups {
      id
      Name
      Description
    }
  }
`;
const localitiesQuery = gql`
  query {
    localities {
      id
      Name
      post_office {
        Name
        id
        Pincode
      }
    }
  }
`;
const postOfficesQuery = gql`
  query {
    postOffices {
      id
      Name
      Pincode
      district {
        Name
      }
    }
  }
`;
const UpdateAgentMutation = gql`
  mutation (
    $id: ID!
    $name: String!
    $group: ID!
    $email: String!
    $Place: String!
    $phone1: Long!
    $phone2: Long!
    $phone3: Long!
  ) {
    updateTeleCallerContact(
      input: {
        where: { id: $id }
        data: {
          Name: $name
          Email: $email
          Contact_Number_1: $phone1
          Contact_Number_2: $phone2
          Contact_Number_3: $phone3
          group: $group
          Place : $Place
        }
      }
    ) {
      teleCallerContact {
        id
        Name
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        Place
        group {
          Name
          Description
        }
        Email
      }
    }
  }
`;
const DeleteAgentMutation = gql`
  mutation ($id: ID!) {
    deleteTeleCallerContact(input: { where: { id: $id } }) {
      teleCallerContact {
        id
        Name
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        group {
          Name
          Description
        }
        Email
      }
    }
  }
`;
const AddCommentMutation = gql`
  mutation ($id: ID!, $remarks: String!, $date: DateTime!) {
    updateTeleCallerContact(
      input: {
        where: { id: $id }
        data: {
          telecaller_remarks: {
            RemarksText: $remarks
            CallHistory: { event_date_time: $date }
          }
          last_called_date_time: $date
        }
      }
    ) {
      teleCallerContact {
        id
        Name
        Email
        group {
          Name
          Description
        }
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        telecaller_remarks {
          RemarksText
          CallHistory {
            event_date_time
            users_permissions_user {
              username
            }
          }
        }
        last_called_date_time
      }
    }
  }
`;
const CustomersQuery = gql`
  query {
    customers {
      id
      is_verified
      NameOfBride
      NameOfFather
      NameOfMother
      MarriageDate
      Contact_Number_1
      Contact_Number_2
      MarriageMonth
      kp_caller_assigned {
        email
        username
      }
      tele_caller_contact {
        Name
        id
      }
      created_at
      FieldReport {
        id
        FinancialBackground
        QtyOfGold
        PreferredWeddingSet
        PlanningForReplacementAfterWedding
        OldGoldExchangeQty
        NoCostEmiRequired
        EmiTenure
        EmiIntervals
        TokenAdvance
        RateAdvance
        EnquiriesFromOthers
        AdvancePaidToOtherJewellery
        NumberOfNewMarriageAddress
      }
      Address {
        id
        HouseName
        Landmark
        locality {
          Name
        }
        post_office {
          Name
          Pincode
          district {
            Name
          }
        }
        GeoLocation {
          Latitude
          Longitude
          GoogleMapURL
          GoogleMapPlusCode
        }
      }
    }
  }
`;
const CustomersFilterQuery = gql`
  query (
    $is_verified: Boolean
    $kp_caller_assigned_null: Boolean
    $kp_id: ID
    $added_by_user: ID
    $MarriageMonth_null: Boolean
    $MarriageDate_null: Boolean
    $MarriageMonthOR_null: Boolean
    $MarriageDateOR_null: Boolean
    $MarriageDate_gte: String
    $MarriageDate_lte: String
    $condition: String
  ) {
    customers(
      sort: $condition
      where: {
        is_verified: $is_verified
        kp_caller_assigned_null: $kp_caller_assigned_null
        kp_caller_assigned: $kp_id
        MarriageDate_null: $MarriageDate_null
        MarriageMonth_null: $MarriageMonth_null
        added_by_user: $added_by_user
        MarriageDate_gte: $MarriageDate_gte
        MarriageDate_lte: $MarriageDate_lte
        _or: [
          { MarriageDate_null: $MarriageDateOR_null }
          { MarriageMonth_null: $MarriageMonthOR_null }
        ]
      }
    ) {
      id
      is_verified
      NameOfBride
      NameOfFather
      NameOfMother
      MarriageDate
      Contact_Number_1
      Contact_Number_2
      MarriageMonth
      kp_caller_assigned {
        email
        username
      }
      added_by_user {
        id
        username
      }
      tele_caller_contact {
        Name
        id
      }
      created_at
      FieldReport {
        id
        FinancialBackground
        QtyOfGold
        PreferredWeddingSet
        PlanningForReplacementAfterWedding
        OldGoldExchangeQty
        NoCostEmiRequired
        EmiTenure
        EmiIntervals
        TokenAdvance
        RateAdvance
        EnquiriesFromOthers
        AdvancePaidToOtherJewellery
        NumberOfNewMarriageAddress
      }
      Address {
        id
        HouseName
        Landmark
        locality {
          Name
        }
        post_office {
          Name
          Pincode
          district {
            Name
          }
        }
        GeoLocation {
          Latitude
          Longitude
          GoogleMapURL
          GoogleMapPlusCode
        }
      }
    }
  }
`;
const CustomerSingleQuery = gql`
  query ($id: ID!) {
    customer(id: $id) {
      id
      is_verified
      NameOfBride
      NameOfFather
      NameOfMother
      Contact_Number_1
      Contact_Number_2
      MarriageDate
      MarriageMonth
      tele_caller_contact {
        Name
        id
      }
      kp_caller_assigned {
        email
        username
      }
      created_at
      FieldReport {
        id
        FinancialBackground
        QtyOfGold
        PreferredWeddingSet
        PlanningForReplacementAfterWedding
        OldGoldExchangeQty
        NoCostEmiRequired
        EmiTenure
        EmiIntervals
        TokenAdvance
        RateAdvance
        EnquiriesFromOthers
        AdvancePaidToOtherJewellery
        NumberOfNewMarriageAddress
        images {
          name
          url
          previewUrl
        }
        location {
          Latitude
          Longitude
          GoogleMapURL
          GoogleMapPlusCode
        }
      }
      Address {
        id
        HouseName
        Landmark
        locality {
          Name
        }
        post_office {
          Name
          Pincode
          district {
            Name
          }
        }
        GeoLocation {
          Latitude
          Longitude
          GoogleMapURL
          GoogleMapPlusCode
        }
      }
      isSaleClosed
      CustomerStatus
      sale_closed_by {
        id
        email
        username
      }
      sale_closed_date
      sale_remarks
      TelecallerRemarks {
        RemarksText
        CallHistory {
          event_date_time
          users_permissions_user {
            username
            email
          }
        }
      }
    }
  }
`;
const AddCustomerMutation = gql`
  mutation (
    $NameOfBride: String!
    $NameOfFather: String!
    $NameOfMother: String!
    $Contact_Number_1: String!
    $Contact_Number_2: String!
    $MarriageDate: Date!
    $MarriageMonth: Int!
    $tele_caller_contact: ID!
    $HouseName: String!
    $Landmark: String!
    $locality: ID!
    $added_by_user: ID!
    $post_office: ID
    $Latitude: Float
    $Longitude: Float
    $GoogleMapURL: String
    $GoogleMapPlusCode: String
  ) {
    createCustomer(
      input: {
        data: {
          NameOfBride: $NameOfBride
          NameOfFather: $NameOfFather
          NameOfMother: $NameOfMother
          MarriageDate: $MarriageDate
          MarriageMonth: $MarriageMonth
          Contact_Number_1: $Contact_Number_1
          Contact_Number_2: $Contact_Number_2
          tele_caller_contact: $tele_caller_contact
          added_by_user: $added_by_user
          Address: {
            HouseName: $HouseName
            Landmark: $Landmark
            locality: $locality
            post_office: $post_office
            GeoLocation: {
              Latitude: $Latitude
              Longitude: $Longitude
              GoogleMapURL: $GoogleMapURL
              GoogleMapPlusCode: $GoogleMapPlusCode
            }
          }
        }
      }
    ) {
      customer {
        id
        NameOfBride
        NameOfFather
        NameOfMother
        MarriageDate
        MarriageMonth
        Contact_Number_1
        Contact_Number_2
        tele_caller_contact {
          Name
          id
        }
        created_at
        Address {
          id
          HouseName
          Landmark
          locality {
            Name
          }
          post_office {
            Name
            Pincode
            district {
              Name
            }
          }
          GeoLocation {
            Latitude
            Longitude
            GoogleMapURL
          }
        }
      }
    }
  }
`;
const UpdateCustomerMutation = gql`
  mutation (
    $id: ID!
    $sale_remarks: String!
    $sale_closed_date: DateTime!
    $CustomerStatus: String
    $isSaleClosed: Boolean
    $sale_closed_by: ID
  ) {
    updateCustomer(
      input: {
        where: { id: $id }
        data: {
          CustomerStatus: $CustomerStatus
          isSaleClosed: $isSaleClosed
          sale_remarks: $sale_remarks
          sale_closed_date: $sale_closed_date
          sale_closed_by: $sale_closed_by
          kp_caller_assigned: null
        }
      }
    ) {
      customer {
        id
        NameOfBride
        NameOfFather
      }
    }
  }
`;
const AddCustomerCommentMutation = gql`
  mutation (
    $id: ID!
    $remarks: String!
    $date: DateTime!
    $is_verified: Boolean
  ) {
    updateCustomer(
      input: {
        where: { id: $id }
        data: {
          TelecallerRemarks: {
            RemarksText: $remarks
            CallHistory: { event_date_time: $date }
          }
          last_called_time: $date
          is_verified: $is_verified
        }
      }
    ) {
      customer {
        id
        is_verified
        NameOfBride
        NameOfFather
        NameOfMother
        MarriageDate
        MarriageMonth
        last_called_time
        tele_caller_contact {
          Name
          id
        }
        created_at
        Address {
          id
          HouseName
          Landmark
          locality {
            Name
          }
          post_office {
            Name
            Pincode
            district {
              Name
            }
          }
          GeoLocation {
            Latitude
            Longitude
            GoogleMapURL
          }
        }
      }
    }
  }
`;
const SetKpCallerMutation = gql`
  mutation ($id: ID!, $cust_id: [ID!]!) {
    updateUser(input: { where: { id: $id }, data: { kp_customer: $cust_id } }) {
      user {
        id
        kp_customer {
          id
          NameOfBride
          NameOfFather
        }
      }
    }
  }
`;
const SetTeleCallerMutation = gql`
  mutation ($id: ID!, $cust_id: [ID!]!) {
    updateUser(
      input: { where: { id: $id }, data: { tele_caller_contacts: $cust_id } }
    ) {
      user {
        id
        tele_caller_contacts {
          id
          Name
          Contact_Number_1
          Email
        }
      }
    }
  }
`;
const SetFieldAgentMutation = gql`
  mutation ($id: ID!, $cust_id: [ID!]!) {
    updateUser(input: { where: { id: $id }, data: { customers: $cust_id } }) {
      user {
        id
        customers {
          NameOfBride
          id
          NameOfFather
          MarriageDate
        }
      }
    }
  }
`;
const UsersQuery = gql`
  query ($type: String!) {
    users(where: { UserType: $type }) {
      id
      username
      email
      role {
        id
        name
        type
      }
      UserType
    }
  }
`;
const AddCustomerEnquiry = gql`
  mutation (
    $Name: String!
    $PhoneNumber: String!
    $isWeddingPurchase: Boolean!
    $MarriageDate: Date!
    $QtyOfGold: Int!
    $OptNoCostEMI: Boolean!
    $HouseName: String!
    $Landmark: String!
    $PostOfficeNumber: Long!
  ) {
    createCustomerEnquiry(
      input: {
        data: {
          Name: $Name
          PhoneNumber: $PhoneNumber
          isWeddingPurchase: $isWeddingPurchase
          MarriageDate: $MarriageDate
          QtyOfGold: $QtyOfGold
          OptNoCostEMI: $OptNoCostEMI
          HouseName: $HouseName
          Landmark: $Landmark
          PostOfficeNumber: $PostOfficeNumber
        }
      }
    ) {
      customerEnquiry {
        id
        Name
        PhoneNumber
        isWeddingPurchase
        MarriageDate
        QtyOfGold
        OptNoCostEMI
        HouseName
        Landmark
        PostOfficeNumber
      }
    }
  }
`;
const EnquiriesQuery = gql`
  query {
    customerEnquiries {
      id
      Name
      PhoneNumber
      HouseName
      Landmark
      PostOfficeNumber
      isWeddingPurchase
      MarriageDate
      QtyOfGold
      OptNoCostEMI
    }
  }
`;
const SingleEnquiryQuery = gql`
  query ($id: ID!) {
    customerEnquiry(id: $id) {
      id
      Name
      PhoneNumber
      HouseName
      Landmark
      PostOfficeNumber
      isWeddingPurchase
      MarriageDate
      QtyOfGold
      OptNoCostEMI
    }
  }
`;
const deleteEnquiry = gql`
  mutation ($id: ID!) {
    deleteCustomerEnquiry(input: { where: { id: $id } }) {
      customerEnquiry {
        Name
        PhoneNumber
        HouseName
        Landmark
      }
    }
  }
`;
@Injectable({
  providedIn: "root",
})
export class DataService {
  baseURL = environment.apiUrl;
  params: URLSearchParams = new URLSearchParams();

  constructor(private http: HttpClient, private apollo: Apollo) {}

  Login(data): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
    };
    return this.http.post(this.baseURL + `auth/login/`, data, httpOptions1);
  }
  getAgents() {
    return this.apollo.watchQuery({
      query: AgentsQuery,
      fetchPolicy: "no-cache",
    });
  }
  getEnquiries() {
    return this.apollo.watchQuery({
      query: EnquiriesQuery,
      fetchPolicy: "no-cache",
    });
  }
  getSingleEnquiry(id) {
    return this.apollo.watchQuery({
      query: SingleEnquiryQuery,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
      },
    });
  }
  getfilteredAgents(id, condition) {
    return this.apollo.watchQuery({
      query: AgentsQuery,
      fetchPolicy: "no-cache",
      variables: {
        tele_caller_id: id,
        condition: condition,
      },
    });
  }
  getAgentsSearch(searchText) {
    return this.apollo.watchQuery({
      query: AgentsSearchQuery,
      fetchPolicy: "no-cache",
      variables: {
        Name: searchText,
      },
    });
  }
  getSingleAgent(id) {
    return this.apollo.watchQuery({
      query: AgentsSingleQuery,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
      },
    });
  }
  AddAgent(agent) {
    return this.apollo.mutate({
      mutation: AddAgentMutation,
      variables: {
        name: agent.name,
        email: agent.email,
        group: agent.group,
        phone1: agent.phone1,
        phone2: agent.phone2,
        phone3: agent.phone3,
      },
      errorPolicy: "all",
    });
  }
  EditAgent(id, agent) {
    return this.apollo.mutate({
      mutation: UpdateAgentMutation,
      variables: {
        id: id,
        name: agent.name,
        email: agent.email,
        group: agent.group,
        Place: agent.Place,
        phone1: agent.phone1,
        phone2: agent.phone2,
        phone3: agent.phone3,
      },
      errorPolicy: "all",
    });
  }
  AddComment(id, agent) {
    let date = new Date();
    console.log(date.toISOString());
    return this.apollo.mutate({
      mutation: AddCommentMutation,
      variables: {
        id: id,
        remarks: localStorage.getItem("username") + ": " + agent.RemarksText,
        date: new Date().toISOString(),
      },
      errorPolicy: "all",
    });
  }
  DeleteAgent(id) {
    return this.apollo.mutate({
      mutation: DeleteAgentMutation,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  getGroups() {
    return this.apollo.watchQuery({
      query: GroupsQuery,
      fetchPolicy: "no-cache",
    });
  }
  getLocalities() {
    return this.apollo.watchQuery({
      query: localitiesQuery,
      fetchPolicy: "no-cache",
    });
  }
  getPostOffices() {
    return this.apollo.watchQuery({
      query: postOfficesQuery,
      fetchPolicy: "no-cache",
    });
  }
  getCustomers() {
    return this.apollo.watchQuery({
      query: CustomersQuery,
      fetchPolicy: "no-cache",
    });
  }
  getUsers(type) {
    return this.apollo.watchQuery({
      query: UsersQuery,
      fetchPolicy: "no-cache",
      variables: { type: type },
    });
  }
  getCustomersFilter(verified) {
    return this.apollo.watchQuery({
      query: CustomersFilterQuery,
      fetchPolicy: "no-cache",
      variables: verified,
    });
  }
  getSingleCustomer(id) {
    return this.apollo.watchQuery({
      query: CustomerSingleQuery,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
      },
    });
  }
  Addcustomer(Customer) {
    return this.apollo.mutate({
      mutation: AddCustomerMutation,
      variables: {
        NameOfBride: Customer.NameOfBride,
        NameOfFather: Customer.NameOfFather,
        NameOfMother: Customer.NameOfMother,
        MarriageDate: Customer.MarriageDate,
        MarriageMonth: parseInt(Customer.MarriageMonth),
        tele_caller_contact: Customer.tele_caller_contact,
        HouseName: Customer.HouseName,
        Contact_Number_1: Customer.Contact_Number_1,
        Contact_Number_2: Customer.Contact_Number_2,
        Landmark: Customer.Landmark,
        locality: Customer.locality,
        post_office: Customer.Post_office,
        added_by_user: localStorage.getItem("uid"),
        // Latitude: parseFloat(Customer.Latitude),
        // Longitude: parseFloat(Customer.Longitude),
        GoogleMapURL: Customer.GoogleMapURL,
        // GoogleMapPlusCode: Customer.GoogleMapPlusCode,
      },
      errorPolicy: "all",
    });
  }
  Updatecustomer(id,Customer) {
    return this.apollo.mutate({
      mutation: UpdateCustomerMutation,
      variables: {
        id: id,
        sale_remarks: Customer.sale_remarks,
        sale_closed_date: Customer.sale_closed_date,
        CustomerStatus: Customer.CustomerStatus,
        isSaleClosed: Customer.isSaleClosed,
        sale_closed_by: Customer.sale_closed_by,
      },
      errorPolicy: "all",
    });
  }
  AddCustomerComment(id, agent) {
    return this.apollo.mutate({
      mutation: AddCustomerCommentMutation,
      variables: {
        id: id,
        remarks: localStorage.getItem("username") + ": " + agent.RemarksText,
        date: new Date().toISOString(),
        is_verified: agent.is_verified,
      },
      errorPolicy: "all",
    });
  }
  SetKpCaller(id, cust_id) {
    return this.apollo.mutate({
      mutation: SetKpCallerMutation,
      variables: {
        id: id,
        cust_id: cust_id,
      },
      errorPolicy: "all",
    });
  }
  SetFieldAgent(id, cust_id) {
    return this.apollo.mutate({
      mutation: SetFieldAgentMutation,
      variables: {
        id: id,
        cust_id: cust_id,
      },
      errorPolicy: "all",
    });
  }
  SetTeleCaller(id, cust_id) {
    return this.apollo.mutate({
      mutation: SetTeleCallerMutation,
      variables: {
        id: id,
        cust_id: cust_id,
      },
      errorPolicy: "all",
    });
  }
  AddEnquiry(enquiry) {
    let date = new Date();
    console.log(date.toISOString());
    return this.apollo.use("second").mutate({
      mutation: AddCustomerEnquiry,
      variables: {
        Name: enquiry.name,
        PhoneNumber: enquiry.phone,
        isWeddingPurchase: enquiry.marriage_purchase == "true" ? true : false,
        MarriageDate: enquiry.date,
        QtyOfGold: parseInt(enquiry.pawan),
        OptNoCostEMI: enquiry.emi == "true" ? true : false,
        HouseName: enquiry.HouseName,
        Landmark: enquiry.Landmark,
        PostOfficeNumber: enquiry.PostOfficeNumber,
      },
      errorPolicy: "all",
    });
  }
  DeleteEnquiry(id) {
    return this.apollo.mutate({
      mutation: deleteEnquiry,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
}
