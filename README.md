# Open Source CRM built on <a href="http://avoca.io" target="_blank">Avoca Platform</a>
### Features:
* Customers and Contacts
* Opportunities
* Tasks
* Calendar
* Reports and Dashboard
* Internal Chat
* Manage multiple Clients in single source

### System Requirements
Before you begin, make sure you have installed: 
* <a href="https://nodejs.org/" target="_blank">Node.js and NPM</a>
* <a href="https://www.meteor.com/install" target="_blank">Meteor</a>

### Installation
```bash
git clone https://github.com/avoca-platform/CRM.git avoca-crm
```
```bash
cd avoca-crm
```
```bash
meteor npm install
```

### Install develop tool (optional)
* Install Redux dev tool: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
* If not use Redux dev tool:
    * edit: imports/ui/default/store/index.js
    * comment this line: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

### Run
```bash
cd avoca-crm
```
```bash 
meteor
```
* Open web browser and access: <a href="http://localhost:3000/install" target="_blank">http://localhost:3000/install</a>
* Install and enjoy!

### Login
* Access: http://localhost:3000/login
* Account: @username.@domain (Example: admin.up5.vn)
