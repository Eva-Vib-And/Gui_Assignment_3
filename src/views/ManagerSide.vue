<template>
<!-- Page content -->
<div class="main">
  <h1>Der er mange mangler i programmet</h1>
 <h3>You are at managerside</h3>
    
</div>
    <!-- Side navigation -->
<div class="sidenav">
  <a> <router-link to="/createmodel">Add Model</router-link>
  </a>
   <a ><router-link to="/createmanager">Add Manager</router-link></a>
    <a> <router-link to="/addnewjob">Add New Job</router-link></a>
  <a> <router-link to="/manage_J_M"> Add Model to Job </router-link></a>
    <a> <router-link to="/seeJobs">See Jobs</router-link></a>
    <a> <router-link to="/seeModels">See Models </router-link></a>
</div>
</template>

<style scope>
/* The sidebar menu */
.sidenav {
 margin-top: 2.5cm;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 165px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #4d4d4d; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
}
/* The navigation menu links */
.sidenav a {
  padding-top: 8;
  padding-bottom: 6;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
 margin-left: 5cm;
  margin-left: 180px; /* Same as the width of the sidebar */
  padding-left: 30px;
}
</style>