# News Feed Web Application

Welcome to the News Feed Web Application! This web app is built using Next.js and utilizes Firebase for authentication and data storage. It allows users to browse and interact with a personalized news feed.

![image](https://github.com/pankaj-00/News_App_Triveous/assets/75432626/8fd384f0-5a1e-452d-9c08-b652eff3458a)
 <!-- Add a screenshot of your app here -->

## Features

- User authentication using Firebase Authentication.
- Personalized news feed for each user.
- Data storage using Firebase Firestore.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
2. Navigate to the project directory:
   ```sh
   cd your-repo-name
3. Install dependencies:
   ```sh
   npm install


### Configuration

1. Create a Firebase project and set up Firebase Authentication and Firestore.
2. Obtain your Firebase configuration details, including API keys, project IDs, and other settings.
3. Create a new file `src/firebaseConfig.js` in the project directory with the following content, replacing the placeholders with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

export default firebaseConfig;




