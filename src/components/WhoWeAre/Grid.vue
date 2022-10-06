<template>
      <div class="grid-container-2">

                     <div class="center-image box1">
                         <img class="imgResponsive" src="@/assets/pages/pubed/PUB-ED.gif" alt="GIS Photo" />
                    </div>


                    <div class="box2 pad">
                         <h1><i><center>Public Education</center></i></h1>
                            <b><p>  We provide presentations to our local cities, school, daycares, Emergency Medical Services (EMS), Fire and Police Departments within Hidalgo and Willacy County.</p></b>
                            <b><p>  We promote and educate the public on how to correctly use the 9-1-1 system. By using multi-media, we demonstrate the proper way to call 9-1-1 and what is considered a 9-1-1 emergency call.</p></b>

                    </div>

                         <div class="box3 pad">
                              <h1><i><center>Database</center></i></h1>
                                <b><p>  Database Program has the responsibility of updating the Texas State 9-1-1 database, along with a collection of diverse services:</p></b>
                                    <ul>
                                    <li>
                                        <p>Maintain and update the Master Street Address Guide (MSAG)</p></li>
                                    <li>
                                        <p>Establish the telephone numbers in the Texas State 9-1-1 database have a valid address</p></li>
                                    <li>
                                        <p>Ensure that all information is accurately maintained to accurately route calls</p></li>
                                    <li>
                                        <p>Manage telephone errors that exist and/or emerge daily</p></li>
                                    </ul>
                         </div>
                         
                    <div class="center-image box4">
                        <img class="imgResponsive" src="@/assets/pages/pubed/Database.gif" alt="GIS Photo" />
                    </div>
                        
                <div class="center-image box5">
                    <img class="imgResponsive" src="@/assets/pages/pubed/SYSTEMS.gif" alt="GIS Photo" />                 
                </div>

            <div class="box6 pad">
                 <h1><i><center>Systems & PSAP Operations Program</center></i></h1>
                <b><p>  Staying ahead of threats are ever more sophisticated and has its ongoing challenges. With the pervasive integration and sharing of data between multiple agencies, sites and/or systems; the threats and vulnerabilities have drastically increased. </p></b>
                <b><p>  Systems & PSAP Operations Program first step in staying ahead of threats is assessing data and setting priorities. New product paradigms are being designed and implemented by the PSAP community at a rapid pace. </p></b>
                <b><p>  Today's call-centers are challenged to keep pace with the rapid shifts in technology. These challenges require innovative solutions and emphasize the necessity for truly secure computing environments in today’s PSAP.  </p></b>                 
            </div>  
            <div class="center-image box7">
                <img class="imgResponsive" src="@/assets/pages/pubed/LOCATION_VALIDATION.gif" alt="GIS Photo" />
            </div>
            <div class="box8 pad">
                 <h1><i><center>Location Validation</center></i></h1>
                <b><p>  
                    The LRGVDC 9-1-1 Addressing Department work in partnership with the United States Postal Service (USPS), telephone companies and others agenices within the region to ensure 
                    the 9-1-1 physical address is established. <br><br>
                    Our responsibility consist of administration, maintenance, and assurance of all geographic information pertinent to Hidalgo
                    and Willacy County, and we're accountable for ensuring orderly assignment and maintenance of all addresses and address data. 
                </p></b>
            </div>
            <div class="center-image box9">
                <img class="imgResponsive" src="@/assets/pages/pubed/GIS.gif" alt="GIS Photo" />
            </div>
            <div class="box10 pad">
                <div>
                    <h1><i><center>Geographic Information Systems (GIS)</center></i></h1>
                <b><p>  The Emergency Communication Division, GIS Program assists Hidalgo AND Willacy County with mapping, validation and data processing associated with rural addressing for 9-1-1.  </p></b>
                <b><p>  Each county has a database maintenance/addressing coordinator that is responsible for assigning addresses to new structures and mapping new roads in the rural part of the
                        counties. Additionally, each county coordinator is responsible for maintaining the Master Street Address Guide (MSAG), updating the county maps with new roads and driveway 
                        point data, coordinating changes with municipalities and correcting errors in the 9-1-1 database. </p></b>
                </div>
            </div>
        </div>  
</template>

<style scoped>
.pad{
    padding: 10px;
}
p{
    font-weight: bold;
}
.box1 {
    grid-area: box1;
    text-align: center;
}
.box2{
    grid-area: box2;
}
.box3 {
    grid-area: box3;
    
}
.box4 {
    grid-area: box4;
    text-align: center;
}
.box5 {
    grid-area: box5;
    text-align: center;
}
.box6{
    grid-area:  box6;
}
.box7{
    text-align: center;
    grid-area: box7;
}
.box8{
    grid-area: box8;
}
.box9{
    grid-area: box9;
    text-align: center;
}

.box10{
    grid-area: box10;
}
 .grid-container-2{
    display: grid;
    gap: 10px;
    grid-template-areas: 
    "box1"
    "box2"
    "box4"
    "box3"
    "box5"
    "box6"
    "box7"
    "box8"
    "box9"
    "box10";
   
 }
  .imgResponsive {
        width: 590px;
        height: auto;
    }
    .imgResponsive:hover {
        cursor: pointer;
    }
 @media screen and (min-width: 1200px){
    .grid-container-2{
        grid-template-areas: "box1 box2"
            "box3 box4"
            "box5 box6"
            "box8 box7"
            "box9 box10";
    }
}

 @media screen and (min-width: 480px){
    .pad{
        padding: 40px;
    }

    .imgResponsive {
        width: 100%;
        height: auto;
    }
}
</style>