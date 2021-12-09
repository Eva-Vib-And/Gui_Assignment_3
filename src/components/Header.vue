<template>
    <header>
        <h1>Model bureau</h1>
        <ul>
            <li> 
                <a> 
                    <router-link to="/managerside">Manager page</router-link>
               </a>
            </li>
            <li> <a> <router-link to="/modelside">Model page</router-link></a></li>
            <li> 
                <a> 
                    <router-link to="/about">About</router-link>
                </a>
            </li>
        </ul>
        
    </header>
</template>

<script>

export default {
    name: 'Header',
   
}
</script>


<style scooped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
ul {
   list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
a {
  display: block;
  padding: 8px;
  background-color: hsl(0, 47%, 19%);
}
li a:hover {
  background-color: #111;
}
</style>