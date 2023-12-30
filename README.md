1.	UC n°1 : Log in withn the agentguichet account :
  
   - At the backend layer, the agentguichet user has the ROLE_AGENT_GUICHET role.
     
   - Enter the following account: username=[agentguichet, password= agentguichet]:

     ![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/10ddf4d7-0f1e-4f08-90e7-7e6730048c4b)


   - Click on the “Customers Management” menu for customer management:

       ![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/a9e1aa50-cb8a-4532-8c72-cadcbb9269df)

   - You can view the user profile by clicking on the Profile menu:

     ![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/05533574-cdbc-4f34-8fe2-4e981e31f534)

2. UC n°2: connect with the agentguichet2 account
   
- At the backend layer, the agentguichet2 user has the ROLE_AGENT_GUICHET_GET role. This user can only consult customers and accounts.
  
- Enter the following account: username=[agentguichet2, password= agentguichet2]:

  ![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/4caa8a7c-817c-4b72-8f82-a782201d6a84)

- Click on the Profile menu to view the user profile:

  ![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/2101299c-7734-4162-85bb-0a3cb21c1282)

- Click on the “Customers management” menu and notice that the user can only consult customers:

  ![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/6435b85a-282e-4812-a65a-6002704312be)

3. UC n°3: log in with the customer account
   
- At the backend layer, the client user has the ROLE_CLIENT role. This user can only consult his account, his data, his transactions and make transfers.
  
- Enter the following account: username=[client, password= client]:

  ![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/f4a03fda-6b84-4621-81d3-27e384321c35)

- Click on the Profile menu to view your profile:

  ![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/2c2590e1-75a4-468d-8548-6f17f5471d35)

 - You notice that the application does not display the menus concerning the "agent guichet".
   
- If the customer tries, for example, to access the link http://localhost:3000/manage_customers, the application displays the following message:

![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/568307fa-b51c-4e2e-86b4-42aab73bac95)

4. UC n°3: log in with the admin account
   
- At the backend layer, the admin user has the following roles: ROLE_AGENT_GUICHET and ROLE_CLIENT. This user has all the authorizations.
  
- Enter the following account: username=[admin, password= admin]:

![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/d0c8bc4a-460c-4e52-a61a-69d827b44e57)

- Click on the Profile menu to view your profile:

  ![image](https://github.com/abbouformations/react-crud-example-axios-jwt/assets/135717843/7303f16e-3a44-4a16-b5d2-c8f81dd5ab0f)

- Then click on the other menus to test the services.






       

