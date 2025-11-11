# FYC Labs NextJS Template 2024

Welcome to the NextJS Firebase CMS Template! This project provides a robust starting point for building dynamic web applications with NextJS and Firebase as the content management system (CMS). Whether you're a developer looking to quickly scaffold a new project or seeking a clean and efficient foundation for a more complex application, this template has you covered.

## Features
- <strong>NextJS Integration</strong>: Enjoy the benefits of server-side rendering, static site generation, and client-side navigation.
- <strong>FireCMS</strong>: Seamlessly manage your content with Firebase Firestore and Firebase Storage via FireCMS.
- <strong>Authentication</strong>: Leverage Firebase Authentication for secure user management.
- <strong>Real-time Data</strong>: Utilize Firebase's real-time database capabilities to keep your application up-to-date.
- <strong>Scalability</strong>: Designed with scalability in mind, ensuring your application can grow with your user base.
- <strong>Extensibility</strong>: Easily extend and customize the template to fit your specific needs.

## Before starting

To get started with the template, follow these steps:

### Set up Firebase Project
https://firebase.google.com/
  1. Make sure that this is under "No Project" if planning to transfer ownership later

### Set up your Firebase.json  
(We will be using the admin.initialize app instead of sa.json) which should look like this,
  ```json
    {
    "hosting": {
      "source": ".",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "frameworksBackend": {
        "region": "us-central1"
      }
    }
  }
  ```

  You will update this file after you clone the repo to get started on the app build.

### Bring the template into your machine

1. Clone this repository to your local machine:
  `git clone https://github.com/your-username/web-template-nextjs-2024`

2. Navigate to the project directory:
  `cd your-repo`

3. Install all dependencies:
  `yarn install`


## Set up Firestore rules

1. Create Firebase Project
2. modify the `.firebaserc` and add your project name
  ```json
  {
    "projects": {
      "default": "web-template-nextjs-2024"
    }
  }
  ```
3. run `yarn install`
4. `firebase experiments:enable webframeworks`
5. `firebase init hosting`
6. Hosting Set Up Answers:
  1. Detected an existing Next.js codebase in the current directory, should we use this? Yes
  2. In which region would you like to host server-side content, if applicable? us-central1 (Iowa)
  3. Set up automatic builds and deploys with GitHub? No
7. `firebase deploy`

## Setting up Firebase.json (We will be using the admin.initialize app instead of sa.json)
1. Go to youre firebase project -> project settings -> your apps
2. Register your app withe the name of the project
3. Skip firebase hosting
4. Go to service accounts -> generate new private key
5. extract your init code variables from firebase to client_email, project_id, private_key to the .env


## Set up FireCMS
1. Login to FireCMS (https://app.firecms.co/)
2. Create new Project
3. pick existing (should list all existing projects)
4. Enable all required apis
5. Enable Firestore (location === east-1)
6. Enable Cloud Storage
7. Enable Authentication


## FireCMS Info
- FireCMS is a collection of templates which creates the following views (products, users, blog posts, pages) 
- Continue from scratch
  - Set up Collection for the page
  - Advance custom fields will pop up and you will fill out the form
- Create your first entity
  - UI pops up for Input data
- To get the content on your page. SAMPLE: 
  - Take a look at your firestore, you should have your page data
  - Inside of getServerSideProps in your page add the fetch for the colleciton
  SAMPLE CODE (Sample.jsx): 
  - Inside of pages/sample/index.js (acts as helper file) ```
      export async function getServerSideProps(){
        const data = (await db.collection('YOUR_COLLECTION').doc('YOUR_DOC_ID').get()).data();
        return {
          props: {
            data
          }
        }
      }
    ```
  - Go into jsx file for the page and add the PROPS ({ data })
  - This should give you the whole firestore docuemnt inside of the page (MAKE SURE TO NULL CHECK THESE VALUES)


## Running the template

1. Run the development server:
  `yarn dev`

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

4. [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

5. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

6. This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

7. To learn more about Next.js, take a look at the following resources:
   - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
   - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
   - [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

8. Deploy your Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Contributing

We welcome contributions! Please read our Contributing Guide to learn how you can help improve the project.

## Current Todos and Opportunities for Contribution
1. Figure out import IDE shortcut
2. Setup Yarn scripts for start and deploy
3. Standardize <head> tags
4. check on static page generation when there are getServerSideProps
5. Create good Example with State and getServerSideProps
6. Finalize Read me


## License
This project is licensed under ________License. See the LICENSE file for details.










First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
