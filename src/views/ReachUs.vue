<template>

<div class="container">
    <div class="span">
           <span>If you need to contact a specific department, please
            review our <router-link to="ContactList">contact list</router-link></span>
    <img src="@/assets/page-imgs/contact.png" alt="lrgvdc-location">
    </div>
 
</div>
<!--
    <div class="container">
        <span>If you need to contact a specific department, please
            review our <router-link to="ContactList">contact list</router-link></span>
        <div class="rbody">
             <div class="contacts">
                <h3>Phone</h3>
                <span>956-682-3481 ext 174</span>
                <h3>Mailing Address</h3>
                <p>RGV 9-1-1</p>
                <p>301 W. Railroad</p>
                <p>Weslaco TX 78596</p>
                <h3>Building Address</h3>
                <p>1912 Joe Stephens Ave</p>
                <p>Weslaco TX 78599</p>

            </div>
        </div>

        <div class="map">
            <div style="text-decoration:none;max-width:100%;width:450px;height:300px;">
                <div id="display-googlemap" style="height:100%; width:100%;max-width:100%;">
                <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=1912+Joe+Stephens+Ave+A,+Weslaco,+TX+78599&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                </div>
            </div>
        </div>
    </div>
    -->
</template>

<style scoped>

.span {
    padding: 20px;
}
/*
.container {
    display: grid;
    grid-auto-columns: 1fr 1fr;
}




.container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    padding: 20px;
}
.contacts{
    width: 450px;
}
.rbody{
    display: flex;
}

*/


@media screen and (max-width: 480px) {
    .contacts {
        padding: 5px;
        font-size: 12px;
    }

    span {
        padding: 5px;
    }
    
}
</style>