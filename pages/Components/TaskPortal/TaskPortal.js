import React from 'react';
function taskPortal() {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D3D3D3",
      }}
    >
      <div style={{ width: "65%" }}>
        <div style={{marginBottom: "90px"}}>
          <h1>FarmWorks</h1>
          <h3>Problem</h3>
          <h5>
            Farm in the Dell of the Red River River Valley was tracking their
            tasks around the farm on a whiteboard. This led to some issues of
            knowing who was responsible for what and what kind of tasks could be
            done during a specific day. This app is designed to streamline their
            process of task management. Helping to delegate tasks and keep track
            of what tasks are going on and who is doing them.
          </h5>
          <h3>Description</h3>
          <h5>Duration: 2.5 weeks (As of April 5th, 2023)</h5>
          <h5>
            Welcome to FarmWorks! This app is designed for Farm in the Dell of
            the Red River Valley to help them manage their tasks around the
            farm. It will be used by full time staff and lead volunteers.
            Typical volunteers on the farm will not be using the app but will be
            assigned to tasks from the aforementioned staff. Also the tasks that
            will be entered into the app are typically going to be larger
            projects and not as much medial farm work tasks.
          </h5>
          <h5>
            This application has two different views. Admins are the executive
            manager and the garden manager of the farm and will have more
            responsibilities and functionality within the app. Base users are
            lead volunteers and other full time staff that are not at admin
            status.
          </h5>
          <h5>
            Users must first be approved by an administrator to access the app.
            They are able to select from a master list of tasks that have been
            created and approved. Once a task has been taken from the list it
            will be added to the users list. The user with that task has now
            specified that they will work on it. If the work was completed they
            can mark the task as complete. If the work is incomplete they can
            mark it as such and it will be returned to the master list of tasks.
            Users can also create tasks, these tasks must be approved by an
            administrator before they are made available.
          </h5>
          <h5>
            Administrators have many more features on top of what a normal user
            has. Admin privileges grant a user the ability to approve tasks as
            well as user accounts. Admins also have a whole page dedicated to
            managing users, this is where the user requests are accepted or
            denied as well as where you can view the information for all of the
            current users on the app. From here users can be promoted to Admin
            status or deleted as a whole. At this point deleting a user will
            delete all tasks they have created or have been assigned to. Admins
            also have the ability to edit tasks, changing any information they
            need and they can also assign tasks to other users. When a task is
            assigned to a user they will be sent an email. Along with this,
            whenever a user submits a task that needs to be approved the admins
            will be sent an email. Lastly, the admins can also delete and add
            new tags and locations. These are pieces of information that can be
            used when created a task to categorize them.
          </h5>
          <h5>
            All users regardless of admin status have access to a profile page
            where they can edit any of their personal information, change their
            password and adjust their email preferences. Users do have the
            option to opt out of emails.
          </h5>
          <h3>Prerequisites</h3>

          <h5>Node.js</h5>
          <h5>Express</h5>

          <h5>Redux</h5>

          <h5>PostgreSQL (version 14 used in this project)</h5>

          <h5>
            App to run your database (Postico was used for this project locally)
          </h5>

          <h2>Installation</h2>
          <h3>Install Node Packages</h3>
          <h5>Run npm install</h5>
          <h5>Run the command npm server and the server will start</h5>
          <h5>
            Run the command npm run client and the client will boot up and bring
            you to the page
          </h5>
          <h3>Create Database</h3>
          <h5>Create database in management software named fitd_db</h5>
          <h5>Run SQL commands in the database.sql file</h5>
          <h2>Usage</h2>
          <h3>Login/Register</h3>
          <h5>
            Users can register on the landing page with their first and last
            name, phone number,email address, and a password
          </h5>
          <h5>
            Existing users can log in by using their email address and password
          </h5>
          <h5>
            Password reset via sending an email to a valid email address is
            available to users that forget their passwords
          </h5>
          <h3>Profile</h3>
          <h5>
            Any user can edit their first and last name, email address, phone
            number, password at any time by visiting the profile page
          </h5>
          <h2>Admin View</h2>
          <h3>Dashboard</h3>
          <h5>
            When logging into your admin account you will first be greeted with
            the dashboard, this contains two main tables
          </h5>
          <h5>
            The first table is for all tasks that have been submitted and need
            to be approved
          </h5>
          <h5>
            Clicking on a row containing a task will open a pop-up containing
            all of the information on a task.
          </h5>
          <h5>
            At the bottom of the pop-up, an admin can select the edit button to
            adjust any of the information in a task before approving it. Once
            edits are made the task must be approved and then it becomes
            available.
          </h5>
          <h5>
            Tasks can also be denied which will delete them from all sources
          </h5>
          <h5>
            The second table is the admins tasks that are assigned to them
          </h5>
          <h5>
            Again, clicking on a row of the table that contains a task will open
            a pop-up with the task information.
          </h5>
          <h5>
            Tasks can be marked as completed and transferred to the finished
            tasks list or dropped where they will be added back to the available
            tasks.
          </h5>
          <h5>
            To leave a comment on the task an admin or user can click the
            comment icon and leave a comment on the task to inform anyone that
            might look at the task later of any information that might be
            important to know
          </h5>
          <h5>
            A history of all the previous comments appears underneath the field
            where you type a comment
          </h5>
          <h3>Manage Users</h3>
          <h5>
            On the Manage Users page the admin can do a few things regarding
            user access to the application
          </h5>
          <h5>
            The first item displayed on the page is a list of user account
            requests that need to be approved before those users are able to use
            the application
          </h5>
          <h5>
            Clicking on a row containing user information will open a pop-up
            menu containing further information about when the account was
            created
          </h5>
          <h5>
            Two buttons will also appear at the bottom of the page as well, one
            to approve a user and give them access to the app and another to
            deny the user request which will delete the request and the user
            account as a whole.
          </h5>
          <h5>
            Below the user requests table is a master list of all users that are
            approved to use the application.
          </h5>
          <h5>
            Clicking on a row in this table will again show a pop-up with that
            specific user&apos;s information.
          </h5>
          <h5>
            There are two buttons in this pop-up as well, one which is a toggle
            to allow or disallow admin privileges as well as to delete a user.
            Note that deleting a user will also delete all of the tasks that
            that user is associated with.
          </h5>
          <h3>Manage Tasks</h3>
          <h5>
            This page contains many master lists for the admin related to the
            tasks on the farm.
          </h5>
          <h5>
            The first table is a list of all incomplete tasks. This includes
            tasks that are of the status &quot;Available&quot; and &quot;In
            Progress&quot;.
          </h5>
          <h5> Clicking on one of these tasks brings up its details page</h5>
          <h5>
            The administrator can edit the task here as well, alongside having
            the ability to drop it from a user if it is assigned to someone, or
            take that task for themselves
          </h5>
          <h5>
            This is also an area where an admin can view and add comments if it
            is needed
          </h5>
          <h5>
            Below the list of Incomplete tasks is the Completed tasks table
          </h5>
          <h5>
            This holds a record of all tasks completed by anybody on the farm.
          </h5>
          <h5>
            Administrators can view the task info by clicking on one but do not
            have the ability to edit anything as these tasks just serve as a
            record for tasks done in the past.
          </h5>
          <h5>
            Below the completed tasks list is an area to manage the existing
            locations and tags on the farm.
          </h5>
          <h5>
            This gives the administrators the ability to add new tags and
            locations to the application as they are needed as well as delete
            any tags that are out of date or are not being used.
          </h5>
          <h3>Create Task</h3>
          <h5> Admins can create tasks via a form on this page</h5>
          <h5>
            The form has required field for a title, location and tags that are
            associated with a task
          </h5>
          <h5>
            It also has options to add a budget, picture, suggest a due date or
            add further notes to the task if its required
          </h5>
          <h5>
            Dissimilarly from the user experience the admin is able to assign a
            task to a user right away as well as they do not need to have their
            tasks approved to be made available
          </h5>
          <h2>User View</h2>
          <h3>Dashboard</h3>
          <h5>
            The user dashboard contains three tables with the ability to click
            into any of the tasks listed there and view that task&apos;s
            information
          </h5>
          <h5>
            This first table shows all of the user&apos;s pending, outgoing task
            requests that are waiting to be approved. Clicking into a task here
            will show the details of the task and allow a user to add a comment
            if need be.
          </h5>
          <h5>
            The next table is a list of all of the tasks that are assigned to
            that specific user
          </h5>
          <h5>
            Clicking into a task here brings up the details and the options to
            complete a task, drop a task or leave more comments
          </h5>
          <h5>
            The final table on the page shows a record of all of the tasks that
            have been completed by that specific user. Again, a user cannot do
            any interacting with the completed tasks as it is there for a
            record.
          </h5>
          <h3>Create Task</h3>
          <h5>
            Here is where a user will create a new task to be approved by an
            admin
          </h5>
          <h5>
            The form is virtually the same as the admin create task form,
            however, users do not have the ability to assign a task to someone
            and their tasks need to be approved to have access to them
          </h5>
          <h3>Task List</h3>
          <h5>
            This page just contains a task list that are of the status Available
          </h5>
          <h5>
            Clicking into a task here gives the user the ability to take a task
            and put it onto their own list.
          </h5>
          <h5>
            This table also has the ability to sort based on location or tags so
            the user can effectively find the task that they want to do.
          </h5>
          <h3>Built With</h3>
          <h5>Javascript</h5>
          <h5>React</h5>
          <h5>Node</h5>
          <h5>Express</h5>
          <h5>Redux</h5>
          <h5>HTML/XML</h5>
          <h5>CSS (MATERIAL UI)</h5>
          <h5>SQL</h5>
          <h5>Sendgrid and Cloudinary Web APIs</h5>
        </div>
      </div>
    </div>
  );
}

export default taskPortal;
