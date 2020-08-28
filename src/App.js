import React, { useState, useEffect } from 'react';
import Amplify, { API } from 'aws-amplify';
import { listCompanys } from './graphql/queries';
import './App.css';

const myAppConfig = {
   aws_appsync_graphqlEndpoint: 'https://lh6vcoeainabherexkrqv4zimu.appsync-api.us-east-1.amazonaws.com/graphql',
   aws_appsync_region: 'us-east-1',
   aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
   aws_cognito_identity_pool_id: 'us-east-1:71263de0-548e-4e5e-bc7a-4503fd80130a',
   aws_cognito_region: 'us-east-1',
   aws_user_pools_id: 'us-east-1_mfqlwUKri',
   aws_user_pools_web_client_id: '1bngq64qgrifisdm426j207j5m',
   oauth: {},
};

Amplify.configure(myAppConfig);
function App() {
   const [restaurants, setRestaurants] = useState([]);

   const getAllCompanys = async () => {
      try {
         const res = await API.graphql({
            query: listCompanys,
            authMode: 'AWS_IAM',
         });

         setRestaurants(res.data.listCompanys.items);
      } catch (err) {
         console.log('error getting all companies:', err);
      }
   };
   useEffect(() => {
      getAllCompanys();
   }, []);

   return (
      <div className="App">
         {restaurants.map((restaurant) => (
            <p>{restaurant.name}</p>
         ))}
      </div>
   );
}

export default App;
